# CanezSolutions

[![Next.js](https://img.shields.io/badge/Next.js-15.0+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**CanezSolutions** is a high-end, editorial-style web presence for a cybersecurity and IT monitoring firm specializing in Spanish SMEs. The project implements a "clean brutalist" aesthetic—deliberately avoiding generic SaaS tropes in favor of a direct, professional, and human-centric presentation.

## 🏛️ Design Philosophy

This project follows a "technical editorial" approach:
- **Brutalist Roots**: High-contrast, strong typography (Geist & Geist Mono), and clear information hierarchy.
- **Non-Standard Layouts**: Avoidance of generic "AI-slop" grids, opting for varied, intentional section designs.
- **Language**: Fully localized in Spanish (`es_ES`), catering specifically to the Spanish SME market.

## 🚀 Key Features

- **Brutalist Technical Aesthetic**: A unique design language that avoids standard SaaS tropes, focusing on typography, grid-less layouts, and technical authenticity.
- **Service-Oriented Architecture**: Clear, detailed presentation of core services (Auditing, SOC, and Response Protocols) with real-world case studies.
- **Fully Responsive**: Optimized for all devices, from mobile to desktop.
- **Contact Integration**: Functional contact form powered by the [Resend API](https://resend.com/).
- **SEO Optimized**: Strict adherence to technical SEO standards, including metadata, semantic HTML, and accessibility.
- **Next.js 15+ & React 19**: Built with the latest technologies for performance and maintainability.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📁 Project Structure

```bash
├── app/                # Next.js App Router (Layouts, Pages, API)
├── components/         # Reusable UI components (Hero, Services, Contact, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and shared logic
├── public/             # Static assets (images, icons, fonts)
└── styles/             # Global CSS and Tailwind configuration
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/loren-hub/canezsolutions.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing and Quality

- **Linting**: `npm run lint`
- **Building**: `npm run build`

## 📄 License

This project is private and proprietary. All rights reserved.

---

Built with ❤️ by CanezSolutions.
