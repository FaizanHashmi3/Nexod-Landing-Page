"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Mail, BarChart } from "lucide-react";

const features = [
    {
        title: "AI Development",
        desc: "We build custom AI solutions including machine learning models, chatbots, and predictive systems tailored to your business.",
        icon: Bot,
    },
    {
        title: "AI Marketing",
        desc: "Leverage AI to optimize campaigns, generate content, and drive measurable marketing growth.",
        icon: Workflow,
    },
    {
        title: "Custom AI Models",
        desc: "Deploy machine learning models designed specifically for your workflows and use cases.",
        icon: Mail,
    },
    {
        title: "Predictive Analytics",
        desc: "Make smarter decisions using AI-powered insights and forecasting tools.",
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
                    Our Services
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
group
relative
bg-white/5
border border-white/10
rounded-2xl
p-8
backdrop-blur-xl
hover:border-purple-500/40
transition
overflow-hidden
"
                            >

                                <Icon className="text-white mb-4" size={32} />

                                <h3 className="text-white font-semibold text-lg mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-white/60 text-sm">
                                    {feature.desc}
                                </p>
                                <div className="
absolute inset-0
bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-blue-600/0
opacity-0 group-hover:opacity-100
transition
"/>
                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}