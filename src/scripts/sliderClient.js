// src/components/SliderClient.js

let currentSlide = 0;
let autoSlideInterval;

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const totalSlides = track.children.length;

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 10000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetAutoSlide();
  });

  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
    resetAutoSlide();
  });

  startAutoSlide();
});