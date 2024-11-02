"use client";

import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useInView } from "react-intersection-observer";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "./SectionHeading";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Contact");
  }, [inView, setActiveSection]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    );
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
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

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
          type="email"
          name="email"
          id="email"
          required
          maxLength={200}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          id="message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
