import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HorizontalGallery from "@/components/HorizontalGallery";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Zalogi from "@/components/Zalogi";

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
