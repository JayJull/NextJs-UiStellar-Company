"use client";
import React from "react";
import Player from "lottie-react";
import animationData from "../../../public/images/hero.json";
import { IconMail } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <div className="flex-1 flex items-center justify-center relative w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                Space Technology Innovation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="relative z-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-6">
              <span className="text-white">Bring Your Vision to</span>
              <br />
              <span className="text-white">Life With Innovative</span>
              <br />
              <span className="text-white">Space </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Expertise
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              We craft impactful space technology experiences through
              cutting-edge innovation and developmentâ€”helping startups and
              brands reach beyond the stars with purpose.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                Let's talk
                <IconMail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animation Section - Kanan */}
          <div className="flex-1 flex justify-center lg:justify-end items-center">
            <div className="relative">
              <Player
                autoplay
                loop
                animationData={animationData}
                style={{ height: 600, width: 600 }}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
