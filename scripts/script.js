import { carouselHandler } from "./carouselHandler.js";
import { tileBuilder, checkoutTransfer } from "./populate_grid.js";
import { templateHeader } from "./web-components/app_header.js";
import { templateSidebar } from "./web-components/app_sidebar.js";
// import { templateMovieTile } from "./web-components/app_movie-tile.js";

const navbar = document.querySelectorAll(".pages a");
const qualitySelectorButtons = document.querySelectorAll(
  ".quality-selector-button"
);
templateSidebar();
templateHeader();
// templateMovieTile();

carouselHandler();

tileBuilder();
checkoutTransfer();

navbar.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbar.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

qualitySelectorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    qualitySelectorButtons.forEach((button) => {
      button.classList.toggle("none");
    });
  });
});

const root = document.documentElement;

const defaultAnimation = () => {
  root.style.setProperty("--default-tile-transition", 200 + "ms");
};

let disableAnimation;

let screenWidth = window.innerWidth;

window.onresize = () => {
  root.style.setProperty("--default-tile-transition", 0 + "ms");

  clearTimeout(disableAnimation);
  disableAnimation = setTimeout(defaultAnimation, 100);

  screenWidth = window.innerWidth;
  console.log(screenWidth);
};

// move to mobile only script?

const mobileBanner = document.querySelector(".mobile-banner");
const heroTitle = document.querySelector(".hero-title");
const button = document.querySelector(".buy-now");
const description = document.querySelector(".mobile-hero-description");
const backgroundImage = document.querySelector(".background-image");
const frame = document.querySelector(".frame");
// const mobileBackgroundBlur = document.querySelector(".mobile-background-blur");

button.addEventListener("click", () => {
  mobileBanner.classList.toggle("mobile-banner-active");
  heroTitle.classList.toggle("hero-title-active");
  description.classList.toggle("hero-description-active");
  button.classList.toggle("buy-now-active");
  frame.classList.toggle("frame-active");
  backgroundImage.classList.toggle("background-image-active");
  // mobileBackgroundBlur.classList.toggle("mobileBackgroundBlur-active");
});

/* set boolean based on screen size mobile: true, false

if mobile = true
if desktop = false

add event listener to hero and tiles
on click => add data atribute to class(es?) to transform to fullscreen
on X click => remove data atribute to minimize
on buy now click => play animation

 */

// const tiles = document.querySelectorAll(".tile");
// const lines = document.querySelectorAll(".line");
// const grid = document.querySelector(".grid");

// tiles.forEach((tile) => {
//   tile.addEventListener("click", (event) => {
//     if (screenWidth <= 640) {
//       console.log("clicked");
//       tiles.forEach((tile) => {
//         // tile.classList.remove("mobile-selected");
//         tile.removeAttribute("id");
//       });
//       // event.currentTarget.classList.add("mobile-selected");
//       grid.style.overflow = "auto";
//       lines.forEach((line) => {
//         line.style.overflowY = "unset";
//         // line.style.overflowY = "hidden";
//       });
//       tile.setAttribute("id", "mobile-selected");
//       const selectedTileMobile = document.querySelector("#mobile-selected");
//       selectedTileMobile.style.position = "fixed";

//       console.log(event.currentTarget);
//     }
//   });
// });

const mobileTiles = document.querySelectorAll(".tile");
const tileImage = document.querySelectorAll(".tile-image");
const main = document.querySelector("main");

const toggleExpansion = (element, to, duration = 150) => {
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
      { duration, fill: "forwards", ease: "ease-in" }
    );
    setTimeout(resolve, duration);
  });
};

const fadeContent = (element, opacity, duration = 300) => {
  return new Promise((resolve) => {
    [...element.children].forEach((child) => {
      requestAnimationFrame(() => {
        child.style.transition = `opacity ${duration}ms linear`;
        child.style.opacity = opacity;
      });
    });
    setTimeout(resolve, duration);
  });
};

const onTileClick = async (event) => {
  const tile = event.currentTarget;
  tile.setAttribute("id", "tile-selected");

  const tileClone = tile.cloneNode(true);

  const { top, left, width, height } = tile.getBoundingClientRect();

  tileClone.style.position = "fixed";
  tileClone.style.zIndex = "3000";

  tileClone.style.top = top + "px";
  tileClone.style.left = left + "px";
  tileClone.style.width = width + "px";
  tileClone.style.height = height + "px";

  tile.style.opacity = "0";

  main.appendChild(tileClone);

  // const closeButton = document.createElement("img");
  const closeButton = new Image(35, 35);

  closeButton.src = "/images/icons/icon_menu_arrow-back_white.svg";

  closeButton.style = `
    position: fixed;
    z-index: 10000;
    top: 35px;
    left: 35px;
  `;

  main.appendChild(closeButton);

  const dimBackground = document.createElement("div");

  dimBackground.setAttribute("id", "dimBackground");

  main.insertBefore(dimBackground, tileClone);

  closeButton.addEventListener("click", async () => {
    closeButton.remove();
    dimBackground.remove();

    // tileClone.style.removeProperty("display");
    // tileClone.style.removeProperty("padding");

    fadeContent(tileClone, "0");
    tile.removeAttribute("id", "tile-selected");

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
};

mobileTiles.forEach((tile) => {
  tile.addEventListener("click", onTileClick);
});
