/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.85,
  });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Hero");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="hero"
      className="mb-28 max-w-[50rem] text-center sm:mb-28 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-photo.jpg"
              alt="Daniel Molina"
              width={192}
              height={192}
              quality={100}
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-2xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-5 mt-4 px-4 text-4xl font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Daniel Molina</span>
      </motion.h1>
      <motion.h2
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hello, I'm a </span>
        <span className="font-bold">full-stack developer</span> with
        <span className="font-bold"> 5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">TypeScript</span>,{" "}
        <span className="underline">React</span> and{" "}
        <span className="underline">AI</span>.
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href=""
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-molina-developer/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Molina-Daniel"
          target="_blank"
          className="bg-white p-[15px] text-gray-700 text-xl flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
