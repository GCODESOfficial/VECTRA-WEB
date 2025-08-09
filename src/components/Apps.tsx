/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

const applications = [
  {
    title: "Warehouse Sorting",
    description:
      "Autonomous robotic arms sort inventory with AI-verified completion for efficiency.",
  },
  {
    title: "Urban Drone Deliveries",
    description:
      "Fast, secure deliveries using AI-optimized drone navigation.",
  },
  {
    title: "Agricultural Monitoring",
    description:
      "Drones and bots monitor crops for health, yield, and treatment.",
  },
  {
    title: "Home Assistance Robotics",
    description:
      "Personal care and assistance robots for the elderly and disabled.",
  },
];

const Apps: FC = () => {
  return (
    <section className="text-white py-20 px-4 md:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Real World Applications
        </h2>
        <p className="md:text-lg text-gray-400 mb-20 max-w-sm mx-auto">
          Vectra empowers industries to automate tasks securely and efficiently.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-3">
          {/* Left Side Video Box */}
          <div className="md:w-[550px] w-full md:h-[455px]  rounded-xl flex items-center justify-center overflow-hidden">
            <video
              src="/Video 4.mp4" // replace with your actual video path
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Applications List */}
          <div className="md:space-y-6 space-y-3 w-full md:w-[500px] h-[455px]">
            {applications.map((app, i) => (
              <div
                key={i}
                className="bg-[#101624] border border-[#1E2537] rounded-lg px-5 py-4 text-left hover:border-[#10F3AF] transition-all"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <img
                    src="/images/check.svg"
                    alt="Check icon"
                    className="w-8 h-8 object-contain"
                  />
                  {app.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
