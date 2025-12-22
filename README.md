# SATS FINSERV - Modern Financial Services Website

A modern, premium website for SATS FINSERV Pvt Ltd, an AMFI-registered Mutual Fund Distributor based in Indore, India. Built with cutting-edge React technologies and featuring a fintech-grade UI with smooth animations.

## 🎨 Design Features

- **Modern Fintech UI**: Clean, professional design with blue and muted green color palette
- **Smooth Animations**: Framer Motion powered animations throughout
- **Glassmorphism Effects**: Subtle glass-like UI elements for premium feel
- **Responsive Design**: Mobile-first approach with thumb-friendly spacing
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Lazy loading, optimized animations, and efficient bundle size

## 🚀 Tech Stack

### Core Framework
- **React 18.3.1** - Modern React with hooks
- **Vite 5.4.19** - Lightning-fast build tool
- **TypeScript 5.8.3** - Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Production-ready motion library for animations
- **Lucide React** - Beautiful icon library

### Forms & Validation
- **React Hook Form 7.61.1** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation

### Additional Libraries
- **React Router DOM 6.30.1** - Client-side routing
- **React Helmet Async 2.0.5** - Document head management
- **Sonner 1.7.4** - Toast notifications

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended)

### Setup Steps

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd sats-finserv-launch

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run generate-favicon` - Generate favicon files from SVG icon

## 📁 Project Structure

```
sats-finserv-launch/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon.svg           # Source SVG for favicon
│   └── ...
├── src/
│   ├── assets/            # Images and other assets
│   │   └── logo.png
│   ├── components/
│   │   ├── layout/        # Layout components (Header, etc.)
│   │   ├── sections/      # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── OfferingsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── AdditionalOfferingsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles and design tokens
├── scripts/
│   └── generate-favicon.js # Favicon generation script
└── package.json
```

## 🎯 Key Features

### Sections

1. **Hero Section**
   - Animated background with abstract shapes
   - Staggered text reveal animations
   - Gradient CTA buttons with hover effects
   - Trust badges with micro-interactions

2. **About/Stats Section**
   - Count-up animations for statistics
   - Card-based layout with hover effects
   - Responsive grid system

3. **Products & Services**
   - Tab-based navigation (Products/Services)
   - 7 Products: Mutual Funds, Bonds, FDs, NPS, Life Insurance, Health Insurance, SGBs
   - 3 Services: Tax Saving, Child Future Saving, Retirement Saving
   - Smooth expand/collapse animations

4. **Process Section**
   - Animated vertical timeline
   - Scroll-based progress indicator
   - 7-step process visualization

5. **Additional Offerings**
   - Educational Videos
   - Secure Client Login
   - In-Person Support

6. **Testimonials**
   - Client testimonials with long-term relationships
   - Grid layout with hover effects

7. **Contact/Enquiry Form**
   - Glassmorphism design
   - Form validation with React Hook Form + Zod
   - Success animations
   - Updated contact details

### Animations

- **Framer Motion** animations throughout
- Fade + slide-up on section entry
- Staggered animations for cards and lists
- Number count-up animation for stats
- Hover micro-interactions on buttons and cards
- Scroll-triggered animations
- Smooth page transitions

## 🎨 Design System

### Colors
- **Primary**: Professional Blue (`hsl(217 91% 60%)`)
- **Secondary**: Muted Green (`hsl(142 52% 45%)`)
- **Accent**: Orange (`hsl(27 85% 52%)`)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Spacing & Layout
- Mobile-first responsive design
- Container max-width: 7xl (1280px)
- Section padding: 20-28 (vertical), 16-32 (horizontal)

## ⚖️ SEBI Compliance

All content is strictly SEBI-compliant:
- ✅ No investment advice language
- ✅ No scheme recommendations
- ✅ No performance promises
- ✅ Informational and facilitative tone only
- ✅ Proper disclaimers included
- ✅ No prohibited words (consultant, advisor, mentor, guide, recommendation)

## 📱 Contact Information

**SATS FINSERV Pvt Ltd**

- **Address**: 409 & 411, Shalimar Corporate Centre, Beside Cosmos Bank, South Tukoganj, Behind High Court, Indore – 452001 (M.P)
- **Phone**: +91-9009999833
- **Email**: support@satsfinserv.in

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting provider.

### Recommended Hosting Platforms

- **Vercel** - Zero-config deployment (recommended)
- **Netlify** - Easy static site hosting
- **AWS S3 + CloudFront** - Enterprise-grade hosting
- **GitHub Pages** - Free hosting for public repos

### Environment Variables

Currently, no environment variables are required. If you need to add API endpoints or other configuration, create a `.env` file:

```env
VITE_API_URL=your_api_url
```

## 🔧 Development

### Code Style

- ESLint configured for code quality
- TypeScript for type safety
- Prettier (if configured) for code formatting

### Adding New Components

1. Create component in `src/components/`
2. Use shadcn/ui components from `src/components/ui/`
3. Follow existing animation patterns with Framer Motion
4. Maintain SEBI compliance in all content

### Customization

- **Colors**: Update CSS variables in `src/index.css`
- **Fonts**: Modify `@import` in `src/index.css`
- **Animations**: Adjust Framer Motion variants in components
- **Content**: Update section components in `src/components/sections/`

## 📄 License

© 2024 SATS FINSERV Pvt Ltd. All rights reserved.

## ⚠️ Disclaimer

Mutual fund investments are subject to market risks. Please read all scheme related documents carefully. SATS FINSERV Pvt Ltd is a Mutual Fund Distributor registered with AMFI and does not provide investment advisory services or guarantee returns. All transactions are executed solely based on investor instructions.

---

Built with ❤️ using modern web technologies
