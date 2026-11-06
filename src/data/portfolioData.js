/**
 * Centralized Editable Portfolio Data
 * Shivakumara M.S. - Portfolio
 * 
 * Edit this file to update personal details, skills, projects,
 * education, experiences, achievements, and social links.
 */

export const portfolioData = {
  personalInfo: {
    name: "Shivakumara M.S.",
    shortName: "Shivakumar",
    monogram: "SM",
    title: "Computer Science Engineering Student | Aspiring Software Developer",
    college: "Sahyadri College of Engineering & Management, Adyar, Mangalore, Karnataka",
    collegeShort: "Sahyadri College of Engineering & Management",
    academicYear: "Second Year, Computer Science and Engineering",
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    duration: "2023 - 2027",
    location: "Mangalore, Karnataka, India",
    email: "shivushantageri9@gmail.com",
    availabilityBadge: "Open for Internships & Projects",
    headline: "Building ideas into meaningful digital experiences.",
    heroGreeting: "Hello, I'm Shivakumara M.S.",
    heroSubRole: "Computer Science Engineering Student",
    heroSupportingText:
      "I explore software development, artificial intelligence, and modern technologies to build practical solutions and continuously grow as an engineer.",
    aboutShort:
      "I am a Computer Science Engineering student passionate about building practical technology solutions and continuously improving my problem-solving and development skills. I enjoy exploring software development, artificial intelligence, and modern web technologies. I believe in learning by building, experimenting with new ideas, and turning concepts into meaningful projects.",
    aboutExtended: [
      "As a second-year engineering student at Sahyadri College of Engineering & Management, I focus on building solid foundations across core computer science domains — from data structures and algorithms to full-stack web applications and AI agent prototyping.",
      "My development philosophy revolves around practical execution: understanding how software behaves under real conditions, structuring clean maintainable codebases, and translating complex challenges into intuitive, user-friendly solutions.",
      "I am actively seeking software engineering internships, collaborative hackathons, and innovative open-source initiatives where I can contribute actively and learn alongside experienced teams."
    ],
    resumeFileName: "Shivakumara_MS_Resume.pdf",
    // Set to true if a static PDF file has been placed in /public/resume.pdf
    hasCustomResumeFile: false,
  },

  socialLinks: {
    github: "https://github.com/shivu9-Algo",
    linkedin: "https://www.linkedin.com/in/shivu-kumar-749211280",
    email: "mailto:shivushantageri9@gmail.com",
    rawEmail: "shivushantageri9@gmail.com",
  },

  careerInterests: [
    { title: "Software Engineering", icon: "Code2", description: "Architecting modular, maintainable, and scalable systems." },
    { title: "Artificial Intelligence", icon: "Cpu", description: "Exploring LLMs, agentic workflows, and safe autonomous policies." },
    { title: "Web Development", icon: "Globe", description: "Crafting fast, responsive, and aesthetically refined user interfaces." },
    { title: "Data Structures & Algorithms", icon: "Binary", description: "Strengthening computational logic and algorithmic complexity analysis." },
    { title: "Problem Solving", icon: "Brain", description: "Deconstructing real-world bottlenecks into clean programmatic steps." },
    { title: "Practical Technology Solutions", icon: "Layers", description: "Delivering functional tools that provide tangible user utility." },
  ],

  technicalSkills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        description: "Core languages used for problem solving, academic foundations, and scripting",
        skills: [
          { name: "C", badge: "Low-Level & Memory", description: "Procedural programming, pointers, system foundations", icon: "Terminal" },
          { name: "C++", badge: "OOP & Performance", description: "STL, object-oriented concepts, algorithmic logic", icon: "Cpu" },
          { name: "Java", badge: "Object-Oriented", description: "Class hierarchies, standard libraries, modular design", icon: "Coffee" },
          { name: "Python", badge: "Scripting & AI", description: "Rapid prototyping, scripting, automation, AI tooling", icon: "FileCode" },
        ],
      },
      {
        id: "web",
        name: "Web Development",
        description: "Modern frontend and full-stack web technologies",
        skills: [
          { name: "HTML5", badge: "Semantic Markup", description: "Accessible markup and clean document structure", icon: "Code" },
          { name: "CSS3", badge: "Modern Styling", description: "Responsive layouts, Flexbox, Grid, CSS animations", icon: "Palette" },
          { name: "JavaScript", badge: "Core & ES6+", description: "Asynchronous programming, DOM manipulation, closures", icon: "Sparkles" },
          { name: "React.js", badge: "Frontend Library", description: "Reusable components, state management, hooks", icon: "Atom" },
          { name: "Next.js", badge: "Full-Stack Framework", description: "App router, SSR, hybrid rendering, optimized routing", icon: "Layers" },
          { name: "Tailwind CSS", badge: "Utility-First CSS", description: "Design systems, rapid responsive styling, dark modes", icon: "Wind" },
        ],
      },
      {
        id: "tools",
        name: "Tools & Platforms",
        description: "Development environments, version control, and cloud platforms",
        skills: [
          { name: "Visual Studio Code", badge: "Primary IDE", description: "Code editing, extensions, integrated terminal debugging", icon: "TerminalSquare" },
          { name: "Git", badge: "Version Control", description: "Branching, committing, staging, conflict resolution", icon: "GitBranch" },
          { name: "GitHub", badge: "Collaboration & CI", description: "Repository hosting, PR workflows, issue tracking", icon: "Github" },
          { name: "Vercel", badge: "Deployment Platform", description: "Instant preview deployments, serverless functions, edge hosting", icon: "Cloud" },
        ],
      },
    ],
  },

  projects: [
    {
      id: "lightfield-crm",
      title: "Lightfield Mini CRM",
      subtitle: "Customer Relationship Management Platform",
      tagline: "A modern, lightweight CRM designed for freelancers and student clubs.",
      badge: "Featured Project",
      status: "Completed / Active",
      featured: true,
      description:
        "A modern, lightweight Customer Relationship Management application designed for freelancers and student clubs. The application helps users organize customer information, manage relationships, track deals, and maintain follow-ups in one centralized platform.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: [
        "Interactive analytics and status dashboard",
        "Comprehensive contact management & filtering",
        "Visual sales pipeline & deal tracking",
        "Customizable settings & organization profile",
        "Modern responsive dark-mode interface with zero lag",
      ],
      githubUrl: "https://github.com/shivu9-Algo/Lightfield-CRM",
      demoUrl: null, // Editable: add live demo URL when available
      highlights: [
        "Lightweight architecture ensuring sub-second load times",
        "Tailored specifically for student organizations & independent freelancers",
        "Intuitive pipeline stages reducing friction in lead tracking",
      ],
      category: "Full-Stack Web App",
    },
    {
      id: "ai-agent-safety",
      title: "AI Agent Safety and Control",
      subtitle: "Autonomous Agent Permission & Governance Prototype",
      tagline: "Prototype framework for intercepting, evaluating, and monitoring autonomous agent operations.",
      badge: "In Development",
      status: "In Development Prototype",
      featured: true,
      description:
        "A prototype designed to improve the control and monitoring of autonomous AI agents by checking their proposed actions against predefined permissions and policies.",
      technologies: ["Python", "LLM Integration", "Rule-Based Engine", "API Interception", "Human-in-the-Loop"],
      features: [
        "Permission-based action validation before execution",
        "API interception layer for incoming agent calls",
        "Rule-based access control (RBAC) engine",
        "Human approval gating for selected high-risk actions",
        "Action monitoring and telemetry stream",
        "Audit logs showing allowed, blocked, and approval-required actions",
      ],
      disclaimer:
        "Research & Exploration Prototype: This project is an experimental prototype designed to explore agent guardrails, policy enforcement, and audit mechanics. It is not presented as a commercial or complete enterprise safety solution.",
      githubUrl: "https://github.com/shivu9-Algo/HackNova",
      demoUrl: null, // Editable
      highlights: [
        "Configurable policy manifests for granular tool permissions",
        "Fail-safe human escalation for sensitive system operations",
        "Immutable structured audit trail for governance review",
      ],
      category: "AI & Systems Security",
    },
  ],

  education: {
    institution: "Sahyadri College of Engineering & Management",
    location: "Adyar, Mangalore, Karnataka, India",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    currentStatus: "Currently Pursuing Second Year (4th Semester)",
    duration: "2023 - 2027",
    highlights: [
      "Rigorous coursework in Data Structures, Object-Oriented Programming, and Discrete Mathematics",
      "Actively engaged in technical forums, coding challenges, and collaborative departmental activities",
      "Focusing on core engineering fundamentals and software design patterns",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Digital Design & Computer Organization",
      "Discrete Mathematical Structures",
      "Database Management Systems (Foundations)",
      "Operating Systems & Systems Programming",
    ],
  },

  experienceAndActivities: {
    note: "Focused on hands-on practical learning, college technical activities, and hackathons.",
    items: [
      {
        title: "HackNova Hackathon Participation",
        category: "Hackathon",
        badge: "Hackathon Project",
        organization: "College / Inter-College Technical Event",
        period: "Recent",
        description:
          "Collaborated on conceptualizing and developing an AI safety prototype (HackNova) designed to intercept and monitor autonomous agent actions with policy enforcement and human-in-the-loop approval gates.",
        tags: ["Teamwork", "AI Safety", "Rapid Prototyping", "Python", "Presentation"],
        status: "Completed",
      },
      {
        title: "Technical Workshops & Hands-on Labs",
        category: "Technical Workshop",
        badge: "Skill Development",
        organization: "Sahyadri College of Engineering & Management",
        period: "Ongoing",
        description:
          "Participated in hands-on technical sessions covering software design, modern web technologies, algorithm problem-solving, and version control best practices.",
        tags: ["Web Technologies", "Git/GitHub", "Problem Solving", "C/C++", "Java"],
        status: "Active",
      },
      {
        title: "College Technical Forums & Peer Collaborations",
        category: "Community & Peer Learning",
        badge: "Collaboration",
        organization: "Department of Computer Science & Engineering",
        period: "2023 - Present",
        description:
          "Engaging with student peers to build projects, exchange technical insights, review code architectures, and solve computational challenges.",
        tags: ["Peer Code Reviews", "Knowledge Sharing", "Group Projects"],
        status: "Active",
      },
      // Editable placeholder slot for user to customize later
      {
        title: "[Add Upcoming Technical Activity / Workshop]",
        category: "Upcoming Milestone",
        badge: "Editable Slot",
        organization: "Future Hackathon / Industry Workshop",
        period: "Coming Soon",
        description:
          "Placeholder slot reserved for upcoming hackathons, open source contributions, or specialized technical training workshops.",
        tags: ["Future Event", "Skill Expansion"],
        status: "Placeholder",
        isPlaceholder: true,
      },
    ],
  },

  achievements: {
    note: "A curated record of academic progress, technical milestones, and continuous learning.",
    items: [
      {
        title: "Hackathon Project Development",
        category: "Hackathon",
        description: "Successfully built and showcased the AI Agent Safety & Control prototype within hackathon constraints.",
        status: "Verified",
        icon: "Trophy",
      },
      {
        title: "Full-Stack CRM Architecture Execution",
        category: "Project Milestone",
        description: "Independently designed and built Lightfield Mini CRM using Next.js and Tailwind CSS with responsive UI.",
        status: "Deployed/Repository Public",
        icon: "Code2",
      },
      {
        title: "Academic Progress in Computer Science",
        category: "Academic",
        description: "Consistent academic dedication across foundational CS subjects, algorithmic logic, and programming paradigms.",
        status: "In Progress (2nd Year)",
        icon: "GraduationCap",
      },
      {
        title: "[Add New Achievement or Certification]",
        category: "Customizable Entry",
        description: "Reserved space to document your next certification, competition rank, or academic honor.",
        status: "Editable",
        icon: "PlusCircle",
        isPlaceholder: true,
      },
    ],
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ],
};
