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
  bucket = "my-portfolio-vite-app-drion-dev"
}

# Standard S3 Website Configuration
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.website_bucket.id
  index_document { suffix = "index.html" }
  error_document { key = "index.html" }
}

# CloudFront Distribution (The CDN)
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id   = "S3-Website"
  }

  enabled             = true
  is_ipv6_enabled     = true
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
    cloudfront_default_certificate = true
  }
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}