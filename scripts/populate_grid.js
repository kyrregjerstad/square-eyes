import { movies } from "./database.js";

export const tileBuilder = () => {
  let index = 0;
  let maxLength = movies.length;
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile) => {
    tile.innerHTML = `
    <div class="tile-text">
      <p class="movie-title">${movies[index].title}</p>
    <div class="movie-year-genre">
      <p class="movie-year">${movies[index].year}</p>
      <p class="movie-dot"> • </p>
      <p class="movie-genre">${movies[index].genre}</p>
    </div>
      <p class="movie-description">
      ${movies[index].description.substring(0, 90) + `...`}
      </p>
    </div>
    <button class="buy-now-button" data-token="${
      movies[index].token
    }">Buy Now</button>
    <div class="tile-fade"></div>
    <img class="tile-image" src="${movies[index].cover}" alt=""/>
    `;
    index++;
    if (index === maxLength) {
      index = 0;
    }
  });
};

export const checkoutTransfer = () => {
  const buyNowButtons = document.querySelectorAll(".buy-now-button");
  let token;
  buyNowButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("click");
      token = event.target.getAttribute("data-token");
      sessionStorage.setItem("token", token);
      window.location = "/checkout.html";
    });
  });
};
