"use client";

import { useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapInteractions() {
  const init = useCallback(() => {
    // Reveal animations
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      gsap.to(reveal, {
        scrollTrigger: {
          trigger: reveal,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // Monumental vertical text parallax
    gsap.to(".monumental-vertical", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
      opacity: 0,
    });

    // Marquee infinite scroll
    gsap.to("#marquee", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return init;
}
