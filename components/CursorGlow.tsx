"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const move = (e: MouseEvent) => {

            setPosition({
                x: e.clientX,
                y: e.clientY
            });

        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);

    }, []);

    return (

        <div
            style={{
                left: position.x,
                top: position.y
            }}
            className="
            fixed
            w-[400px]
            h-[400px]
            bg-purple-600/20
            rounded-full
            blur-[120px]
            pointer-events-none
            -translate-x-1/2
            -translate-y-1/2
            z-0
            hidden md:block
            "
        />

    );

}