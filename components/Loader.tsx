"use client";

import { motion } from "framer-motion";

export default function Loader() {

    return (

        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                delay: 1
            }}
            className="
        fixed
        inset-0
        bg-black
        flex
        items-center
        justify-center
        z-[999]
        pointer-events-none
        overflow-hidden
      "
        >

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl font-semibold"
            >
                Nexod 
            </motion.div>

        </motion.div>

    );

}