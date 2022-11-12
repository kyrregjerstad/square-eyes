import { carouselHandler } from "./carouselHandler.js";
import { navigation } from "./web-components/app_navigation.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
import { templateMovieTile } from "./web-components/app_movie-tile.js";
templateSidebar();
navigation();
templateMovieTile();
carouselHandler();
