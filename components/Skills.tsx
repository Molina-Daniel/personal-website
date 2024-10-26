"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
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
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("Skills");
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="skills"
      className="pb-28 max-w-[53rem] text-center scroll-mt-96 sm:pb-96 sm:-mt-44"
    >
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
