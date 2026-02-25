"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Showcase() {

    return (

        <section className="py-32">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


                {/* LEFT TEXT */}

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

                        Build AI Workflows Visually

                    </h2>


                    <p className="text-white/60 mb-8">

                        Create powerful automation workflows with simple drag and drop interface.
                        Scale your business operations with cutting edge AI technology.

                    </p>


                    <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">

                        Explore Platform

                    </button>

                </motion.div>



                {/* RIGHT IMAGE */}

                <motion.div
                   initial={{ opacity: 0, x: -60 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   viewport={{ once: true }}
                >

                    <Image
                        src="/images/dashboard.png"
                        alt="dashboard"
                        width={600}
                        height={400}
                        className="
    rounded-2xl
    border border-white/10
    rotate-[-6deg]
    hover:rotate-0
    transition
    duration-500
  "
                    />
                </motion.div>


            </div>

        </section>

    );

}