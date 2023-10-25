//////////////////////// HOME //////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const navBar = document.querySelector(".nav-bar");
  const image = document.querySelector(".image");
  const heroTitle = document.querySelector(".hero-title");

  hero.style.display = "block";

  setTimeout(() => {
    hero.style.width = "max-content"; // Expand the hero to its full content
    hero.style.opacity = 1; // Make the hero visible (fade in)
    navBar.style.transform = "translateY(0%)"; // Move the navbar back to its original position
    navBar.style.opacity = 1; // Make the navbar visible (fade in)
    image.style.transform = "translateY(0%)"; // Move the image back to its original position
    image.style.opacity = 1; // Make the image visible (fade in)
  }, 1200); // After 1.5 seconds

  setTimeout(() => {
    heroTitle.style.width = "max-content"; // Expand the hero-title to its full content
    heroTitle.style.opacity = 1; // Make the hero-title visible (fade in)
    heroTitle.style.animation = "typewriter 3s steps(24) 0.1s 1 normal both, blinkTextCursor 800ms steps(24) infinite normal";
    // Start the typewriter animation after a delay
  }, 2500); // After 1.5 seconds
});


////////////////////////////////////////////////////////////
//////////////////////// ABOUT //////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video");
  const heroTitleAbout = document.querySelector(".hero-title-about");

  setTimeout(() => {
    video.style.transform = "translateY(0%)";
    video.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    heroTitleAbout.style.opacity = 1; // Make the hero-title visible (fade in)
  }, 1000);
});