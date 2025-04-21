'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { motion } from 'framer-motion'
import {
    FaChalkboardTeacher,
    FaUsers,
    FaSmile,
    FaHeadset,
    FaRegCalendarCheck,
  } from 'react-icons/fa'

  const achievements = [
    {
      stat: '5,000+',
      label: 'Successful Sessions',
      icon: <FaRegCalendarCheck size={32} className="text-blue-500" />,
    },
    {
      stat: '1,200+',
      label: 'Verified Tutors',
      icon: <FaChalkboardTeacher size={32} className="text-green-500" />,
    },
    {
      stat: '10,000+',
      label: 'Registered Students',
      icon: <FaUsers size={32} className="text-purple-500" />,
    },
    {
      stat: '99%',
      label: 'Positive Feedback',
      icon: <FaSmile size={32} className="text-yellow-500" />,
    },
    {
      stat: '24/7',
      label: 'Support Available',
      icon: <FaHeadset size={32} className="text-pink-500" />,
    },
  ]
  

const Slider=()=> {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
          perView: 3,
          spacing: 24,
        },
        breakpoints: {
          '(max-width: 768px)': {
            slides: { perView: 1, spacing: 12 },
          },
          '(min-width: 768px)': {
            slides: { perView: 2, spacing: 16 },
          },
          '(min-width: 1024px)': {
            slides: { perView: 3, spacing: 24 },
          },
        },
        created(s) {
          const interval = setInterval(() => {
            s.next()
          }, 3500)
          return () => clearInterval(interval)
        },
      })
    
      return (
        <section className="py-8 bg-blue-100 border border-blue-600 shadow-md">
                    <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6"
            >
                <h2 className="text-3xl font-bold text-blue-700">Our Achievements 🏆</h2>
                <p className="text-gray-600 mt-2">Celebrating milestones with our amazing community</p>
            </motion.div>
    
          <div ref={sliderRef} className="keen-slider py-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl py-6 text-center shadow-blue-600 shadow-md hover:shadow-lg "
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="bg-white p-3 rounded-full shadow-md">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-600">{item.stat}</h3>
                  <p className="text-gray-700">{item.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      )
}

export default Slider;
