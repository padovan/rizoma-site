# Instituto Rizoma Website - Claude Code Documentation

## Project Overview
This is an Astro-based website for Instituto Rizoma de Saúde Integral, an online mental health service in Brazil. The site features a modern design with therapeutic group services, professional pages, and integrated WhatsApp contact functionality.

## Key Technologies
- **Framework**: Astro 4.x with SSG (Static Site Generation)
- **Styling**: Tailwind CSS with custom Rizoma color palette
- **Icons**: Astro Icon (bx icons)
- **Fonts**: Bricolage Grotesque Variable, Inter Variable
- **Analytics**: Google Analytics (gtag.js) with conversion tracking

## Project Structure
```
src/
├── components/
│   ├── contato.astro          # Contact section component
│   ├── equipe.astro           # Team member grid
│   ├── footer.astro           # Site footer
│   ├── hero.astro             # Homepage hero with banner
│   ├── whatsapp-float.astro   # Floating WhatsApp button
│   └── navbar/
│       └── navbar.astro       # Main navigation
├── layouts/
│   ├── Layout.astro           # Main layout wrapper
│   └── ProfissionaisLayout.astro # SEO-optimized professional pages
├── pages/
│   ├── index.astro            # Homepage
│   ├── blog.astro             # Blog listing
│   ├── grupos-terapeuticos.astro # Therapeutic groups page
│   ├── sobre.astro            # About page
│   └── profissionais/
│       └── ana-carolina.astro # Ana Carolina's professional page
├── content/
│   └── blog/                  # Markdown blog posts
├── assets/                    # Images and static assets
└── config.ts                  # Centralized configuration
```

## Custom Color Palette
```css
'rizoma-bege': '#fff6e7'           // Light beige background
'rizoma-bege-stronger': '#f5e6d3'  // Stronger beige for hover states
'rizoma-green': '#1e3322'          // Dark green for text/headers
'rizoma-green-lighter': '#618e81'  // Medium green for sections
'rizoma-green-button': '#0b937cff' // Green for buttons
```

## Key Features

### 1. Hero Section with Groups Banner
- Water background image with overlay
- Prominent banner for therapeutic groups (groups-terapeuticos page)
- Responsive layout with services list
- Semi-transparent content box for readability

### 2. WhatsApp Integration
Centralized in `src/config.ts`:
```javascript
export const whatsappHelpers = {
  getDefaultWhatsappUrl: () => `https://wa.me/5519996395866?text=${encodeURIComponent("Olá. Gostaria de mais informações sobre os serviços do Instituto Rizoma.")}`,
  getWhatsappUrl: (message) => `https://wa.me/5519996395866?text=${encodeURIComponent(message)}`
};
```

### 3. SEO Optimization
- Professional pages have dedicated SEO layouts
- Structured data (schema.org) for medical organizations
- Meta tags, Open Graph, and Twitter Cards
- Localized for Brazilian Portuguese (pt-BR)

### 4. Blog System
- Markdown/MDX support with frontmatter
- Portuguese date formatting
- Image handling for local and external sources
- Category and tag system

## Important Pages

### Homepage (`/`)
- Hero section with services overview
- Groups banner linking to `/grupos-terapeuticos`
- Team section with professional links
- Contact information

### Grupos Terapêuticos (`/grupos-terapeuticos`)
- Three therapeutic group types:
  1. Grupo terapêutico aberto (Tuesdays 9am)
  2. Grupo problemáticas amorosas (Fridays 1pm)
  3. Grupo psicodélicos e cannabis (Wednesdays 10:30am)
- Individual WhatsApp links for each group
- SEO optimized for group therapy searches

### Professional Pages (`/profissionais/ana-carolina`)
- Uses `ProfissionaisLayout` for enhanced SEO
- Professional bio, services, and contact
- Integrated contact component with custom WhatsApp messages
- Responsive image layouts

## Build & Development Commands
```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking (important to run before commits)
pnpm typecheck

# Linting
pnpm lint
```

## Contact Information
- **Phone**: (19) 99639-5866
- **Email**: institutorizomasi@gmail.com

## Analytics & Tracking
- Google Analytics ID: `AW-964101777`
- Implemented in both main layouts for complete coverage
- Conversion tracking for appointment bookings

## Content Management Notes
- Blog posts in `/src/content/blog/` with Markdown frontmatter
- Team member data is hardcoded in templates (removed collection system)
- WhatsApp messages should be updated in `src/config.ts`
- SEO content for new professional pages should follow Ana Carolina's pattern

## Deployment
The site is built as a static site and can be deployed to any static hosting service. The `dist/` folder contains the built site after running `pnpm build`.

## Recent Major Updates
1. Added therapeutic groups page with open enrollment
2. Implemented Google Analytics tracking
3. Enhanced WhatsApp integration with configurable messages
4. Improved hero section layout and spacing
5. Added comprehensive SEO for professional pages
6. Created reusable contact component with custom messaging