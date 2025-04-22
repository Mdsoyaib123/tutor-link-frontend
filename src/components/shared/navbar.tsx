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
    { label: "FAQ", href: "/faq" },
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (href: string) =>
    `text-lg font-bold transition ${
      pathname === href
        ? "text-blue-600 underline underline-offset-4"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 z-50 w-full shadow-sm shadow-blue-600 transition-all duration-300 ${
        scrolled ? "bg-blue-100 shadow-md text-black" : "bg-gray-100 text-black"
      }`}
    >
      <div className="mx-auto px-4 md:px-8 py-6 flex justify-between items-center ">
        <div className = "flex">
        <button className="md:hidden text-sm px-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
          <Link href="/" className="text-2xl md:text-3xl font-bold">
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
            <Button>Login</Button>
          </Link>
        </div>
      </div>

      

      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t shadow-md">
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
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
