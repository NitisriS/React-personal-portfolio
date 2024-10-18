import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", level: 5 },
    { id: 2, name: "CSS", level: 4 },
    { id: 3, name: "JavaScript", level: 3 },
    { id: 4, name: "React", level: 3 },
    { id: 5, name: "Python", level: 3 },
    { id: 6, name: "AI & ML", level: 4 },
    { id: 7, name: "UI/UX Designing", level: 5 },
    { id: 8, name: "C", level: 3 },
    
  ];

  return (
    <section
      id="skills"
      className="flex flex-col py-10 px-5 justify-center bg-primary text-black"
    >
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-medium text-4xl border-b-4 border-black mb-10 text-black">
            Skills
          </h1>
        </div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10"
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
                staggerChildren: 0.2, 
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", 
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                
                {[...Array(5)].map((_, index) => (
                  <motion.span
                    key={index}
                    className="text-yellow-500"
                    whileHover={{
                      scale: index < skill.level ? 1.3 : 1, 
                    }}
                    whileTap={{
                      scale: 1.2,
                    }}
                  >
                    {index < skill.level ? <FaStar /> : <FaRegStar />}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
