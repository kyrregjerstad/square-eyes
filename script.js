const hamburgerMenu = document.querySelector(".hambuger-menu");
const userIcon = document.querySelector(".user-icon");
const heroLeftArrow = document.querySelector(".arrow-left");
const heroRightArrow = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide");

//TODO: make hero section scroll when clicking on arrow
let currentSlide = 0;
let maxSlide = slides.length - 1;

heroRightArrow.addEventListener("click", (event) => {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  console.log(currentSlide);

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

heroLeftArrow.addEventListener("click", (event) => {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  console.log(currentSlide);

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});
