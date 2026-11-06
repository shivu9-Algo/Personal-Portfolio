# Shivakumara M.S. — Personal Portfolio

> A modern, premium-quality personal developer portfolio website built with **Next.js 14**, **React 18**, and **Tailwind CSS**. Designed for software engineering internship applications, placement recruitment, hackathons, and professional developer networking.

---

## 👨‍💻 Developer Overview

- **Name:** Shivakumara M.S.
- **Title:** Computer Science Engineering Student | Aspiring Software Developer
- **Institution:** Sahyadri College of Engineering & Management, Adyar, Mangalore, Karnataka
- **Current Standing:** Second Year, Computer Science and Engineering (2023 - 2027)
- **Location:** Mangalore, Karnataka, India
- **Email:** [shivushantageri9@gmail.com](mailto:shivushantageri9@gmail.com)
- **GitHub:** [github.com/shivu9-Algo](https://github.com/shivu9-Algo)
- **LinkedIn:** [linkedin.com/in/shivu-kumar-749211280](https://www.linkedin.com/in/shivu-kumar-749211280)

---

## 🚀 Key Features & Highlights

1. **Dark Aesthetic & Visual Sophistication:**
   - Inspired by modern developer-first interfaces (**Linear**, **Vercel**, **Raycast**).
   - Near-black charcoal background (`#07080c`) with refined borders, subtle glowing highlights, and zero unnecessary visual clutter.
   - Clean responsive typography and balanced negative space.

2. **Interactive Developer Hero:**
   - Real-time availability indicator badge.
   - Interactive IDE/terminal simulator featuring `profile.json` and `skills.sh` with 1-click clone command copy.
   - Quick access to project showcases and resume viewer.

3. **Curated Showcase of Real Projects:**
   - **Lightfield Mini CRM:** Customer Relationship Management platform designed for freelancers and student clubs built with Next.js, React, and Tailwind CSS.
     - [GitHub Repository](https://github.com/shivu9-Algo/Lightfield-CRM)
   - **AI Agent Safety and Control:** Prototype framework investigating policy-based permissions, API interception, and human-in-the-loop audit trails for autonomous AI agents.
     - [GitHub Repository](https://github.com/shivu9-Algo/HackNova)

4. **Technical Competency Matrix:**
   - Grouped into Programming Languages (C, C++, Java, Python), Web Development (HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS), and Tools & Platforms (VS Code, Git, GitHub, Vercel).
   - Filterable category views without fabricated proficiency percentages.

5. **Academic Foundation & Coursework:**
   - Dedicated education showcase for Sahyadri College of Engineering & Management.
   - Covers core CS fundamentals: Data Structures, OOP, Discrete Math, Database Foundations, and Systems.

6. **Activities, Hackathons & Experience:**
   - Genuine college technical forum collaborations, hackathons (HackNova), and hands-on workshops.
   - Includes customizable placeholder slots for upcoming milestones.

7. **Validated Contact Workflow:**
   - Working contact form with real-time field validation.
   - Serverless API route (`/api/contact`) paired with a transparent 1-click email client dispatch (`mailto:`) ensuring 100% reliable communication without silent delivery failures.
   - 1-click clipboard copy with feedback toast for email.

8. **Digital Resume Modal:**
   - Interactive modal previewing academic credentials, projects, and skills.
   - Print-ready CSS (`@media print`) enabling 1-click **Save as PDF** or physical printing directly from the browser.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Core Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Animation & Motion:** Tailwind CSS Keyframes, CSS Backdrop Filter & Radial Glows

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg          # Custom monogram favicon
│   └── robots.txt           # SEO indexing directives
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/     # Serverless contact API endpoint
│   │   │       └── route.js
│   │   ├── globals.css      # Design tokens, custom scrollbars, glows
│   │   ├── layout.jsx       # Metadata, viewport, and root layout
│   │   └── page.jsx         # Main one-page portfolio view
│   ├── components/
│   │   ├── About.jsx        # Philosophy, story, and career interests
│   │   ├── Achievements.jsx # Milestone showcase & integrity notice
│   │   ├── BackgroundEffect.jsx # Ambient radial glow & cursor spotlight
│   │   ├── Contact.jsx      # Validated contact form & direct channels
│   │   ├── Education.jsx    # College details, degree, and coursework
│   │   ├── Experience.jsx   # Hackathons, workshops, and activities
│   │   ├── Footer.jsx       # Monogram, quick links, and system credits
│   │   ├── Hero.jsx         # Hero section & interactive terminal card
│   │   ├── Icons.jsx        # Crisp SVG icons for GitHub, LinkedIn
│   │   ├── Navbar.jsx       # Sticky glass header with scroll spy
│   │   ├── Projects.jsx     # Featured project showcase & drawers
│   │   ├── ResumeModal.jsx  # Printable digital resume preview
│   │   └── Skills.jsx       # Filterable technical skill cards
│   └── data/
│       └── portfolioData.js # Centralized editable configuration file
├── jsconfig.json            # Path alias mapping (@/* -> ./src/*)
├── next.config.js           # Next.js configuration
├── package.json             # Scripts and dependencies
├── postcss.config.js        # PostCSS configuration
└── tailwind.config.js       # Tailwind theme colors and animations
```

---

## ✏️ How to Edit Portfolio Content

All personal information, projects, links, skills, coursework, and contact details are stored in a single, centralized file:

👉 **`src/data/portfolioData.js`**

To update your data:
1. Open `src/data/portfolioData.js`.
2. Edit the fields (e.g. `personalInfo`, `projects`, `skills`, `education`, `experienceAndActivities`, `achievements`).
3. Save the file. Next.js hot-reloads the changes instantly!

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.x or v20+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/shivu9-Algo/Personal-Portfolio.git

# Enter the project directory
cd "Personal Portfolio"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Building for Production
```bash
# Generate optimized production build
npm run build

# Start production server
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio website"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"New Project"**, import this repository, and click **"Deploy"**.
4. Vercel will automatically detect Next.js and deploy within seconds.

---

## 📄 License

This project is licensed under the MIT License. Designed and developed by **Shivakumara M.S.**
