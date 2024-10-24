import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const sections = [
  {
    name: "Hero",
    hash: "#hero",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Python",
  "AI",
  "Docker",
  "CI/CD",
  "PostgreSQL",
  "React Testing Library",
  "Git",
  "Tailwind CSS",
  "Jest",
  "REST",
] as const;

export const experiences = [
  {
    title: "Bootcamp Graduated @Ubiqum Code Academy",
    location: "Barcelona",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer @Marfeel",
    location: "Barcelona",
    description:
      "I worked as a front-end developer. During the first year in the Tier 1 Support Team, and the second year and a half in the Tier 2 Team. I also acquired other responsibilities as CDN and Caching Systems chapter representative, serving as a link between DevOps/Product teams and my Support Team, and working with core product teams core product teams to develop and integrate new product improvements.",
    icon: createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Full-Stack Developer @Sngular",
    location: "Remote from Spain",
    description: `During my time at Sngular, I have worked on several high-impact projects.
    I led the MasterPro e-commerce front-end development. (5 months)
    I worked on BBVA's Web App, contributing to the new customers' sign-up team, in charge of all the bank enrollment processes for new clients. (1.2 year)
    Currently I'm working at Inditex on an internal management application for the Image Department. (1+ year)
    I also upskilled to the full stack.`,
    icon: createElement(FaReact),
    date: "2022 - present",
  },
] as const;
