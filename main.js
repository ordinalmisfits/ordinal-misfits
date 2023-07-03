"use strict";

const gallery = document.getElementById("gallery");

const muteBtn = document.getElementById("mute-btn");
const video = muteBtn.previousElementSibling;

video.addEventListener("volumechange", () => {
  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "Unmute" : "Mute";
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
