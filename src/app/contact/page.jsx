"use client";
import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // fake API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // hide after 3 sec
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black px-4 py-12 transition-colors">

      {/* Success Toast */}
      {success && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg animate-bounce">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Have something to discuss? Reach out anytime.
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 
      bg-white dark:bg-gray-900 
      p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">

        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Get in touch
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            We’re open to ideas, questions, or collaborations. Feel free to contact us.
          </p>

          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>📍 Feni, Bangladesh</p>
            <p>📧 support@example.com</p>
            <p>📞 +880 1234 567 890</p>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg border 
            bg-white dark:bg-gray-800 
            border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg border 
            bg-white dark:bg-gray-800 
            border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <textarea
            rows="4"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded-lg border 
            bg-white dark:bg-gray-800 
            border-gray-300 dark:border-gray-700
            text-gray-900 dark:text-white
            focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg font-semibold text-white
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:opacity-90 transition
            disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
} 