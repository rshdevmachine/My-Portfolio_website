"use client";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import profilePic from "../assets/myimage.jpg";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Arsh-final-resume.pdf";
import { Spotlight } from "./Spotlight.jsx";
import { FlipWords } from "./Flip.jsx";
import { ButtonsCard } from "./Buttons.jsx";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }}
});

const Hero = () => {
  const words = ["Full Stack Developer", "Software Engineer", "Tech Enthusiast", "Innovating for Impact", "ML Enthusiast"];

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 -mt-14">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"
            >
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-7xl">
              Arsh Ahmad
              </span>
            </motion.h2>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <FlipWords words={words} />
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <a
                href={resume}
                download=""
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
              >
                <FaDownload className="pr-1 text-neutral-500" />
                
              
                <span>DOWNLOAD RESUME</span>
              </a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl mt-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
