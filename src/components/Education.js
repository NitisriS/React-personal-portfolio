import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const educationDetails = [
    {
      id: 1,
      level: "SSLC",
      percentage: "90.4%",
      institution: "P.K.P Swamy Matric.Hr.Sec school",
      year: "2018-2019",
    },
    {
      id: 2,
      level: "HSC",
      percentage: "90.2%",
      institution: "P.K.P Swamy Matric.Hr.Sec school",
      year: "2020-2021",
    },
    {
      id: 3,
      level: "B.Tech AI&DS",
      percentage: "80.6%",
      institution: "Builders Engineering College",
      year: "2021-2025",
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col py-10 px-5 justify-center bg-primary text-black"
    >
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl border-b-4 border-black mb-10">
            Education
          </h1>
        </div>
        <motion.div
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 px-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
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
          {educationDetails.map((edu) => (
            <motion.div
              key={edu.id}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-semibold mb-2">{edu.level}</h2>
              <p className="text-xl font-bold mb-2">
                <span className="text-4xl text-yellow-500">
                  {edu.percentage}
                </span>
              </p>
              <p className="text-md mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.year}</p>
              <motion.div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
