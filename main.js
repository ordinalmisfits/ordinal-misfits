"use strict";

const gallery = document.getElementById("gallery");

const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  const video = muteBtn.previousElementSibling;
  video.muted = !video.muted;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    const video = entry.target.querySelector("video");
    if (intersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
});

observer.observe(gallery);
