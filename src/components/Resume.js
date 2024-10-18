import { motion } from "framer-motion";
import ResumeImg from "../assets/resumer.png";
import ResumePDF from "../assets/NITISRI.S - Resume.pdf"; 

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row px-5 py-20 bg-primary items-center justify-center"
    >
      {/* Resume Image Section */}
      <motion.div
        className="py-5 md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-[300px] md:w-[400px] lg:w-[500px]" src={ResumeImg} alt="Resume" />
      </motion.div>

      {/* Resume Description Section */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-4xl border-b-4 border-black mb-5 w-[180px] text-black">
          Resume
        </h1>
        <p className="text-gray-600 pb-5 max-w-md">
         Click below to view or download My Resume.
        </p>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            View
          </a>
          <a
            href={ResumePDF}
            download
            className="inline-block px-6 py-3 bg-white text-black border border-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out"
          >
            Download
          </a>
        </div>
      </motion.div>
    </section>
  );
}
