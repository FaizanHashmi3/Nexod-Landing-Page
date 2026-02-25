"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Mail, BarChart } from "lucide-react";

const features = [
    {
        title: "AI Automation",
        desc: "Automate repetitive business tasks with powerful AI.",
        icon: Bot,
    },
    {
        title: "Smart Workflows",
        desc: "Design and manage workflows visually and efficiently.",
        icon: Workflow,
    },
    {
        title: "Email Automation",
        desc: "Send intelligent automated emails at the right time.",
        icon: Mail,
    },
    {
        title: "Advanced Analytics",
        desc: "Track performance with real-time insights.",
        icon: BarChart,
    },
];

export default function Features() {
    return (
        <section className="py-32 relative">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
                >
                    Powerful Features
                </motion.h2>


                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature, i) => {

                        const Icon = feature.icon;

                        return (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-8
                  backdrop-blur-xl
                  hover:border-white/20
                  transition
                "
                            >

                                <Icon className="text-white mb-4" size={32} />

                                <h3 className="text-white font-semibold text-lg mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-white/60 text-sm">
                                    {feature.desc}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}