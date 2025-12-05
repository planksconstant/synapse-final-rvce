# AI Image Processor

## Overview

A sophisticated batch image processing tool that allows users to upload up to nine images simultaneously. Powered by **GPT-4o via OpenRouter**, the platform performs advanced AI-powered analysis to automatically generate:

- Detailed, contextual descriptions of each image
- Comprehensive, relevant tags for categorization and searchability
- Secure storage via Minio object storage with presigned URLs
- Persistent metadata in PostgreSQL for instant retrieval

This tool transforms raw, unstructured visual assets into intelligently categorized, searchable design resources.

## Technology Stack

- **Frontend**: React, TanStack Router, Tailwind CSS
- **Backend**: tRPC, Prisma ORM, PostgreSQL
- **AI**: OpenRouter (GPT-4o for image analysis)
- **Storage**: Minio object storage
- **Infrastructure**: Docker, Docker Compose, Nginx

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the development environment
./scripts/run

# Stop the environment
./scripts/stop
```

The application will be available at the configured local development URL.

## Environment Variables

See `.env` file for required configuration, including:
- Database connection strings
- Minio/S3 storage credentials
- OpenRouter API key for AI analysis
- Application base URLs

---

**Built for designers, product managers, and developers who need intelligent image analysis and organization.**
