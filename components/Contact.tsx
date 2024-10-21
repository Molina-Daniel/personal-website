"use client";

import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <motion.section
      className="mb-20 sm:28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-500 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto">
          dmolcap@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" action="" method="post">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
          type="email"
          name="email"
          id="email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          id="message"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
