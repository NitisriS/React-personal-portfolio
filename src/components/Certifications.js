import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Completed a one-month internship at Gateway Software Solutions, learnt  HTML, CSS, and JavaScript. Worked on projects that enhanced my skills in creating web applications.',
  },
  {
    id: 2,
    title: 'Text Classification with NLP',
    description:
      'Attended a one-day workshop at Karpagam College of Engineering, where I learned about NLP and machine learning. Completed a project on email classification as spam or not spam.',
  },
  {
    id: 3,
    title: 'Flutter Application Development',
    description:
      'Completed a 20-day course in Flutter at NS School Academy. Developed an "E-Library Management" app as a group project and gained valuable insights into mobile app development.',
  },
  {
    id: 4,
    title: 'The Joy of Computing - Python',
    description:
      'Completed an NPTEL course on Python, earning an elite certification with a score of 71%. Learned Python basics and solved weekly tasks to enhance problem-solving skills.',
  },
  {
    id: 5,
    title: 'Immersive Techniques of ARVR',
    description:
      'Completed a course on ARVR, where I learned to use 3ds Max, Substance Painter, and Unreal Engine tools for creating immersive experiences.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="flex flex-col py-10 px-5 justify-center bg-primary text-black">
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-medium text-4xl border-b-4 border-black mb-10 text-black">
            Certifications
          </h1>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between border-l-4 border-black relative overflow-hidden group h-72"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <h2 className="text-xl font-semibold mb-3">{cert.title}</h2>
                <p className="text-base text-gray-700 mb-4">{cert.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
