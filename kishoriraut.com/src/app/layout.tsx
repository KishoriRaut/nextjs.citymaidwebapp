import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kishori Raut | Web App Developer",
  description: "Modern web app and website developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kishori Raut | Web App Developer</title>
        <meta name="description" content="Modern web app and website developer portfolio. Fast, beautiful, and scalable solutions for startups and businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kishoriraut.com/" />
        <meta property="og:title" content="Kishori Raut | Web App Developer" />
        <meta property="og:description" content="Modern web app and website developer portfolio. Fast, beautiful, and scalable solutions for startups and businesses." />
        <meta property="og:image" content="/vercel.svg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kishoriraut.com/" />
        <meta name="twitter:title" content="Kishori Raut | Web App Developer" />
        <meta name="twitter:description" content="Modern web app and website developer portfolio. Fast, beautiful, and scalable solutions for startups and businesses." />
        <meta name="twitter:image" content="/vercel.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} text-lg`}>
        {/* Navbar */}
        <div className="navbar bg-base-100 text-base-content shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo/Avatar */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg group-hover:from-secondary group-hover:to-primary transition-colors duration-300 tracking-tight">Kishori Raut</span>
            </Link>
            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><a href="https://github.com/kishoriraut" target="_blank" rel="noopener">GitHub</a></li>
                  <li><a href="mailto:kishoriraut.web@gmail.com">Email</a></li>
                </ul>
              </div>
            </div>
            {/* Menu: hidden on mobile, flex on md+ */}
            <div className="hidden md:flex gap-2 items-center">
              <Link href="/" className="btn btn-ghost btn-sm">Home</Link>
              <Link href="/about" className="btn btn-ghost btn-sm">About</Link>
              <Link href="/services" className="btn btn-ghost btn-sm">Services</Link>
              <Link href="/blog" className="btn btn-ghost btn-sm">Blog</Link>
              <Link href="/portfolio" className="btn btn-ghost btn-sm">Portfolio</Link>
              <Link href="/contact" className="btn btn-ghost btn-sm">Contact</Link>
              {/* Social Icons */}
              <a href="https://github.com/kishoriraut" target="_blank" rel="noopener" className="btn btn-ghost btn-circle btn-sm" aria-label="GitHub"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"></path></svg></a>
              <a href="mailto:kishoriraut.web@gmail.com" className="btn btn-ghost btn-circle btn-sm" aria-label="Email"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg></a>
            </div>
          </div>
        </div>
        <main className="min-h-[80vh]">{children}</main>
        {/* Footer */}
        <footer className="footer p-0 bg-base-200 text-base-content mt-8 border-t-4 border-primary/30">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full px-4 py-8 gap-6 md:gap-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">Kishori Raut</span>
              <span className="text-base-content/70 mb-2">Building modern web apps & digital experiences</span>
              <span className="text-sm text-base-content/50">© {new Date().getFullYear()} Kishori Raut. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/kishoriraut" target="_blank" rel="noopener" className="btn btn-sm btn-square btn-ghost" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"></path></svg>
              </a>
              <a href="mailto:kishoriraut.web@gmail.com" className="btn btn-sm btn-square btn-ghost" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
