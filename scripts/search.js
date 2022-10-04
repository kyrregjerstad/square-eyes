import { movies } from "./database.js";

const results = document.querySelector(".search-results");
const search = document.querySelector("#search");

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
      <p class="movie-title">${item.title}</p>
      <p class="movie-description">
        ${item.description}
      </p>
      <button class="buy-now-button">Buy now</button>
      <img
        class="tile-image"
        src="${item.cover}"
        alt=""
      />
    </div>`
    );
  });
  if (query === "") {
    results.innerHTML = "";
  }
};

search.addEventListener("keyup", () => {
  render(search.value);
});
