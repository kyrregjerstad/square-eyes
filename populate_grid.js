import { movies } from "./database.js";

export const tileBuilder = () => {
  const tiles = document.querySelectorAll(".tile");

  let index = 0;
  let maxLength = movies.length;
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
};

export const checkoutTransfer = () => {
  const buyNowButtons = document.querySelectorAll(".buy-now-button");
  let movieCode;
  buyNowButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      console.log("click");
      movieCode = event.target.getAttribute("data-movieCode");
      sessionStorage.setItem("movieCode", movieCode);
      window.location = "/checkout.html";
    });
  });
};
