# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15 portfolio website using the App Router architecture with the following key characteristics:

### Core Structure
- **App Router**: Uses `app/` directory structure with nested layouts and pages
- **Portfolio Focus**: Personal portfolio for "Natcha Pradappet" showcasing design engineering work
- **Component-Based**: Modular component architecture with clear separation of concerns

### Styling & Design System
- **Tailwind CSS v4**: Uses the new `@import "tailwindcss"` syntax and inline theme configuration
- **CSS Custom Properties**: Extensive use of CSS variables for theming (`--base-*`, `--accent-*`)
- **Dark/Light Mode**: Theme switching via `next-themes` with system preference support
- **Design Tokens**: Custom color scales using OKLCH color space for consistent theming

### Key Architectural Patterns
- **Typography System**: Centralized typography components in `components/typography/`
- **Layout Components**: Reusable layout primitives (`Container`, `Section`, `PageHeader`)
- **Project Data**: Centralized project configuration in `data/projects.tsx`
- **Component Library**: Mix of custom UI components and Radix UI primitives

### Tech Stack Integration
- **Fonts**: Uses Fontsource for `Rubik Variable` and `Intel One Mono Variable`
- **Icons**: Combination of Lucide React and Tabler Icons
- **Animations**: Motion library for animations, custom CSS animations for marquees
- **UI Components**: Built on Radix UI primitives with custom styling

### Project Structure Patterns
- `app/work/[slug]/` - Dynamic routes for individual project pages
- `components/sections/` - Page section components (Hero, About, Contact, etc.)
- `components/ui/` - Reusable UI primitives and complex components
- `components/layout/` - Layout-specific components
- `styles/` - Global styles split into logical files (global, typography, variables)

### Development Notes
- Uses TypeScript throughout
- ESLint for linting
- Component composition over inheritance
- Responsive design with mobile-first approach
- Performance optimizations via Next.js 15 features and Turbopack

When working on this codebase, prioritize maintaining the existing design system patterns and component structure. The project emphasizes clean, minimal design with sophisticated typography and careful attention to spacing and color relationships.