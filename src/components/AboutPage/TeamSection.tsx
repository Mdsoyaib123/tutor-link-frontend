'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Aria Johnson',
    role: 'Lead Developer',
    image: '/team1.jpg',
  },
  {
    name: 'Liam Chen',
    role: 'Education Specialist',
    image: '/team2.jpg',
  },
  {
    name: 'Sophia Rivera',
    role: 'Product Designer',
    image: '/team3.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-center" id="team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Meet the Team</h2>
        <p className="text-gray-700 text-lg mb-12">
          TutorLink is built by a team of educators, developers, and lifelong learners who are passionate about transforming the way people connect for education. Our team combines technical excellence with a deep understanding of the challenges students and tutors face in the modern learning environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition-all">
              <div className="w-28 h-28 mx-auto relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
