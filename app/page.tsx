import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HorizontalGallery from "@/components/HorizontalGallery";
import Services from "@/components/Services";
import Zalogi from "@/components/Zalogi";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HorizontalGallery />
        <Services />
        <Zalogi />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
