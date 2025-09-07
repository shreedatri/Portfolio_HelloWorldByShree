import React from "react";

const educationData = [
  { title: "10th", year: "2018", school: "St. Claret" ,marks:"97.8%"},
  { title: "12th", year: "2020", school: "Bholanada National Vidyalaya",marks:"91.6%" },
  { title: "B.Tech", year: "2022-Present", school: "RCC Institute of Technology",marks:"8.87" },
];

function EducationRoadmap() {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Education Roadmap</h2>
      <div className="flex flex-col md:flex-row items-center md:justify-between relative">
        {/* Line connecting milestones */}
        <div className="absolute md:top-1/2 md:left-0 md:right-0 top-0 left-5 w-1 md:h-1 md:w-full bg-gray-300 z-0 mx-10"></div>

        {educationData.map((edu, idx) => {
          const isCurrent = idx === educationData.length - 1; // last is current
          return (
            <div
              key={idx}
              className={`flex flex-col items-center z-10 mb-8 md:mb-0 md:flex-1`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  isCurrent ? "bg-cyan-500 scale-125 shadow-lg" : "bg-gray-500"
                }`}
              >
                {edu.title[0]}
              </div>
              <p className="mt-2 text-center text-sm">{edu.title}</p>
              <p className="text-gray-500 text-xs">{edu.year}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EducationRoadmap;
