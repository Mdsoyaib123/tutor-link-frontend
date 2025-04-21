'use client';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaRegPaperPlane, FaRocketchat } from 'react-icons/fa';  // Import icons

const WorkingSection = () => {
    const steps = [
        {
          title: '1. Setting Schedule',
          description: 'Students and tutors align on available times, ensuring convenient learning sessions.',
          icon: <FaCalendarCheck size={40} color="#3B82F6" />,
        },
        {
          title: '2. Apply as Tutor',
          description: 'Teachers fill out a professional profile and apply to share their knowledge on our platform.',
          icon: <FaRegPaperPlane size={40} color="#3B82F6" />,
        },
        {
          title: '3. Start Journey',
          description: 'Begin personalized learning experiences — from booking to tutoring and beyond.',
          icon: <FaRocketchat size={40} color="#3B82F6" />,
        },
      ];
    
      return (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center text-blue-700 mb-12"
            >
              Our Working Procedure
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white w-8 h-8 flex justify-center items-center rounded-full mr-4">
                      <span>{index + 1}</span>
                    </div>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    
};

export default WorkingSection;