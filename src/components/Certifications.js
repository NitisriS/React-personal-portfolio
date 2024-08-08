import React from 'react';
import Certificate1 from '../assets/certificate1.png';
import Certificate2 from '../assets/certificate2.png';
import Certificate3 from '../assets/certificate3.png';
import Certificate4 from '../assets/certificate4.png';
import Certificate5 from '../assets/certificate5.png';

export default function Certifications() {
  // Sample certification data
  const certifications = [
    {
      id: 1,
      title: 'Frontend Development',
      description:
      "Completed a one-month internship at Gateway Software Solutions, learning HTML, CSS, and JavaScript. Worked on projects that enhanced my skills in creating responsive and user-friendly web applications, solidifying my frontend development expertise.",
      image: Certificate1,
      link: 'https://www.your-link.com/javascript-essentials', 
    },
    {
      id: 2,
      title: 'Text classification with NLP',
      description:
        'Attended a one-day workshop at Karpagam College of Engineering, where I learned about NLP and machine learning. Completed a project on email classification as spam or not spam.',
      image: Certificate2,
      link: 'https://www.your-link.com/react-developer', 
    },
    {
      id: 3,
      title: 'Flutter Application development',
      description:
        'Completed a 20-day course in Flutter at NS School Academy. Developed an "E-Library Management" app as a group project and gained valuable insights into mobile app development.',
      image: Certificate3,
      link: 'https://www.your-link.com/fullstack-web-dev', 
    },
    {
      id: 4,
      title: 'The Joy of Computing - Python',
      description:
        'Completed an NPTEL course on Python, earning an elite certification with a score of 71%. Learned Python basics and solved weekly tasks to enhance problem-solving skills.',
      image: Certificate4,
      link: 'https://www.your-link.com/ui-ux-design', 
    },
    {
      id: 5,
      title: 'Immersive Techniques of ARVR',
      description:
        'Completed a course on ARVR, where I learned to use 3ds Max, Substance Painter, and Unreal Engine tools for creating immersive experiences.',
      image: Certificate5,
      link: 'https://www.your-link.com/machine-learning-basics', // Replace with your actual link
    },
  ];

  return (
    <section id="certifications" className="flex flex-col py-20 px-5 justify-center bg-primary text-black">
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-medium text-4xl border-b-4 border-black mb-10 text-black">
            Certifications
          </h1>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-10">
          {certifications.map((cert) => (
            <div key={cert.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-white mb-3">{cert.title}</h2>
                <p className="text-sm text-white px-5 mb-4">{cert.description}</p>
                <a
                  href={cert.link}
                  className="inline-block bg-white text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  View Certification
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
