"use client";

import { useCallback, useLayoutEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParticles() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);


    useLayoutEffect(() => {

        const dots = [
            "#story-dot-0",
            "#story-dot-1",
            "#story-dot-2"
        ];


        // initial hidden center
        gsap.set(dots, {
            autoAlpha: 0,
            scale: 0,
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50
        });


        // emerge
        ScrollTrigger.create({

            trigger: "#hero-particles",

            start: "bottom 80%",

            onEnter: () => {

                gsap.to(dots, {

                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15

                });

            },

            onLeaveBack: () => {

                gsap.to(dots, {

                    autoAlpha: 0,
                    scale: 0,
                    duration: 0.5

                });

            }

        });



        // master movement controller
        ScrollTrigger.create({

            trigger: "body",

            start: "top top",

            end: "bottom bottom",

            onUpdate: () => {

                dots.forEach((dot, index) => {

                    let target =
                        document.querySelector(`#sticky-anchor-${index}`);

                    if (!target)
                        target =
                            document.querySelector(`#bullet-anchor-${index}`);

                    if (!target) return;

                    const rect = target.getBoundingClientRect();

                    gsap.to(dot, {

                        left: rect.left,
                        top: rect.top,
                        duration: 0.5

                    });

                });

            }

        });


    }, []);



    return (

        <div className="absolute inset-0">

            <Particles
                id="hero-particles"
                init={particlesInit}
                options={{
                    fullScreen: false,
                    particles: {
                        number: { value: 60 },
                        links: { enable: true, opacity: 0.2 },
                        move: { enable: true, speed: 1 },
                        size: { value: 2 }
                    }
                }}
                className="absolute inset-0"
            />


            <div id="story-dot-0" className="story-dot bg-orange-500" />
            <div id="story-dot-1" className="story-dot bg-blue-500" />
            <div id="story-dot-2" className="story-dot bg-purple-500" />

        </div>

    );

}