/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

const worksData = [
  {
    title: "Post Tasks",
    description: "Post your robotic task with details such as type, location, and deadline.",
    image: "/images/posttask.svg",
  },
  {
    title: "AI Matching",
    description: "Vectra’s AI analyses your task and matches it with the best robot provider available.",
    image: "/images/AI.svg",
  },
 
  {
    title: "Smart Contracts",
    description: "Payments are secured via smart contracts and released automatically upon completion.",
    image: "/images/Contracts.svg",
  },

  {
    title: "Task Completion",
    description: "Robots complete the task, verified by IoT sensors and AI for transparency.",
    image: "/images/Taskrobot.svg",
  },
];

export default function Works() {
  return (
    <section className="py-20 px-6 md:px-32 text-white text-center hidden md:block relative">
      <img
          src="/images/Ellipse.svg" // Replace with your actual glow image
          alt="Background Glow"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
        />
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">How Vectra Works</h2>
      <p className="text-[#C1C6D3] font-[DMSans] max-w-xl mx-auto mb-16 text-lg">
        Vectra’s ecosystem merges AI, robotics, and blockchain to automate tasks globally with transparency and trust.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="w-full md:w-1/3">
          <div className="relative rounded-xl h-[525px] border border-[#1E2537] overflow-hidden group">
            <Image
              src={worksData[0].image}
              alt={worksData[0].title}
              width={600}
              height={400}
              className="w-full h-4/5 object-cover"
            />
            <div className="text-left absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101624]/80 to-transparent p-4">
              <h3 className="font-semibold mb-1">{worksData[0].title}</h3>
              <p className="text-xs text-[#C1C6D3]">{worksData[0].description}</p>
            </div>
          </div>
        </div>

        {/* Middle stack: Card 2 and Card 3 */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[worksData[1], worksData[2]].map((item, idx) => (
            <div key={idx} className="relative rounded-xl h-[250px] border border-[#1E2537] overflow-hidden group">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="w-full h-3/5 object-cover"
              />
              <div className="absolute bottom-0 flex flex-col justify-end p-4 py-6 text-left left-0 right-0 bg-[#101624]">
                <h3 className="text font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-[#C1C6D3]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card 4 */}
        <div className="w-full lg:w-1/3">
          <div className="relative rounded-xl h-[525px] border border-[#1E2537] overflow-hidden group">
            <Image
              src={worksData[3].image}
              alt={worksData[3].title}
              width={600}
              height={400}
              className="w-full h-4/5 object-cover"
            />
            <div className="text-left absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101624]/80 to-transparent p-6">
              <h3 className="font-semibold mb-1">{worksData[3].title}</h3>
              <p className="text-xs text-[#C1C6D3]">{worksData[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
