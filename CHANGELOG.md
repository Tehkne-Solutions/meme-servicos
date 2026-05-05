# Changelog - Meme Serviços Landing Page

## [Unreleased]

### Added
- **LogoCarousel Component**: Infinite marquee carousel for client logos with gradient masks and hover effects
- **SmoothScroll Component**: Lenis-based smooth scrolling for premium user experience
- **Header Component**: Dynamic glassmorphism header with scroll effects and navigation
- **Premium CTA Buttons**: Framer Motion animations (scale 1.02 on hover, 0.98 on tap) applied to all CTA buttons across the site
- **Framer Motion Integration**: Spring-based animations with stiffness 400 and damping 17 for all interactive elements

### Enhanced
- **Button Styling**: All CTA buttons now use `btn-premium` class with shimmer effect and consistent premium styling
- **Page Structure**: Wrapped main content with SmoothScroll provider and added Header component
- **Animation Consistency**: All buttons now have identical hover/tap animations for enterprise feel

### Fixed
- **Carrossel Implementation**: Corrected infinite carousel to use client logos instead of differentials content
- **Import Corrections**: Fixed import statements in page.tsx (Method vs FAQ duplication)

### Technical Details
- **Dependencies Added**: `@studio-freight/react-lenis` for smooth scrolling
- **Animation Parameters**: Consistent spring animations with `stiffness: 400, damping: 17`
- **Performance**: Optimized carousel with duplicated array for seamless infinite loop
- **Accessibility**: Maintained semantic HTML and ARIA attributes in new components

### Commits
- feat: add LogoCarousel component with infinite marquee and hover effects
- feat: implement SmoothScroll with Lenis for premium UX
- feat: create dynamic Header with glassmorphism and scroll effects
- feat: upgrade all CTA buttons to premium animations
- fix: correct carrossel implementation for client logos
- refactor: update page structure with SmoothScroll and Header