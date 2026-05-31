import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer & UI/UX Designer",
  description: "A premium portfolio website showcasing frontend development and UI/UX design skills. Built with Next.js 15, Tailwind CSS, Framer Motion, and GSAP.",
  keywords: ["frontend developer", "UI/UX designer", "web developer", "portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Portfolio | Frontend Developer & UI/UX Designer",
    description: "A premium portfolio website showcasing frontend development and UI/UX design skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
