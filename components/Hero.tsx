"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroParticles from "./HeroParticles";

export default function Hero() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMove = (e: MouseEvent) => {

            setMouse({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });

        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);

    }, []);
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <HeroParticles />
            <div
                id="hero-origin"
                className="absolute top-1/2 left-1/2 w-0 h-0"
            />
            {/* Gradient Background Blob */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[200px] top-[-100px] left-[-100px]"
            />


            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[200px] bottom-[-100px] right-[-100px]"
            />



            {/* Content */}
            <motion.div
                animate={{
                    x: mouse.x,
                    y: mouse.y,
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className="text-center z-10 px-6"
            >

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                    Transform Your Business
                    <br />

                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

                        With AI Automation

                    </span>

                </motion.h1>


                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 mt-6 max-w-xl mx-auto text-lg"
                >
                    Powerful AI workflows to automate, scale and grow your business faster than ever before.
                </motion.p>



                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex gap-4 justify-center"
                >

                    <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition">

                        Get Started

                    </button>

                    <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">

                        Watch Demo

                    </button>

                </motion.div>


            </motion.div>
            {/* Scroll Indicator */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity
                    }}
                    className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
                >

                    <div className="w-1 h-2 bg-white rounded-full mt-2" />

                </motion.div>

            </motion.div>

        </section>
    );
}