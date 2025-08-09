"use client";

import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "AI-Powered Task Allocation",
    description: "AI optimizes task-robot matching for efficiency and cost-effectiveness.",
    icon: "/images/Features/task.svg",
  },
  {
    title: "Decentralized Smart Contracts",
    description: "Tamper-proof payments secured with blockchain technology.",
    icon: "/images/Features/smart-contract.svg",
  },
  {
    title: "Robot Reputation System",
    description: "On-chain ratings based on task success and user feedback.",
    icon: "/images/Features/reputation.svg",
  },
  {
    title: "Multi-Industry Support",
    description: "From drones to industrial arms, Vectra scales across industries.",
    icon: "/images/Features/industry.svg",
  },
  {
    title: "Privacy & Security",
    description: "Blockchain ensures data integrity and privacy via zero-knowledge proofs.",
    icon: "/images/Features/privacy.svg",
  },
  {
    title: "DAO Governance",
    description: "Community-driven upgrades and decisions for the platform’s future.",
    icon: "/images/Features/dao.svg",
  },
];

// ✅ Odd items background
const oddBg = "/images/frame1.svg";
// ✅ Even items background
const evenBg = "/images/frame3.svg";

export default function Features() {
  return (
    <section id="Features" className=" text-white py-20 px-6 md:px-32">
      <div className="md:max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Features That Power Vectra</h2>
        <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
          Advanced features combining decentralization, AI, and robotics for seamless task automation and global trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => {
          const bgImage = index % 2 === 0 ? oddBg : evenBg;

          return (
            <div
              key={feature.title}
              className="relative border border-[#1E2537] rounded-lg overflow-hidden w-auto md:h-[200px] h-[150px]"
            >
              {/* ✅ Odd/Even background image */}
              <Image
                src={bgImage}
                alt=""
                fill
                className="object-cover"
              />

              {/* ✅ Optional noise effect only if you want it */}
              {/* index % 2 === 0 && (
                <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,white_1%,transparent_0)] [background-size:2px_2px] opacity-10 mix-blend-overlay [filter:contrast(250%)_brightness(700%)]" />
              ) */}

              {/* ✅ Icon & text on top */}
              <div className="absolute inset-0 flex flex-col justify-center px-6  bg-gradient-to-t from-black/70 to-transparent">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="te font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-300 text-xs">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
