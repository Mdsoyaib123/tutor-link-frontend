"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tutors", href: "/tutors" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQ", href: "/faq" }
    
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (href: string) =>
    `text-lg font-bold transition transform hover:-translate-y-0.5 hover:scale-105 duration-200 ${
      pathname === href
        ? "text-blue-600 underline underline-offset-4"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 overflow-x-hidden shadow-sm shadow-blue-600 ${
        scrolled ? "bg-blue-100 shadow-md text-black" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center overflow-x-hidden">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden text-sm px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link
            href="/"
            className="text-2xl text-blue-600 md:text-4xl font-bold whitespace-nowrap"
          >
            TutorLink 🎓
          </Link>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/login">
            <Button className="transition-transform hover:scale-105 duration-300">
              Login
            </Button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t shadow-md w-full overflow-hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button className="transition-transform hover:scale-105 duration-300">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
      
    </nav>
  );
};

export default NavBar;
