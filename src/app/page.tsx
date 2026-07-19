import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import ResearchInterests from '@/components/ResearchInterests';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Education />
        <ResearchInterests />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
