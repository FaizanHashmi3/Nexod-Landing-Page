"use client";

import { motion } from "framer-motion";

export default function CTA() {

    return (

        <section className="py-32 relative overflow-hidden">

            {/* Background Glow */}

            <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[200px] rounded-full left-1/2 -translate-x-1/2 top-0" />


            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-6 relative z-10"
            >

                {/* Heading */}

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">

                    Ready to Transform Your Business?

                </h2>


                {/* Subtext */}

                <p className="text-white/60 mb-10 text-lg">

                    Join the future of AI automation today. Start building smarter workflows.

                </p>


                {/* Button */}

                <button className="
          bg-white
          text-black
          px-10
          py-4
          rounded-full
          font-semibold
          hover:scale-105
          transition
        ">

                    Get Started Now

                </button>


            </motion.div>

        </section>

    );

}