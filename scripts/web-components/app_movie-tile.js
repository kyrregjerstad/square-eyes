import { movies } from "../database.js";
import { isMobile } from "../helpers.js";

export const templateMovieTile = () => {
  const template = document.createElement("template");

  template.innerHTML =
    /* html */
    `
  <link rel="stylesheet" href="style.css" />
  <div class="tile"></div>
  `;

  let index = 0;
  let maxLength = movies.length;

  class MovieTile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const tiles = this.shadowRoot.querySelectorAll(".tile");

      tiles.forEach((tile) => {
        tile.insertAdjacentHTML(
          "afterbegin",
          /* html */
          `
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
          <button class="buy-now-button"
          data-token="${movies[index].token}">Buy Now</button>
          <div class="tile-fade"></div>
          <img loading="lazy" class="tile-image" src="${
            movies[index].cover
          }" alt="movie cover"/>
          `
        );
        index++;
        if (index === maxLength) {
          index = 0;
        }
      });

      const main = document.querySelector("main");
      const toggleExpansion = (element, to, duration = 250) => {
        return new Promise((resolve) => {
          element.animate(
            [
              {
                top: to.top,
                left: to.left,
                width: to.width,
                height: to.height,
              },
            ],
            { duration, fill: "forwards", ease: "ease-in-out" }
          );
          setTimeout(resolve, duration);
        });
      };

      const onTileClick = async (event) => {
        if (isMobile) {
          const tile = event.currentTarget;

          const tileClone = tile.cloneNode(true);

          tileClone.setAttribute("id", "tile-selected");

          const { top, left, width, height } = tile.getBoundingClientRect();

          tileClone.style.position = "fixed";
          tileClone.style.zIndex = "3000";

          tileClone.style.top = top + "px";
          tileClone.style.left = left + "px";
          tileClone.style.width = width + "px";
          tileClone.style.height = height + "px";

          tile.style.opacity = "0";

          main.appendChild(tileClone);

          const closeButton = new Image(35, 35);

          closeButton.src = "/images/icons/icon_menu_arrow-back_white.svg";

          closeButton.style = `
          position: fixed;
          z-index: 10000;
          top: 35px;
          left: 35px;
          `;

          document.body.appendChild(closeButton);

          const dimBackground = document.createElement("div");

          dimBackground.setAttribute("id", "dimBackground");

          document.body.appendChild(dimBackground);

          closeButton.addEventListener("click", async () => {
            closeButton.remove();
            dimBackground.remove();

            tileClone.removeAttribute("id", "tile-selected");

            await toggleExpansion(
              tileClone,
              {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`,
              },
              100
            );
            tile.style.removeProperty("opacity");

            tileClone.remove();
          });

          await toggleExpansion(tileClone, {
            top: 0,
            left: 0,
            width: "100vw",
            height: "95vh",
          });

          tileClone.appendChild(closeButton);
        } else {
          return;
        }
      };

      tiles.forEach((tile) => {
        tile.addEventListener("click", onTileClick);
      });
    }
  }

  window.customElements.define("template-movie-tile", MovieTile);
};
