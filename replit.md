# Flower Bouquet Website

## Overview
A premium flower collection website built with React, Vite, and Tailwind CSS. The application showcases exquisite bouquets designed to express love and emotions.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack React Query
- **Routing**: React Router DOM v6

## Project Structure
```
src/
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui components
├── pages/          # Page components
│   ├── Index.tsx   # Home page
│   └── NotFound.tsx
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── App.tsx         # Main app component
```

## Development
- **Start dev server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`
- **Test**: `npm run test`

## Recent Changes
- January 31, 2026: Migrated from Lovable to Replit environment
  - Updated Vite config for Replit (port 5000, allowedHosts)
  - Removed lovable-tagger dependency from vite config
- January 31, 2026: Updated branding assets
  - Replaced hero section background video
  - Updated shop logo URL

## User Preferences
- None recorded yet

## Architecture Notes
- Uses shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom configuration
- React Query for data fetching (configured but not actively used yet)
