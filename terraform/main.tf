terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Standard region for CloudFront/S3
provider "aws" {
  region = "us-east-1"
}

# S3 Bucket for Static Website Hosting
resource "aws_s3_bucket" "website_bucket" {
  bucket = "portfolio-drion-dev"
}

resource "aws_cloudfront_origin_access_control" "default" {
  name = "s3_oac"
  description = "CloudFront access to S3"
  origin_access_control_origin_type = "s3"
  signing_behavior = "always"
  signing_protocol = "sigv4"
}

# Standard S3 Website Configuration
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.website_bucket.id
  index_document { suffix = "index.html" }
  error_document { key = "index.html" }
}

resource "aws_acm_certificate" "portfolio_cert" {
  domain_name               = "drion.dev"
  subject_alternative_names = ["*.drion.dev", "marllon.drion.dev", "*.marllon.drion.dev"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# This resource will make the Terraform to wait until the certificate is issued
resource "aws_acm_certificate_validation" "cert_waiter" {
  certificate_arn = aws_acm_certificate.portfolio_cert.arn
}

# CloudFront Distribution (The CDN)
resource "aws_cloudfront_distribution" "s3_distribution" {
  # Add your domain name here
  aliases = ["drion.dev", "www.drion.dev", "marllon.drion.dev", "www.marllon.drion.dev"]

  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id = "S3-Website"
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-Website"

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate {
    # By using the waiter's ARN, Terraform won't start this step until validation is complete
    acm_certificate_arn = aws_acm_certificate_validation.cert_waiter.certificate_arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action = "s3:GetObject"
        Resource = "${aws_s3_bucket.website_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}

# Output the DNS records you need to add to Cloudflare
output "certificate_validation_dns_records" {
  value = aws_acm_certificate.portfolio_cert.domain_validation_options
}