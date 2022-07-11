# -----------------------------------------------------------------------------
# Variables: Cloud Provider
# -----------------------------------------------------------------------------

variable "provider_region" {
  description = "AWS region"
  default = "us-east-1"
}

variable "provider_access_key" {
  description = "AWS access key"
}

variable "provider_secret_key" {
  description = "AWS secret key"
}

# -----------------------------------------------------------------------------
# Variables: Main
# -----------------------------------------------------------------------------

variable "namespace" {
  description = "AWS resource namespace/prefix"
  default = "prod"
}

variable "resource_tag_name" {
  description = "Resource tag name for cost tracking"
  default = "portfolio_site"
}

variable "vpc_id" {
  description = "VPC id"
}
