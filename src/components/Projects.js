import React from 'react';
import Work1 from '../assets/work-1.png';
import Work2 from '../assets/work-2.png';
import Work3 from '../assets/work-3.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Home Automation controller',
      description:
        'An IoT-based project developed using the Arduino platform, designed to seamlessly regulate room temperature and optimize comfort at home. This is especially beneficial for individuals with disabilities.',
      image: Work1,
      link: 'https://github.com/your-repo/temperature-controller', // Replace with your actual link
    },
    {
      id: 2,
      title: 'Rotten Grocery Prediction',
      description:
        'Employs image processing and YOLO object detection to efficiently identify and classify fruits and vegetables. YOLO swiftly detects items within images, while a deep learning model evaluates their condition, categorizing them as "Rotten" or "Fresh."',
      image: Work2,
      link: 'https://github.com/your-repo/rotten-grocery-prediction', // Replace with your actual link
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description:
        'Showcases my professional and academic journey. Designed using HTML, CSS, and JavaScript, this website serves as a dynamic and interactive platform for presenting my personal and professional information.',
      image: Work3,
      link: 'https://github.com/your-repo/personal-portfolio', // Replace with your actual link
    },
  ];

  return (
    <section id="projects" className="flex flex-col py-10 px-5 justify-center bg-primary text-black">
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-medium text-4xl border-b-4 border-black mb-10 text-black">
            Projects
          </h1>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-10">
          {projects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-white mb-3">{project.title}</h2>
                <p className="text-sm text-white px-5 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-white text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
