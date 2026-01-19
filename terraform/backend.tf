terraform {
  backend "s3" {
    bucket  = "my-portfolio-vite-app-drion-dev"
    key     = "terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}