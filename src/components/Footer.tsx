/* eslint-disable @next/next/no-img-element */
// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" font-[DMSans] text-[#E5E7EB] py-12 px-6 md:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-t border-[#1F2937] pt-8">
          
          {/* Left Section */}
          <div className="flex-1">
              {/* Logo */}
      <Link href="/">
        <div>
          <img
            src="/images/logo.svg"
            alt="GS Labs"
            className="md:w-24 h-auto w-[80px] mb-4 md:mb-6"
          />
        </div>
      </Link>
            <p className="max-w-sm text-sm mb-4">
              Vectra pioneers decentralized AI-powered robotic marketplaces for a transparent, automated future.
            </p>
            <p className="text-xs text-gray-400">
  © {new Date().getFullYear()} Vectra. All Rights Reserved.
</p>

          </div>
  
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-20  md:flex md:gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><a href="/Waitlist" className="hover:underline">Waitlist</a></li>
                <li><a href="#DOA" className="hover:underline">DAO Governance</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Social Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">X</a></li>
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">Telegram</a></li>
                <li><a href="#" className="hover:underline">Linkedin</a></li>
              </ul>
            </div>
  
            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </footer>
    )
  }
  