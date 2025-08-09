"use client";

export default function HeroSectionMob() {
	return (
		<section className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 py-24">
			{/* Video Background */}
			<div className="absolute inset-0 z-0 hidden md:block">
				<video
					src="/vectra intro.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover object-center opacity-70"
				/>
			</div>

			<div className="md:hidden inset-0 z-0">
				<video
					src="/vectra intro mob.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover object-center opacity-70"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center space-y-6">
				<h1 className="text-[#F1F5FF] text-3xl sm:text-4xl font-semibold leading-snug">
					Empowering a <br />
					<span className="text-[#10F3AF]">Decentralized</span> Robotic <br />
					Future with <span className="text-[#10F3AF]">AI</span>
				</h1>
				<p className="text-[#ADB5C5] max-w-md text-base font-[DMSans]">
					Vectra combines blockchain, AI, and robotics to create a marketplace
					where anyone can hire or offer robotic services seamlessly and
					securely.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
					<a
						href="#"
						className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium font-[DMSans] hover:bg-gray-200 transition w-full text-center"
					>
						Join Waitlist
					</a>
					<a
						href="#"
						className="bg-[#111827] border border-gray-600 text-white px-6 py-3 rounded-md text-sm font-medium font-[DMSans] hover:bg-gray-800 transition w-full text-center"
					>
						Launch App
					</a>
				</div>
			</div>
		</section>
	);
}
