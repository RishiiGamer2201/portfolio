# Rishii Kumar Singh - Developer Portfolio

A modern, high-performance personal portfolio website built to showcase my projects, achievements, and skills in AI/ML, Computer Vision, and Software Engineering.

![Portfolio Preview](./public/portfolio-preview.png) *(Note: Replace this image path with an actual preview screenshot if available)*

## 🚀 Live Demo
[View Live Portfolio](https://rishii.vercel.app/) *(Update with actual deployed URL)*

## 🛠️ Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS for custom animations/glassmorphism
- **3D Graphics:** [Spline](https://spline.design/) (Interactive Hero Section)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI) & Custom UI elements
- **Form Handling:** [Web3Forms](https://web3forms.com/) for contact functionality
- **Icons:** Lucide React & Custom SVG Icons
- **Deployment:** Vercel

## ✨ Key Features
- **Interactive 3D Hero:** Features a custom Spline 3D robot that follows the user's cursor.
- **Glassmorphism Design System:** Consistent use of blurred backgrounds, semi-transparent panels, and glowing borders (`rgba(0, 245, 212, 0.25)`) to create a deep, premium dark mode aesthetic.
- **Dynamic Content:** Fully populated sections for Skills, Experience, Education (Examination Scores), Projects, Certifications, and Achievements.
- **Responsive Layout:** Perfectly tailored for desktop, tablet, and mobile viewing using standard 1200px container bounds.
- **Custom Animations:** Smooth reveal animations (`fadeInUp`) on scroll, hover transformations, and a custom CSS animated scroll wheel indicator.
- **PDF Resume Download:** Dedicated API route enforcing direct PDF downloads.

## 📂 Project Structure
```text
portfolio/
├── src/
│   ├── app/
│   │   ├── api/resume/route.ts  # API route for secure resume download
│   │   ├── globals.css          # Core CSS variables, animations, and glassmorphism utilities
│   │   ├── layout.tsx           # Main application layout and font definitions
│   │   └── page.tsx             # Main entry point assembling all sections
│   ├── components/
│   │   ├── hero.tsx             # 3D Spline interactive hero section
│   │   ├── about.tsx            # Personal narrative and key metrics
│   │   ├── skills.tsx           # Tech stack categorization
│   │   ├── experience.tsx       # Professional internships and roles
│   │   ├── projects.tsx         # Major projects with tech stacks and metrics
│   │   ├── education.tsx        # Examination scores and academic timeline
│   │   ├── certifications.tsx   # Coursera, Kaggle, and IIT Madras certs
│   │   ├── achievements.tsx     # Hackathons, national awards, and competitions
│   │   ├── contact.tsx          # Web3Forms integrated contact section
│   │   └── ... (navbar, footer, particles, etc.)
├── public/
│   └── resume.pdf               # Downloadable resume file
└── tailwind.config.ts           # Tailwind configuration
```

## 💻 Running Locally

First, clone the repository and install dependencies:

```bash
git clone https://github.com/RishiiGamer2201/portfolio.git
cd portfolio
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

## 🎨 Design System
The portfolio uses a custom design system built on top of Tailwind CSS, focusing on a dark, cyberpunk-inspired aesthetic:
- **Primary Background:** `hsl(0 0% 4%)` (Deep Black)
- **Secondary Background:** `hsl(0 0% 7%)` (Dark Gray)
- **Accent Cyan:** `#00f5d4` (Primary Highlight)
- **Accent Purple:** `#7b2ff7` (Secondary Highlight)
- **Typography:** `Inter` (Sans) and `Space Grotesk` (Heading)

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
