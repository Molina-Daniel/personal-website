import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
