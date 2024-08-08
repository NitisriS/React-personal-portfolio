// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa"; // Import FontAwesome icons for stars

// export default function Skills() {
//   // Sample skills data
//   const skills = [
//     { id: 1, name: "UI/UX Designing", level: 4 },
//     { id: 2, name: "React Development", level: 5 },
//     { id: 3, name: "JavaScript", level: 5 },
//     { id: 4, name: "Node.js", level: 4 },
//     { id: 5, name: "HTML & CSS", level: 5 },
//     { id: 6, name: "Python", level: 3 },
//     { id: 7, name: "Machine Learning", level: 3 },
//   ];

//   return (
//     <section
//       id="skills"
//       className="flex flex-col py-20 px-5 justify-center bg-primary text-black"
//     >
//       <div className="w-full">
//         <div className="flex justify-center">
//           <h1 className="font-medium text-4xl border-b-4 border-black mb-10 text-black">
//             Skills
//           </h1>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10">
//           {skills.map((skill) => (
//             <div
//               key={skill.id}
//               className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
//             >
//               <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
//               <div className="flex items-center">
//                 {/* Render star icons based on skill level */}
//                 {[...Array(5)].map((_, index) => (
//                   <span key={index} className="text-yellow-500">
//                     {index < skill.level ? <FaStar /> : <FaRegStar />}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import FontAwesome icons for stars
import { motion } from "framer-motion"; // Import Framer Motion

export default function Skills() {
  // Sample skills data
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
      className="flex flex-col py-20 px-5 justify-center bg-primary text-black"
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
                staggerChildren: 0.2, // Stagger the children animations
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
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
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
                {/* Render star icons based on skill level */}
                {[...Array(5)].map((_, index) => (
                  <motion.span
                    key={index}
                    className="text-yellow-500"
                    whileHover={{
                      scale: index < skill.level ? 1.3 : 1, // Scale filled stars on hover
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



// import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa"; // Import FontAwesome icons for stars
// import { motion } from "framer-motion"; // Import Framer Motion

// export default function Skills() {
//   // Sample skills data
//   const skills = [
//     { id: 1, name: "UI/UX Designing", level: 4 },
//     { id: 2, name: "React Development", level: 5 },
//     { id: 3, name: "JavaScript", level: 5 },
//     { id: 4, name: "Node.js", level: 4 },
//     { id: 5, name: "HTML & CSS", level: 5 },
//     { id: 6, name: "Python", level: 3 },
//     { id: 7, name: "Machine Learning", level: 3 },
//   ];

//   return (
//     <section
//       id="skills"
//       className="flex flex-col py-20 px-5 justify-center bg-gradient-to-r from-blue-400 to-green-400 text-white"
//     >
//       <div className="w-full">
//         <div className="flex justify-center">
//           <h1 className="font-bold text-4xl border-b-4 border-white mb-10">
//             Skills
//           </h1>
//         </div>
//         <motion.div
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {
//               opacity: 0,
//               y: 50,
//             },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: {
//                 delay: 0.3,
//                 staggerChildren: 0.3, // Stagger the children animations
//               },
//             },
//           }}
//         >
//           {skills.map((skill) => (
//             <motion.div
//               key={skill.id}
//               className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center relative overflow-hidden transform hover:rotate-3 hover:scale-105 transition-transform duration-500"
//               whileHover={{
//                 rotate: 3,
//                 scale: 1.05,
//                 boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Increase shadow on hover
//               }}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
//               <motion.div
//                 className="flex items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 {/* Render star icons based on skill level */}
//                 {[...Array(5)].map((_, index) => (
//                   <motion.span
//                     key={index}
//                     className="text-yellow-500"
//                     whileHover={{
//                       scale: index < skill.level ? 1.2 : 1, // Scale filled stars on hover
//                       color: index < skill.level ? "#ffeb3b" : "#ffd54f", // Change color on hover
//                     }}
//                     whileTap={{
//                       scale: 1.1,
//                     }}
//                   >
//                     {index < skill.level ? <FaStar /> : <FaRegStar />}
//                   </motion.span>
//                 ))}
//               </motion.div>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
