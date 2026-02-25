import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      
      <Loader />
      <CursorGlow />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />

    </main>
  );
}