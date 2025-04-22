"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-white shadow-lg min-h-screen p-4 hidden lg:block">
      <div className="text-3xl font-extrabold mb-10 text-blue-600">
        TutorLink 🎓
      </div>
      <nav className="space-y-4 text-blue-800 font-medium">
        <a href="#" className="block hover:text-blue-500">
          📊 Dashboard
        </a>
        <Link
          href={"/studentdashboard/profile"}
          className="block hover:text-blue-500"
        >
          👤 Profile
        </Link>
        <a href="#" className="block hover:text-blue-500">
          📚 Manage Tutors
        </a>
        <a href="#" className="block hover:text-blue-500">
          📅 My Bookings
        </a>
      </nav>
      <div className="mt-12 text-sm text-gray-500">
        <span className="text-gray-800 font-medium">tuder</span>
        <br />
        <a href="mailto:y@gmail.com" className="text-blue-500">
          y@gmail.com
        </a>
      </div>
    </aside>
  );
}
