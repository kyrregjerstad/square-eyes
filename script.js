import { carouselHandler } from "./carouselHandler.js";

const navbar = document.querySelectorAll(".pages a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeButton = document.querySelector(".close-button-arrow");
const backgroundBlur = document.querySelector(".background-blur");
const sideBar = document.querySelector(".sidebar");
const qualitySelectorButtons = document.querySelectorAll(
  ".quality-selector-button"
);

carouselHandler();

navbar.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbar.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

hamburgerMenu?.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

closeButton?.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

backgroundBlur?.addEventListener("click", () => {
  sideBar.classList.toggle("hidden");
  backgroundBlur.classList.toggle("hidden");
});

qualitySelectorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    qualitySelectorButtons.forEach((button) => {
      button.classList.toggle("none");
    });
  });
});

import { movies } from "./database.js";

const tiles = document.querySelectorAll(".tile");
const movieTitles = document.querySelectorAll(".movie-title");

// movieTitles.forEach((title) => {
//   title.innerHTML = `${movies[index].title}`;
//   index++;
// });

let index = 0;
let maxLength = movies.length;
console.log(movies.length);

tiles.forEach((tile) => {
  tile.innerHTML = `<p class="movie-title">${movies[index].title}</p>
    <p class="movie-description">
    ${movies[index].description}
    </p>
    <button class="buy-now-button" data-movieCode="${movies[index].code}">Buy now</button>
    <img
    class="tile-image"
    src="${movies[index].cover}"
    alt=""
    />`;
  index++;
  if (index === maxLength) {
    index = 0;
  }
});

const buyNowButtons = document.querySelectorAll(".buy-now-button");

let movieCode;
buyNowButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target.getAttribute("data-movieCode"));
    movieCode = event.target.getAttribute("data-movieCode");
    window.location = "/checkout.html";
  });
});

export let code = movieCode;

window.addEventListener("click", () => {
  console.log(movieCode);
});
