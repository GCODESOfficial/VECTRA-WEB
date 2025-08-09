"use client";

export default function HeroSection() {
	return (
		<section className="relative text-white overflow-hidden">
			{/* Video background on the right */}
			<div className="absolute inset-0 md:flex justify-end z-0 -right-28 hidden">
				<video
					src="/vectra intro.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover object-center"
				/>
			</div>

{/* Mobile Video Background */}
<div className="md:hidden relative z-0">
  <video
    src="/CODES.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover object-center"
  />

  {/* Gradient overlay above the video at the bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-transparent to-[#0A0F1C]" />
</div>



			{/* Hero Content */}
			<div className="relative px-6 md:px-32 z-30 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:py-32 -mt-16 pb-10 md:mt-0 text-center md:text-left">
				{/* Left Content */}
				<div className="flex-1">
					<h1 className="text-[#F1F5FF] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
						Empowering a <br />
                        <span className="text-[#10F3AF]">Decentralized</span>{" "}
						Robotic
						<br />
						Future with <span className="text-[#10F3AF]">AI</span>
					</h1>
					<p className="text-[#ADB5C5] mb-8 max-w-xl font-[DMSans]">
						Vectra combines blockchain, AI, and robotics to create a marketplace
						where anyone can hire or offer robotic services seamlessly and
						securely.
					</p>
					<div className="flex gap-4 font-[DMSans] justify-center md:justify-start">
						<a
							href="/Waitlist"
							className="bg-white font-[DMSans] text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition"
						>
							Join Waitlist
						</a>
						<a
							href="#"
							className="bg-[#111827] border border-gray-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
						>
							Launch App
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
