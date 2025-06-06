import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        <Link href="/" legacyBehavior>
  <a className="text-2xl font-bold text-blue-800 cursor-pointer">City Maid Services</a>
</Link>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-800 my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About Us</Link></li>
          <li><Link href="#services">Maid Placement</Link></li>
          <li><Link href="#pricing">Pricing & Service Charges</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li>
            <a
              href="https://wa.me/9779841317273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:underline"
            >
              <FaWhatsapp className="inline text-xl" />
              +9779841317273
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50 animate-fade-in">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <a
                href="https://wa.me/9779841317273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                <FaWhatsapp className="inline text-xl" />
                +9779841317273
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
