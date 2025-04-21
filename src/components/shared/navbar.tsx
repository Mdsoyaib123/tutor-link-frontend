'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
      { label: 'Home', href: '/' },
      { label: 'Browse Tutors', href: '/tutors' },
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ];
  
    return (
      <nav
      className="
        'fixed z-10 w-full transition-all text-white',
       'bg-blue-100 shadow-sm shadow-blue-200 text-black',
      "
    >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-blue-600">
            TutorLink 🎓
          </Link>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-bold text-lg transition"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2">
             
              <Link href={"/login"} className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-sm">
                Login
              </Link>
            </div>
          </div>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            
              <Link href="/login" className="text-sm bg-blue-600 text-white rounded px-3 py-1 text-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    )
};

export default NavBar;