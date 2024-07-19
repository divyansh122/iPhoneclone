import React, { useEffect } from "react";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
const Hero = () => {
  const [videosrc, setvideosrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setvideosrc(smallHeroVideo);
    } else {
      setvideosrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      opacity: 1,
      ease: "power1.out",
      delay: 2,
    });
    gsap.to("#cta", {
      duration: 1,
      opacity: 1,
      y: -50,
      ease: "power1.out",
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videosrc}
          >
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights " className="btn">
          Buy
        </a>
        <p className="font-normal text-sm">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
