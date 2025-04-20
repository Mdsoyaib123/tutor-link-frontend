'use client';

import Image from 'next/image';

const TutorCard = () => {
  return (
    <div className="relative group bg-white shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-xl w-full max-w-sm">
      {/* Tutor Image using next/image */}
      <div className="w-full h-48 relative">
        <Image
          src="https://i.pravatar.cc/300?img=32"
          alt="Tutor"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 300px"
        />
      </div>

      {/* Tutor Info */}
      <div className="p-4 text-black">
        <h3 className="text-xl font-bold">John Doe</h3>
        <p className="text-sm text-gray-600 mt-1">
          Passionate educator with 5+ years of experience in STEM subjects.
        </p>

        <div className="mt-3">
          <p className="text-sm font-medium text-gray-800">Subjects:</p>
          <div className="flex flex-wrap gap-1 text-sm text-blue-600 mt-1">
            <span className="bg-blue-100 px-2 py-0.5 rounded">Math</span>
            <span className="bg-blue-100 px-2 py-0.5 rounded">Physics</span>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-sm font-medium text-gray-800">Grades:</p>
          <div className="flex flex-wrap gap-1 text-sm text-green-600 mt-1">
            <span className="bg-green-100 px-2 py-0.5 rounded">Grade 8</span>
            <span className="bg-green-100 px-2 py-0.5 rounded">Grade 9</span>
          </div>
        </div>
      </div>

      {/* Hover View Button */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
