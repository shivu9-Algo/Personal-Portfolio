import "./globals.css";

export const metadata = {
  title: "Shivakumara M.S. | Computer Science Engineering Student & Aspiring Software Developer",
  description:
    "Personal portfolio of Shivakumara M.S., 2nd Year Computer Science & Engineering student at Sahyadri College of Engineering & Management, Mangalore. Passionate about software engineering, AI, and modern web development.",
  keywords: [
    "Shivakumara M.S.",
    "Shivakumar",
    "Computer Science Student",
    "Sahyadri College of Engineering & Management",
    "Software Developer",
    "Next.js",
    "React",
    "Lightfield CRM",
    "AI Agent Safety",
    "Mangalore Developer",
    "Portfolio",
  ],
  authors: [{ name: "Shivakumara M.S." }],
  creator: "Shivakumara M.S.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/shivu9-Algo",
    title: "Shivakumara M.S. | Portfolio",
    description:
      "Computer Science Engineering Student passionate about building practical software, exploring AI, and modern web development.",
    siteName: "Shivakumara M.S. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivakumara M.S. | Portfolio",
    description:
      "Computer Science Engineering Student passionate about building practical software, exploring AI, and modern web development.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07080c] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
