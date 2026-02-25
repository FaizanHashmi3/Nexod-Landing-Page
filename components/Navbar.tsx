"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50"
        >

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className={`
                flex justify-between items-center rounded-full px-6 py-3 transition-all duration-300

                ${scrolled
                        ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-lg"
                        : "bg-white/5 backdrop-blur-xl border border-white/10"
                    }
                `}>

                    <div className="text-white font-semibold text-lg tracking-wide">

                        Nexod 

                    </div>


                    <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg transition">

                       Get Started

                    </button>

                </div>

            </div>

        </motion.nav>

    );

}