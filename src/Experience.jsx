import React from 'react';
import { motion } from 'framer-motion';

function Exp() {
  const exp = [
    {
      role: "Software Programmer Intern",
      company: "Infomatica Technology Pvt. Ltd.",
      duration: "Feb 2025 - May 2025",
      achievements: [
        "Contributed to software programming projects applying core concepts in real-world development.",
        "Collaborated with team members to develop applications and enhance functionality.",
        "Demonstrated debugging,and adaptability in diverse tasks."
      ],
    }
  ];

  return (

    <div id="exp" className='w-full h-contain bg-transparent items-center justify-center p-5 mt-8'>
      <h2 className="text-4xl text-center font-bold text-white mb-5">Professional Experience</h2>
      <div className="md:flex md:flex-row sm:flex sm:flex-col gap-6 max-w-4xl mx-auto p-6 mt-8  ">
        <div className='flex justify-center items-center sm:mb-4'>
          <motion.img

            src="experience.gif"
            alt="design"
            className="lg:w-full lg:h-full md:w-1/2 md:h-3/4 sm:w-full sm:p-1 object-cover mb-4 rounded-lg sm:justify-center"
            initial={{ y: 80, opacity: 0 }}       // slightly below and invisible
            whileInView={{ y: 0, opacity: 1 }}    // move to position and fade in
            transition={{ type: "tween", duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        <div className="relative border-l-2 border-cyan-500">
          {exp.map((job, idx) => (
            <div key={idx} className="mb-8 ml-6">
              <span className="absolute -left-3 top-0 w-6 h-6 bg-cyan-500 rounded-full border-2 border-neutral-550 animate-ping"></span>
              <strong className="text-xl font-bold text-white">{job.role} @ {job.company}</strong>
              <p className="text-gray-300">{job.duration}</p>
              <ul className="text-gray-100 list-disc text-justify ml-5 mt-2">
                {job.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
export default Exp;