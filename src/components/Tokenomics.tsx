/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const distribution = [
	{
	  label: "Rewards",
	  percent: 30,
	  width: 120,
	  color: "bg-[#2DFCD8]",
	},
	{
	  label: "Team & Development",
	  percent: 25,
	  width: 100,
	  color: "bg-[#3AC478]",
	},
	{
	  label: "Staking & Liquidity",
	  percent: 20,
	  width: 80,
	  color: "bg-[#417744]",
	},
	{
	  label: "Marketing & Partnerships",
	  percent: 15,
	  width: 60,
	  color: "bg-[#59F17B]",
	},
	{
	  label: "DAO Treasury",
	  percent: 10,
	  width: 40,
	  color: "bg-[#1A8A74]",
	},
  ];

const Tokenomics: FC = () => {
	return (
		<section
			id="Tokenomics"
			className=" text-white  text-center md:py-20 pb-20 px-4 md:px-10"
		>
			<h2 className="text-3xl md:text-4xl font-semibold mb-4">
				$VECTRA Tokenomics
			</h2>
			<p className=" md:text-lg text-gray-400 mb-16 max-w-md mx-auto">
				$VECTRA fuels the ecosystem, enabling payments, governance, and rewards.
			</p>

			<div className="md:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-center md:gap-10 gap-14">
				{/* Left Side */}
				<div className="md:flex flex-col gap-6 text-sm text-gray-300 w-full md:w-[350px] hidden">
					<div className="bg-[#111827] text-left border border-[#1e293b] rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
						<h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
							<img
								src="/images/tools.svg" // change this to your actual image path
								alt="Robot Illustration"
								className="w-7 h-7 object-contain"
							/>
							Token Utility
						</h3>
						<ul className="list-disc list-inside space-y-1 text-left">
							<li>Payments for tasks</li>
							<li>
								Staking for listing robots or posting <br />
								<p className="pl-5">tasks</p>{" "}
							</li>
							<li>Governance voting power</li>
						</ul>
					</div>
					<div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
						<h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-lg">
							<img
								src="/images/benefits.svg" // change this to your actual image path
								alt="Robot Illustration"
								className="w-7 h-7 object-contain"
							/>
							Token Benefits
						</h3>
						<ul className="list-disc list-inside space-y-1 text-left">
							<li>Priority task matching</li>
							<li>Reduced transaction fees</li>
							<li>
								Governance rights to vote on key <br />{" "}
								<p className="pl-5">platform decisions</p>{" "}
							</li>
						</ul>
					</div>
				</div>



				{/* Center Donut Chart */}
				<div className="md:w-[380px] w-9/12 md:h-[380px] h-[300px] relative">
					<Image
						src="/images/tokenomics.svg"
						alt="VECTRA Tokenomics Chart"
						layout="fill"
						objectFit="contain"
						priority
					/>
				</div>


				<div className="space-y-4 text-sm font-medium">
      {distribution.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4">
          {/* Static width bar */}
          <div className="h-3 rounded-full overflow-hidden">
            <div
              className={`${item.color} h-full rounded-full`}
              style={{ width: `${item.width}px` }}
            />
          </div>

          {/* Text */}
		  <div>
          <span className="text-white">{item.percent}%</span>
          <span className="text-gray-300 pl-2">{item.label}</span>
		  </div>
        </div>
      ))}
    </div>


				

				{/* Left Side */}
				<div className="flex flex-col gap-6 text-sm text-gray-300 w-full md:w-[350px] md:hidden">
					<div className="bg-[#111827] text-left border border-[#1e293b] rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
						<h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
							<img
								src="/images/tools.svg" // change this to your actual image path
								alt="Robot Illustration"
								className="w-7 h-7 object-contain"
							/>
							Token Utility
						</h3>
						<ul className="list-disc list-inside space-y-1 text-left">
							<li>Payments for tasks</li>
							<li>
								Staking for listing robots or posting <br />
								<p className="pl-5">tasks</p>{" "}
							</li>
							<li>Governance voting power</li>
						</ul>
					</div>
					<div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
						<h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-lg">
							<img
								src="/images/benefits.svg" // change this to your actual image path
								alt="Robot Illustration"
								className="w-7 h-7 object-contain"
							/>
							Token Benefits
						</h3>
						<ul className="list-disc list-inside space-y-1 text-left">
							<li>Priority task matching</li>
							<li>Reduced transaction fees</li>
							<li>
								Governance rights to vote on key <br />{" "}
								<p className="pl-5">platform decisions</p>{" "}
							</li>
						</ul>
					</div>
				</div>
			</div>


			

			<motion.button
				whileHover={{ scale: 1.05 }}
				className="mt-14 px-6 py-3 bg-white text-black text-sm rounded-md font-medium hover:opacity-90 transition"
			>
				View Full Tokenomics Paper
			</motion.button>
		</section>
	);
};

export default Tokenomics;
