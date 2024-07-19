import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const animateGsap=(target,animationProps,scrollProps)=>{
  gsap.to(target,{
    ...animationProps,
    scrollTrigger:{
      trigger:target,
      start:"top 80%",
      toggleActions:"restart reverse restart reverse",
      ...scrollProps
    }
  })
}