# AI Website Builder

## Overview

A sophisticated visual website builder that allows users to create websites through drawing and AI assistance. Powered by **multiple AI providers (Anthropic, Google, OpenAI)**, the platform performs advanced AI-powered website generation to automatically create:

- Complete website code from visual drawings
- Multiple tech stack options (React, Next.js, Vue, etc.)
- Live deployment capabilities
- Real-time preview and editing
- Database integration with Prisma

This tool transforms visual wireframes into fully functional, deployed websites using cutting-edge AI technology.

## Technology Stack

- **Frontend**: React 19, TanStack Router, TanStack Start, Tailwind CSS
- **Backend**: tRPC, Prisma ORM, PostgreSQL
- **AI**: Anthropic Claude, Google AI, OpenAI GPT, OpenRouter
- **Canvas**: React Konva for visual design interface
- **State Management**: Zustand
- **UI**: Headless UI, Lucide Icons
- **Build**: Vite, Vinxi

## Features

### 🎨 Visual Design Interface
- Draw website layouts with intuitive tools
- Real-time canvas with React Konva
- Toolbar with drawing tools and controls

### 🤖 AI-Powered Generation
- Analyze drawings with multiple AI providers
- Generate complete website code
- Choose from various tech stacks and frameworks
- Customize features and styling preferences

### 🚀 Live Deployment
- Deploy generated websites instantly
- View live previews
- Download generated code
- Persistent storage and retrieval

### 🛠️ Tech Stack Flexibility
- React, Next.js, Vue.js frameworks
- Multiple backend options
- Database integration
- Styling frameworks

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Database operations
pnpm db:generate
pnpm db:push
pnpm db:studio
```

## Environment Variables

Create a `.env` file with:

```env
# Database
DATABASE_URL="postgresql://..."

# AI Providers
ANTHROPIC_API_KEY="..."
GOOGLE_AI_API_KEY="..."
OPENAI_API_KEY="..."
OPENROUTER_API_KEY="..."

# Storage (Minio/S3)
MINIO_ENDPOINT="..."
MINIO_ACCESS_KEY="..."
MINIO_SECRET_KEY="..."

# Application
BASE_URL="http://localhost:3000"
```

## Project Structure

```
├── app/                    # TanStack Start API routes
│   ├── routes/            # API endpoints
│   └── config.ts          # App configuration
├── src/
│   ├── components/        # React components
│   │   ├── DrawingEditor.tsx
│   │   ├── DrawingToolbar.tsx
│   │   └── ...
│   ├── routes/            # Page routes
│   ├── stores/            # Zustand stores
│   ├── trpc/              # tRPC client/router
│   ├── lib/               # Utilities
│   └── styles.css         # Global styles
├── prisma/
│   └── schema.prisma      # Database schema
└── package.json
```

---

**Built for designers, developers, and entrepreneurs who want to create websites faster with AI assistance.**
