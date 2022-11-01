import { carouselHandler } from "./carouselHandler.js";
import { tileBuilder, checkoutTransfer } from "./populate_grid.js";
import { navbarDesktop } from "./web-components/app_navbar-desktop.js";
import { navbarMobile } from "./web-components/app_navbar-mobile.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
import { mobileTileHandler } from "./mobile-tile-animation.js";
import { isMobile } from "./helpers.js";
// import { templateMovieTile } from "./web-components/app_movie-tile.js";

const qualitySelectorButtons = document.querySelectorAll(
  ".quality-selector-button"
);
templateSidebar();
navbarDesktop();
navbarMobile();
mobileTileHandler();

// templateMovieTile();

carouselHandler();

tileBuilder();
checkoutTransfer();

qualitySelectorButtons?.forEach((button) => {
  button.addEventListener("click", () => {
    qualitySelectorButtons.forEach((button) => {
      button.classList.toggle("none");
    });
  });
});
