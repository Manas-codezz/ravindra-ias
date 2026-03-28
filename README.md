# Ravindra IAS - UPSC Coaching Website

A modern, production-ready UPSC coaching website built with Next.js, featuring a dark premium UI with glassmorphism effects, animations, and an AI-powered rank predictor.

## Features

- **Modern Dark UI**: Premium glassmorphism design with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Rank Predictor**: AI-powered tool to predict UPSC ranks
- **Multiple Pages**: Home, Courses, Results, Resources, About, Contact, and Predictor
- **Smooth Animations**: Framer Motion animations throughout
- **Professional Components**: Reusable components for scalability

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx                 # Home page
  /courses/page.tsx         # Courses listing
  /results/page.tsx         # Success stories
  /resources/page.tsx       # Study materials
  /about/page.tsx          # About us
  /contact/page.tsx        # Contact form
  /predictor/page.tsx      # Rank predictor (X-factor feature)
  /layout.tsx              # Root layout
  /globals.css             # Global styles

/components
  /Navbar.tsx              # Navigation bar
  /Footer.tsx              # Footer component
  /Hero.tsx                # Hero section
  /CourseCard.tsx          # Course card component
  /TopperCard.tsx          # Topper card component
  /TestimonialCard.tsx     # Testimonial card
  /FeatureCard.tsx         # Feature card
```

## Pages Overview

### Home Page (/)
- Hero section with animated topper cards
- Stats showcase
- Course preview
- Features section
- Testimonials
- CTA section

### Courses Page (/courses)
- Filterable course listing
- Category filters (Prelims, Mains, Interview, Beginner, Advanced)
- Detailed course cards with pricing
- "Most Popular" badge

### Results Page (/results)
- Grid of top rankers
- Year-wise filtering
- Success statistics
- Topper testimonials

### Resources Page (/resources)
- Study materials
- Current affairs
- Test series
- Search functionality
- Category filters
- Free/Paid badges

### Rank Predictor (/predictor)
- Interactive form for marks input
- AI-powered rank estimation
- Personalized recommendations
- Next steps guidance
- Futuristic UI with glow effects

### About Page (/about)
- Mission & Vision
- Core values
- Expert faculty profiles
- Timeline of achievements

### Contact Page (/contact)
- Contact form with validation
- Contact information
- Office hours
- Quick links

## Design System

### Colors
- Background: `#0B0F1A`
- Primary: `#6366F1` (Indigo)
- Secondary: `#22D3EE` (Cyan)
- Accent: `#FACC15` (Gold)
- Text: `#E2E8F0`

### Typography
- Headings: Inter (Bold)
- Body: Inter (Regular)

### Effects
- Glassmorphism: `backdrop-blur-md` with `bg-white/5`
- Glow effects on interactive elements
- Smooth hover transitions
- Floating animations

## Key Features

### 1. Glassmorphism Design
Modern glass-like UI elements with backdrop blur and transparency

### 2. Smooth Animations
- Scroll-based animations
- Hover effects
- Page transitions
- Floating elements

### 3. Rank Predictor (Unique Feature)
Interactive tool that estimates UPSC rank based on:
- Prelims marks
- Mains marks
- Optional subject selection

Provides:
- Estimated rank range
- Performance category
- Personalized recommendations
- Next steps guidance

### 4. Responsive Design
- Mobile-first approach
- Breakpoints for all screen sizes
- Collapsible mobile menu
- Touch-friendly interface

## Customization

### Colors
Edit colors in `app/globals.css` and Tailwind config

### Content
Modify page content in respective page files

### Components
Reusable components in `/components` directory

## Performance

- Static generation for optimal performance
- Optimized images and assets
- Minimal bundle size
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Ravindra IAS.

## Contact

For any queries, reach out to info@ravindraias.com
