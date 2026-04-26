"use client";

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Shop Smarter, <br />
            Live Better Today
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            Discover premium quality products at unbeatable prices.
            Your everyday shopping experience just got an upgrade.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="/products"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Start Shopping
            </a>
          </div>
        </div>

        {/* Right Visual (optional placeholder card) */}
        <div className="w-full max-w-md">
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">🔥 Trending Deals</h3>
            <p className="text-gray-300 text-sm">
              Get up to 50% off on selected products. Limited time offer.
            </p>

            <div className="mt-5 space-y-3">
              <div className="h-3 bg-white/20 rounded-full"></div>
              <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
              <div className="h-3 bg-white/20 rounded-full w-4/6"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Hero
