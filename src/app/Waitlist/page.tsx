
"use client";

import React, { useState } from "react";
import Image from "next/image";

const Waitlist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-28 relative overflow-hidden">
      {/* Main Waitlist Form */}
      <div className={`bg-[#101624] text-white rounded-2xl shadow-lg max-w-xl w-full px-8 py-10 border border-gray-800 z-10 ${showModal ? 'blur-sm pointer-events-none select-none' : ''}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Join The Vectra Waitlist
        </h2>
        <p className="text-sm text-center text-gray-400 mb-8">
          Be among the first to experience Vectra’s decentralized AI-powered robotic marketplace.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address (optional)"
            className="w-full px-4 py-3 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Wallet Address (Ethereum/Solana compatible)"
            required
            className="w-full px-4 py-3 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none"
          />
          <input
            type="text"
            placeholder="X (Twitter) Handle"
            required
            className="w-full px-4 py-3 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none"
          />
          <div className="flex justify-center w-full">
          <button
            type="submit"
            className="w-48 py-3 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Join Waitlist
          </button>
          </div>
        </form>
        <p className="text-xs md:px-20 px-4 text-center text-gray-400 mt-6">
          Follow Vectra on X and share your handle for priority access and exclusive early adopter rewards.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed px-5 md:px-0 inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-[#0B0F1A] text-white md:max-w-sm w-full p-8 rounded-2xl shadow-xl border border-gray-700 text-center">
            <div className="flex justify-center mb-4">
            <Image
                src="/images/check.svg" // ← save the badge icon here
                alt="check"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">You’re on the list!</h3>
            <p className="text-sm text-gray-300 mb-6">
              Thanks for joining the STX.AI waitlist. We’ll keep you updated on the launch, rewards, and community invites.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition"
            >
              ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Waitlist;
