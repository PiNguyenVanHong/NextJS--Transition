import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const ease = "power4.inOut";

export const animatePageIn = () => {
  const bannerBlock = document.querySelectorAll("#block");

  if (!bannerBlock) {
    return;
  }

  const tl = gsap.timeline();

  tl.set([".block"], {
    scaleY: 1,
  }).to([".block"], {
    scaleY: 0,
    duration: 1,
    stagger: {
      each: 0.1,
      from: "start",
      grid: "auto",
      axis: "x",
    },
    ease: ease,
    onComplete: () => {
      tl.set([".block"], { visibility: "hidden" });
    },
  });
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerBlock = document.querySelectorAll("#block");

  if (!bannerBlock) {
    return;
  }

  const tl = gsap.timeline();

  tl.set(".block", {
    visibility: "visible",
    scaleY: 0,
  }).to(".block", {
    scaleY: 1,
    duration: 1,
    stagger: {
      each: 0.1,
      from: "start",
      grid: [2, 5],
      axis: "x",
    },
    ease: ease,
    onComplete: () => {
      router.push(href);
    },
  });
};
