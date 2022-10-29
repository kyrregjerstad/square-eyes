const root = document.documentElement;
let screenWidth = window.innerWidth;

export let isMobile;
export const mobileChecker = () => {
  screenWidth < 640 ? (isMobile = true) : (isMobile = false);
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    screenWidth < 640 ? (isMobile = true) : (isMobile = false);
  });
};

const disableAnimationOnResize = () => {
  const defaultAnimation = () => {
    root.style.setProperty("--default-tile-transition", 200 + "ms");
  };

  let buffer;

  root.style.setProperty("--default-tile-transition", 0 + "ms");

  clearTimeout(disableAnimationOnResize);
  buffer = setTimeout(defaultAnimation, 250);
};

window.onload = () => {
  mobileChecker();
};

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  mobileChecker();
  disableAnimationOnResize();
});
