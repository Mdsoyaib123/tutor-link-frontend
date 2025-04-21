'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {Button} from "@/components/ui/button"


const TutorSection=()=> {
    
const tutors = [
    {
      name: 'Emily Johnson',
      subject: 'Mathematics',
      image: '/tutors/emily.jpg',
      bio: 'Passionate math tutor with 5+ years of experience helping students excel.',
    },
    {
      name: 'Daniel Kim',
      subject: 'Physics',
      image: '/tutors/daniel.jpg',
      bio: 'Physics enthusiast making complex concepts simple and fun.',
    },
    {
      name: 'Sophia Lee',
      subject: 'English Literature',
      image: '/tutors/sophia.jpg',
      bio: 'Experienced English tutor helping students master writing & analysis.',
    },
  ]
  return (
    <section className="py-20 my-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-700"
        >
          Meet Our Top Tutors 👩‍🏫👨‍🏫
        </motion.h2>
        <p className="text-gray-600 mt-2">Expert educators ready to guide your journey</p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutors.map((tutor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md group relative"
          >
            <div className="relative w-full h-60">
              <Image
                src={tutor.image}
                alt={tutor.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-xl font-semibold text-blue-700">{tutor.name}</h3>
              <p className="text-sm text-blue-500">{tutor.subject}</p>
              <p className="text-sm text-gray-600">{tutor.bio}</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
              <Link href="/tutors/details" className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md shadow-lg hover:bg-blue-700">
                View Profile
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className = "text-center my-5">
      <Link href={"/tutors"}>
      <Button>See All </Button>
      </Link>
        </div>
    </section>
  )
}

export default TutorSection
