"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav > div");

  window.addEventListener("scroll", () => {
    // Calculate the scale based on the scroll position
    const scale = Math.min(1, 1 - window.scrollY / 500); // You can adjust the "500" value as needed

    // Apply the scale transformation to the navbar
    navbar.style.transform = `scale(${scale})`;

    // If you want to stop scaling at a certain point (e.g., 0.5), you can use an additional condition
    if (scale <= 0.5) {
      navbar.style.transform = "scale(0.5)";
    }
  });
});

// GSAP Parallax Scroll
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".panel");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: {
      y: i * innerHeight,
      autoKill: false,
      ease: "Power3.easeInOut",
    },
    duration: 0.85,
  });
}

ScrollTrigger.defaults({
  markers: true,
});

// sections.forEach((eachPanel, i) => {
//   console.log(i, eachPanel);
//   // const mainAnim = gsap.timeline({ paused: true });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     invalidateOnRefresh: true,
//     onEnter: () => goToSection(i),
//   });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     invalidateOnRefresh: true,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i),
//   });
// });
