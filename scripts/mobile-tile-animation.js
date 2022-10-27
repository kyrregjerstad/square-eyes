const mobileTiles = document.querySelectorAll(".tile");
const main = document.querySelector("main");

export const mobileTileHandler = () => {
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
  };

  mobileTiles.forEach((tile) => {
    tile.addEventListener("click", onTileClick);
  });
};
const mobileBanner = document.querySelector(".mobile-banner");
const heroTitle = document.querySelector(".hero-title");
const button = document.querySelector(".buy-now");
const description = document.querySelector(".mobile-hero-description");
const backgroundImage = document.querySelector(".background-image");
const frame = document.querySelector(".frame");

button?.addEventListener("click", () => {
  mobileBanner.classList.toggle("mobile-banner-active");
  heroTitle.classList.toggle("hero-title-active");
  description.classList.toggle("hero-description-active");
  button.classList.toggle("buy-now-active");
  frame.classList.toggle("frame-active");
  backgroundImage.classList.toggle("background-image-active");
});
