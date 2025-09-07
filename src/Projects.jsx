import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Projects() {


  const [open, setOpen] = useState(false);


  const projects = [
    {
      id: 1,
      name: "𝐁𝐥𝐢𝐧𝐤 𝐂𝐨𝐦𝐩𝐫𝐞𝐬𝐬",
      description: "It is a web-based tool for efficient image processing, featuring image-to-PDF conversion and image compression. It offers a responsive, user-friendly interface with smooth navigation.",
      image: "/Screenshot (141).png",
      repo: "https://github.com/shreedatri/Blink-Compress",
      link: "https://blink-compress.vercel.app/"
    },
    {
      id: 2,
      name: "𝐅𝐢𝐧𝐝 𝐌𝐲 𝐁𝐨𝐨𝐤 𝐍𝐨𝐰",
      description: "It is a book discovery website that lets users search for books, preview them via GoogleBooks, and access direct buy links from Amazon and Flipkart thereby also letting the user compare prices.",
      image: "/Screenshot (142).png",
      repo: "https://github.com/shreedatri/Find_My_Book_Now",
      link: "https://gentle-selkie-39fa59.netlify.app/"
    }
  ];

  // Card animation when scrolled into view (different directions)
  const cardVariants = (i) => ({
    hidden: { opacity: 0, x: i % 2 === 0 ? -200 : 200, y: 50, rotate: -5, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  });

  return (
    <section
      id="projects"
      className="w-full min-h-screen p-16 bg-transparent flex flex-col items-center"
    >
      <motion.h1
        className="text-white text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={cardVariants(i)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 min-w-[250px] max-w-[400px] bg-neutral-950 rounded-xl p-3 
              shadow-lg border-b border-2 border-cyan-200 shadow-[0_0_10px_cyan]
              flex flex-col justify-between"
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* <h3 className="text-white text-center text-2xl font-bold mb-2 border border-3 border-cyan-400 rounded-lg p-3">{project.name}</h3>
            <p className="text-gray-300 text-justify mb-4 flex-grow p-3">{project.description}</p> */}


            <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg">
              <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between px-5 py-4 text-center text-lg font-semibold text-neutral-800 dark:text-white bg-white dark:bg-neutral-800 border border-3 border-cyan-400 rounded-lg hover:border-purple-400 transition-colors duration-300"
              >
                {project.name}
                <span
                  className={`animate-bounce text-cyan-500 hover:text-purple-500 transform transition-transform duration-200 ${open ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${open ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <div className="px-5 py-4 text-rose-100 text-justify dark:text-rose-100">
                  <h3>{project.description}</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-2xl">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="relative group [&>svg]:h-7 [&>svg]:w-7 text-white hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                </svg>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded bg-black text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                  View project in GitHub
                </span>
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white hover:text-purple-400 transition-colors duration-300"
              >
                <div className='bg-white rounded-full object-contain'><img src="/external-link-svgrepo-com.svg" alt="Live Link" className="h-7 w-7 text-white hover:scale-110 transition-transform" /></div>
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block rounded bg-black text-white text-xs px-2 py-1 shadow-lg">
                  Visit Website
                </span>
              </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
