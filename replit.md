# Overview

This is a full-stack osteopathic clinic website built with React, Express, and TypeScript. The application provides a professional web presence for an osteopathic practice, featuring service information, practitioner details, and an appointment booking system. The site is designed to be responsive and includes contact functionality with WhatsApp integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using **TypeScript** and follows a modern component-based architecture:

- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI components
- **Tailwind CSS** for styling with custom CSS variables for theming
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling

The application structure follows a feature-based organization with pages, components, and shared utilities clearly separated. The UI uses a professional design system with custom color schemes for the healthcare industry.

## Backend Architecture

The backend uses **Express.js** with TypeScript in ESM format:

- **RESTful API** design with a single booking endpoint (`/api/booking`)
- **Memory storage** implementation for development (easily replaceable with database storage)
- **Zod validation** for request/response schemas shared between frontend and backend
- **CORS and security middleware** for production readiness

The server implements a middleware pattern for request logging and error handling, with development-specific Vite integration for hot module replacement.

## Data Storage Solutions

Currently uses **in-memory storage** for development with a clean interface pattern:

- **IStorage interface** defines the contract for data operations
- **MemStorage class** provides the current implementation
- Database schema defined with **Drizzle ORM** ready for PostgreSQL integration
- **Neon Database** configured for production deployment

The schema includes users and bookings tables with proper TypeScript types generated from Drizzle schemas.

## Authentication and Authorization

Basic authentication structure is in place but not currently implemented:

- User schema with username/password fields defined
- Storage interface includes user management methods
- Ready for session-based or JWT authentication implementation

## Form Validation and Data Flow

**Zod schemas** provide type-safe validation across the full stack:

- Shared schema definitions in `/shared/schema.ts`
- Frontend forms use React Hook Form with Zod resolvers
- Backend validates requests using the same schemas
- Type safety maintained from database to UI components

## External Dependencies

**UI and Styling:**
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Custom fonts (Inter, Open Sans, Georgia) for professional typography

**Database and ORM:**
- Drizzle ORM with Drizzle Kit for migrations
- Neon Database (PostgreSQL) for cloud hosting
- Connection pooling with @neondatabase/serverless

**Development Tools:**
- Vite with React plugin for fast development
- TypeScript for type safety across the stack
- ESLint and Prettier for code quality (configured)
- Replit-specific plugins for development environment integration

**Communication Services:**
- WhatsApp integration for instant customer communication
- Email service ready for Resend API integration (commented code present)
- Toast notifications for user feedback

**Build and Deployment:**
- ESBuild for server-side bundling
- Vite for client-side building
- Environment variable configuration for different deployment stages
- Replit hosting optimization with custom banner and cartographer plugins