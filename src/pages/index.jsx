import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skill/skills";
import Experience from "@/components/experiences/experience";
import Work from "@/components/works/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
