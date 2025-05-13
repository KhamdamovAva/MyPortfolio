import React from 'react';
import { HERO_CONTENT } from '../data/data';
import profilePic from '../assets/myPhoto1.jpg';
import { motion } from 'framer-motion';

const fadeInFromLeft = (delay = 0) => ({
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const fadeInFromRight = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 1 },
  },
};

function Hero() {
  return (
    <section className="border-b border-neutral-900 pb-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={fadeInFromLeft(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tight mt-12"
            >
              Xamdamov Mirzoavaz
            </motion.h1>

            <motion.span
              variants={fadeInFromLeft(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-4 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl font-medium text-transparent"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              variants={fadeInFromLeft(0.8)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base text-[17px] font-light leading-relaxed tracking-tight text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={fadeInFromRight}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex justify-center px-4 mt-10 lg:mt-0"
        >
          <img
            src={profilePic}
            alt="Xamdamov Mirzoavaz"
            className="w-[320px] h-[420px] sm:w-[350px] sm:h-[460px] rounded-2xl object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
