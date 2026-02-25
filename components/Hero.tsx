"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroParticles from "./HeroParticles";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMove = (e: MouseEvent) => {

            setMouse({
                x: (e.clientX - window.innerWidth / 2) / 40,
                y: (e.clientY - window.innerHeight / 2) / 40,
            });

        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);

    }, []);


    return (

        <section className="relative min-h-screen flex items-center pt-28 overflow-hidden">

            <HeroParticles />


            {/* Background blobs */}

            <motion.div
                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[200px] top-[-100px] left-[-100px]"
            />

            <motion.div
                animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[200px] bottom-[-100px] right-[-100px]"
            />



            {/* Main container */}

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">



                {/* LEFT SIDE */}

                <motion.div transition={{ type: "spring", stiffness: 50 }}>


                    {/* Heading */}

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight"
                    >

                        Transforming Ideas into

                        <br />

                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

                            Intelligent Solutions

                        </span>

                    </motion.h1>



                    {/* Subheading */}

                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 mt-6 max-w-xl text-lg"
                    >

                        We partner with companies and individuals to build cutting-edge AI products and execute data-driven marketing strategies that accelerate growth.

                    </motion.p>



                    {/* Buttons */}

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex gap-4"
                    >

                        <MagneticButton>

                            Start Your AI Journey

                        </MagneticButton>


                        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">

                            Talk to Our Team

                        </button>

                    </motion.div>


                </motion.div>



                {/* RIGHT SIDE */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative"
                >


                    {/* Image */}

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >

                        <Image
                            src="/images/dashboard.png"
                            alt="AI Solutions"
                            width={900}
                            height={600}
                            className="rounded-2xl"
                        />

                    </motion.div>



                    {/* Floating Chips */}

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute -top-5 -left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white px-4 py-3 shadow-xl"
                    >

                        150+ Models Deployed

                    </motion.div>



                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity }}
                        className="absolute top-1/2 -right-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white px-4 py-3 shadow-xl"
                    >

                        50+ Projects Delivered

                    </motion.div>



                </motion.div>



            </div>



            {/* Scroll indicator */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
                >

                    <div className="w-1 h-2 bg-white rounded-full mt-2" />

                </motion.div>

            </motion.div>



        </section>

    );

}