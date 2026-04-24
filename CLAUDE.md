# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- **IMPORTANT**: Never run the npm run dev command, the user will handle this

## Architecture

This is a Next.js 15.3.3 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/layout.tsx` - Root layout with Geist font configuration
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles with Tailwind CSS
- `public/` - Static assets and images

### Key Technologies
- **Next.js 15.3.3** with App Router
- **React 19** 
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **Geist fonts** (sans and mono) from next/font/google
- **ESLint** with Next.js TypeScript configuration

### TypeScript Configuration
- Path alias `@/*` maps to `./src/*`
- Strict mode enabled with incremental compilation
- Next.js plugin included for optimal integration

## Project Details

This is the Computer Recyclers USA website recreation based on a provided screenshot.

### Assets
- `public/logo.png` - Main Computer Recyclers USA logo
- `public/bg1.png` - Hero section background image (building exterior)
- `public/r2-logo.png` - R2 certification logo for footer section
- `public/screenshot.png` - Original design reference

### Current Implementation
- **Smart Header**: Sticky header with smart shrinking animation on scroll, logo with certification badges (R2 v3, ISO 14001:2015, ISO 9001:2015, ISO 45001:2018)
- **Navigation**: Responsive navigation with smooth hover animations and underline effects, "SCHEDULE FREE PICKUP" CTA button
- **Hero Section**: Full-height hero with background image overlay, modern typography with gradient text effects, dual CTA buttons
- **Services Section**: Four-column grid showcasing actual services (Onsite Data Destruction, Free IT Equipment Pickup, Responsible Recycling, IT Equipment Leasing)
- **About Section**: Two-column layout with company highlights and certification showcase
- **Contact Section**: Dark-themed contact section with multiple contact methods and prominent CTA

### Interactive Features
- **Smart Header Animation**: Header and logo shrink smoothly when scrolling down (triggered after 100px scroll)
- **Smooth Scrolling**: Anchor navigation with smooth scroll behavior
- **Hover Effects**: Scale transforms, color transitions, and shadow effects on interactive elements
- **Responsive Certifications**: Certification badges adapt size and spacing based on scroll state

### Design Notes
- Modern professional design optimized for corporate clients
- Green color scheme (#22c55e for buttons, #16a34a for darker green)
- Custom CSS animations (fade-in, slide-up, pulse-gentle)
- Logo background handling with mix-blend-multiply for transparency
- Responsive design with mobile-first approach using Tailwind CSS v4
- Geist font family for modern typography