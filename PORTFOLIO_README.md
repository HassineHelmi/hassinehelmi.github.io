# Modern Developer Portfolio - Helmi Hassine

A beautiful, responsive portfolio website built with Next.js 15.5.3, TypeScript, and TailwindCSS featuring smooth animations and dark/light mode support.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered scroll-based and hover animations
- **Component-Based**: Modular, reusable React components
- **Type-Safe**: Full TypeScript implementation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Main page component
│   └── providers/        # Theme provider setup
├── components/           # Reusable UI components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── ProgressBar.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── SkillsSection.tsx
│   ├── ThemeToggle.tsx
│   └── index.ts         # Component exports
└── data/
    └── data.ts          # Centralized data management
```

## 📋 Sections

### 1. Hero Section
- Professional introduction with animated avatar
- Call-to-action buttons
- Animated scroll down indicator

### 2. About Section
- Personal background and bio
- Location and experience stats
- Professional photo placeholder

### 3. Skills Section
- Categorized skill display with progress bars
- Interactive bubble layout
- Animated skill reveals

### 4. Services Section ⭐ (New)
- **Full-Stack Web Development**
- **UI/UX Development**
- **Mobile App Development**
- **Cloud & DevOps**
- **AI-Powered Solutions**

### 5. Experience Section
- Timeline-based layout
- Company details and achievements
- Technology stack indicators

### 6. Projects Section
- Featured project showcase
- Interactive project cards
- GitHub and demo links

### 7. Contact Section
- Contact information with click-to-copy
- Form validation with error handling
- Social media links including WhatsApp

### 8. Footer
- Quick navigation links
- Social media connections
- Copyright information

## 🎨 Key Improvements Made

1. **Restructured Architecture**: Separated components into individual files for better maintainability
2. **Centralized Data**: All content managed in a single `data.ts` file
3. **Enhanced Services Section**: Added comprehensive service offerings
4. **Improved Contact Info**: Updated with correct phone, email, LinkedIn, GitHub, and WhatsApp
5. **Better Form Validation**: Comprehensive client-side validation with error messages
6. **Enhanced Animations**: Smooth scroll-based animations and hover effects
7. **Bubble Skills Layout**: Interactive skill bubbles with animations
8. **Scroll Down Indicator**: Animated indicator in hero section

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.3 with App Router
- **Styling**: TailwindCSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Theme**: Next Themes for dark/light mode
- **Language**: TypeScript

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Contact Information

- **Phone**: +216 28372002
- **Email**: helmi.hassine1@gmail.com
- **LinkedIn**: [linkedin.com/in/helmi-hassine](https://linkedin.com/in/helmi-hassine)
- **GitHub**: [github.com/HassineHelmi](https://github.com/HassineHelmi)
- **WhatsApp**: [Direct Chat](https://wa.me/21628372002)

## 🎯 Future Enhancements

- [ ] Add project screenshots/images
- [ ] Implement blog section
- [ ] Add testimonials section
- [ ] Integrate with a CMS for dynamic content
- [ ] Add analytics tracking
- [ ] Implement contact form backend

---

**Built with ❤️ and lots of ☕ by Helmi Hassine**