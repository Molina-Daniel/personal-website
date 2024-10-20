/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[46rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a master's degree in
        <span className="font-medium"> Finance</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        <span className="font-medium"> full-stack web development</span>.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is
        <span className="font-medium">
          {" "}
          TypeScript, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with
        <span className="font-medium"> Python and AI implementations</span>. I
        am always looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy lifting
        weights at the gym, rollerblading, and playing with Katty (my dog). I
        also enjoy
        <span className="font-medium"> learning new things</span> about
        <span className="font-medium"> fitness and nutrition</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
};

export default About;
