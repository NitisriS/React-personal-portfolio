import React, { useState } from 'react';
import "./About.css";
import { motion } from 'framer-motion';
import Education from './Education'; 
import Skills from './Skills'; 
import Certifications from './Certifications'; 

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleButtonClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <section id='about' className='relative flex flex-col items-center px-5 py-5 min-h-screen overflow-hidden'>
     
      <div className="area absolute top-0 left-0 w-full h-full -z-10">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      
      <div className='max-w-4xl z-10'>
        <div className='text-center mb-12'>
          <h1 className='font-medium text-5xl border-b-4 border-black inline-block text-black mb-5'>
            About Me
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed'>
            I am an enthusiastic Full Stack Developer with a passion for innovation and problem-solving. I have completed a one-month summer internship in web development, where I successfully delivered projects, including a hotel booking website and a personal portfolio website.
          </p>
          <p className='text-gray-600 text-lg leading-relaxed mt-4'>
            With experience in React JS and JavaScript projects, I am actively honing my skills in React JS and continually seeking new challenges and knowledge. My background includes developing a "Rotten Grocery Prediction" model, showcasing my expertise in deep learning. I also hold a certification in mobile application development using Flutter. Additionally, I have crafted Figma designs and possess a foundational understanding of UI/UX design. I approach learning with a steady and methodical mindset, always eager to expand my skillset. Open to new opportunities and collaborations.
          </p>
        </div>

        
        <div className="flex justify-center space-x-4 mb-10">
          <motion.button
            onClick={() => handleButtonClick('education')}
            className={`py-3 px-6 rounded-full transition-colors duration-300 ${
              activeSection === 'education' ? 'bg-[#ffffff]  text-black' : 'bg-[#ffffff] text-black hover:bg-[#cccccc]'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>

          <motion.button
            onClick={() => handleButtonClick('skills')}
            className={`py-3 px-6 rounded-full transition-colors duration-300 ${
              activeSection === 'skills' ? 'bg-[#ffffff]  text-black' : 'bg-[#ffffff] text-black hover:bg-[#cccccc]'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>

          <motion.button
            onClick={() => handleButtonClick('certifications')}
            className={`py-3 px-6 rounded-full transition-colors duration-300 ${
              activeSection === 'certifications' ? 'bg-[#ffffff]  text-black' : 'bg-[#ffffff] text-black hover:bg-[#cccccc]'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            Certifications
          </motion.button>
        </div>

        
        <motion.div
          className='w-full overflow-hidden'
          initial="hidden"
          animate={activeSection ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {activeSection === 'education' && <Education />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'certifications' && <Certifications />}
        </motion.div>
      </div>
    </section>
  );
}


