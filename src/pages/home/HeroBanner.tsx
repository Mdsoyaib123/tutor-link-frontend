'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Find & Connect with the Best Tutors
          </h1>
          <p className="text-gray-600 text-lg">
            TutorLink helps students succeed by matching them with top-rated, verified tutors across all subjects.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search by subject, grade, or tutor..."
              className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Sign Up as Student
            </Link>
            <Link
              href="/register?tutor=true"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition"
            >
              Register as Tutor
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/banner-illustration.svg" // Replace with your asset
            alt="Online tutoring illustration"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
