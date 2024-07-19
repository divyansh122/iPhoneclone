import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../utils";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between ">
          <h2 className="section-heading " id="title">
            Get the Highlights
          </h2>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watching" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
