import { movies } from "./database.js";

const results = document.querySelector("#search-results");
const search = document.querySelector("#search-input");

const render = (query = "") => {
  const cleanedUpQuery = query.trim().toLowerCase();
  const filtered = movies.filter(
    (item) =>
      item.title.toLowerCase().includes(cleanedUpQuery) ||
      item.year.includes(cleanedUpQuery) ||
      item.genre.toLowerCase().includes(cleanedUpQuery) ||
      item.director.toLowerCase().includes(cleanedUpQuery) ||
      item.actor.toLowerCase().includes(cleanedUpQuery)
  );

  results.innerHTML = "";
  filtered.forEach((item) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<div class="tile">
      <div class="tile-text">
      <p class="movie-title">${item.title}</p>
    <div class="movie-year-genre">
      <p class="movie-year">${item.year}</p>
      <p class="movie-dot"> • </p>
      <p class="movie-genre">${item.genre}</p>
    </div>
      <p class="movie-description">
      ${item.description.substring(0, 90) + `...`}
      </p>
    </div>
    <button class="buy-now-button" data-token="${item.token}">Buy Now</button>
    <div class="tile-fade"></div>
    <img class="tile-image" src="${item.cover}" alt="movie cover"/>
    </div>`
    );
  });
  if (query === "") {
    results.innerHTML = "";
  }
};
search.addEventListener("keyup", () => {
  render(search.value);
  console.log("filtered");
});
