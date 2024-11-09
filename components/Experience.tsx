"use client";

import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useThemeContext } from "@/context/ThemeContext";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("Experience");
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 sm:mb-40 sm:-mt-44 scroll-mt-28"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)"}
      >
        {experiences.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
