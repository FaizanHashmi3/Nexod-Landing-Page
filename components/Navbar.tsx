"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="
          flex
          justify-between
          items-center
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          px-6
          py-3
        ">

                    {/* Logo */}
                    <div className="text-white font-semibold text-lg tracking-wide">
                        Nexod AI Solutions
                    </div>

                    {/* Button */}
                    <button className="
            bg-white
            text-black
            px-5
            py-2
            rounded-full
            font-medium
            hover:scale-105
            transition
          ">
                        Contact
                    </button>

                </div>

            </div>
        </motion.nav>
    );
}