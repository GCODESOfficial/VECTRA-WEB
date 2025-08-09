/* eslint-disable @next/next/no-img-element */
// components/RobotTaskFlow.tsx

export default function RobotTaskFlow() {
    const cards = [
      {
        title: "Post Tasks",
        description:
          "Post your robotic task with details such as type, location, and deadline.",
        icon: "/images/posttask.svg", // Replace with actual path
      },
      {
        title: "Smart Contracts",
        description:
          "Payments are secured via smart contracts and released automatically upon completion.",
        icon: "/images/AI.svg",
      },
      {
        title: "AI Matching",
        description:
          "Vectra’s AI analyses your task and matches it with the best robot provider available.",
        icon: "/images/Contracts.svg",
      },
      {
        title: "Task Completion",
        description:
          "Robots complete the task, verified by IoT sensors and AI for transparency.",
        icon: "/images/Taskrobot.svg",
      },
    ];
  
    return (
      <div className="relative w-full max-w-xl mx-auto p-4 md:hidden">
        {/* Background glow behind all cards */}
        <img
          src="/images/Ellipse.svg" // Replace with your actual glow image
          alt="Background Glow"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
        />

<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">How Vectra Works</h2>
      <p className="text-[#C1C6D3] font-[DMSans] max-w-xl mx-auto mb-16 text-center text-sm">
        Vectra’s ecosystem merges AI, robotics, and blockchain to automate tasks globally with transparency and trust.
      </p>
  
      <div className="relative z-10 columns-2 gap-4 space-y-4">
  {cards.map((card, idx) => (
    <div
      key={idx}
      className="break-inside-avoid bg-[#0B1120] border border-[#1F2937] rounded-xl text-white shadow-md overflow-hidden mb-4"
    >
      <img
        src={card.icon}
        alt={card.title}
        className="w-full h-auto"
      />
      <div className="p-2 space-y-1">
        <h3 className="text-sm font-semibold">{card.title}</h3>
        <p className="text-[10px] text-gray-300">{card.description}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    );
  }
  