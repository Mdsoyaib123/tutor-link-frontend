"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can use Heroicons or other icon sets too

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:h-screen`}
      >
        <div className="p-4">
          <div className="text-3xl font-extrabold mb-10 text-indigo-600">
            TutorLink
          </div>
          <nav className="space-y-4 text-indigo-800 font-medium">
            <Link
              href="/studentdashboard/profile"
              className="block hover:text-indigo-500"
            >
              👤 Profile
            </Link>
            <Link
              href="/studentdashboard/myrequest"
              className="block hover:text-indigo-500"
            >
              📚 Manage Tutors
            </Link>
            <Link
              href="/studentdashboard/mybookings"
              className="block hover:text-indigo-500"
            >
              📅 My Bookings
            </Link>
          </nav>
          <div className="mt-12 text-sm text-gray-500">
            <span className="text-gray-800 font-medium">tuder</span>
            <br />
            <a href="mailto:y@gmail.com" className="text-indigo-500">
              y@gmail.com
            </a>
          </div>
        </div>
      </aside>

      {/* Dark overlay when open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
