import { carouselHandler } from "./carouselHandler.js";
// import { tileBuilder, checkoutTransfer } from "./populate_grid.js";
import { navigation } from "./web-components/app_navigation.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
import { templateMovieTile } from "./web-components/app_movie-tile.js";
templateSidebar();
navigation();
templateMovieTile();
carouselHandler();
// checkoutTransfer();

// const qualitySelectorButtons = document.querySelectorAll(
//   ".quality-selector-button"
// );

// qualitySelectorButtons?.forEach((button) => {
//   button.addEventListener("click", () => {
//     qualitySelectorButtons.forEach((button) => {
//       button.classList.toggle("none");
//     });
//   });
// });
