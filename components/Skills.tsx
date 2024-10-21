"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section className="mb-28 max-w-[53rem] text-center scroll-mt-28 sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
