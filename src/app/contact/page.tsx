"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate success (you can plug in actual backend/EmailJS here)
    setShowModal(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-28 relative">
      {/* Contact Form */}
      <div className="bg-[#101624] p-8 md:p-10 py-14 rounded-2xl max-w-xl w-full text-white shadow-md z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Contact Us</h2>
        <p className="text-[#C1C6D3] text-center text-sm mb-6">
          Have questions or partnership ideas? <br /> Reach out to the Vectra team.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] focus:outline-none "
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-[#0B0F1A] border border-[#1F2937] placeholder-[#6B7280] resize-none focus:outline-none "
          />
          <div className="flex justify-center w-full">
          <button
            type="submit"
            className="w-48 bg-white text-black py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Submit
          </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed px-5 md:px-0 inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-[#0B0F1A] text-white rounded-xl px-8 py-10 max-w-sm w-full text-center shadow-2xl border border-white/10">
            {/* Checkmark image */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/check.svg" // ← save the badge icon here
                alt="check"
                width={48}
                height={48}
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
            <p className="text-[#C1C6D3] text-sm mb-6">
              Thanks for reaching out. We have received your message and will get back to you shortly.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-white text-black w-48 py-2 rounded-md font-medium"
            >
              ok
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
