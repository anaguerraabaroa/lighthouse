"use strict";

// Select elements
const switchElement = document.querySelector(".js-switch");
const audio = document.querySelector(".js-audio");

// Switch element handler function
const handleAudio = () => {
  if (switchElement.checked === false) {
    audio.currentTime = 0;
    audio.pause();
  } else {
    audio.currentTime = 0;
    audio.play();
  }
};

// Switch element event listener
switchElement.addEventListener("change", handleAudio);
