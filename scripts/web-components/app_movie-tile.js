import { movies } from "../database.js";

export const templateMovieTile = () => {
  const template = document.createElement("template");

  let index = 0;
  let maxLength = movies.length;
  const tiles = document.querySelectorAll(".tile");
  // console.log(shadowTile);

  // const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile) => {
    template.innerHTML = `
  <link rel="stylesheet" href="style.css" />
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
  <img class="tile-image" src="${movies[index].cover}" alt="movie cover"/>
  `;
    index++;
    if (index === maxLength) {
      index = 0;
    }
    console.log(index);
  });

  class MovieTile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}
  }

  window.customElements.define("template-movie-tile", MovieTile);
};
