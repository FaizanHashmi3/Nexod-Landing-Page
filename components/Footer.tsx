"use client";

import { motion } from "framer-motion";

export default function Footer() {

    return (

        <footer className="border-t border-white/10 py-10">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
            >

                {/* Logo */}

                <div className="text-white font-semibold text-lg">

                    Nexod 

                </div>


                {/* Links */}

                <div className="flex gap-6 text-white/60 text-sm">

                    <button className="hover:text-white transition">

                        About

                    </button>

                    <button className="hover:text-white transition">

                        Features

                    </button>

                    <button className="hover:text-white transition">

                        Contact

                    </button>

                </div>


                {/* Copyright */}

                <div className="text-white/40 text-sm">

                    © 2026 All rights reserved.

                </div>


            </motion.div>

        </footer>

    );

}