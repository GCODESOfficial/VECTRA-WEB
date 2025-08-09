/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

const DOAs: FC = () => {
	return (
		<section id="DOA" className=" text-white py-20 px-6 md:px-10">
			<div className="md:max-w-7xl w-full mx-auto md:flex grid gap-20">
				{/* Title & Description */}
				<div className="mb-10 ">
					<h2 className="md:text-5xl text-4xl font-semibold text-center md:text-left">Community Governed DAO</h2>
					<p className="text-gray-400 md:text-lg mt-2 max-w-md text-center md:text-left">
						Vectra is governed by its community through a DAO, ensuring
						inclusivity and transparency.
					</p>
				</div>

				{/* Cards */}
				<div className="md:flex grid gap-4 ">
					{/* DAO Structure */}
					<div className="bg-[#111827] border border-[#1e293b] rounded-xl h-32 md:w-96 w-full p-5 text-sm">
						<h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-lg">
                        <img
              src="/images/tools.svg" // change this to your actual image path
              alt="Robot Illustration"
              className="w-7 h-7 object-contain"
            />
                            DAO Structure</h3>
						<ul className="list-disc list-inside text-gray-300 space-y-1">
							<li>Token holders propose and vote on upgrades, fees, and platform policies</li>
						</ul>
					</div>


                    <div className="space-y-4 md:w-96 w-full">
					{/* Voting Process */}
					<div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 text-sm">
						<h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-lg">
                        <img
              src="/images/benefits.svg" // change this to your actual image path
              alt="Robot Illustration"
              className="w-7 h-7 object-contain"
            />
                            Voting Process</h3>
						<ul className="list-disc list-inside text-gray-300 space-y-1">
							<li>Submit proposal</li>
							<li>Community discussion</li>
							<li>Snapshot voting with $VECTRA tokens</li>
						</ul>
					</div>

					{/* Benefits */}
					<div className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 text-sm col-span-1 sm:col-span-2 md:col-span-1">
						<h3 className="text-white font-semibold mb-2 flex items-center gap-2 text-lg">
                        <img
              src="/images/benefits.svg" // change this to your actual image path
              alt="Robot Illustration"
              className="w-7 h-7 object-contain"
            />
                             Benefits</h3>
						<ul className="list-disc list-inside text-gray-300 space-y-1">
							<li>Transparent decisions</li>
							<li>Community ownership</li>
							<li>Rapid development aligned with user needs</li>
						</ul>
					</div>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default DOAs;
