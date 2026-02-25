
"use client";

import { motion } from "framer-motion";
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black min-h-screen"
    >

      <Loader />
      <CursorGlow />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />

    </motion.main >
  );
}