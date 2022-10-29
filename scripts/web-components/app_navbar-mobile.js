export const navbarMobile = () => {
  const template = document.createElement("template");

  template.innerHTML = `
  <link rel="stylesheet" href="style.css" />
  <div class="mobile-header">
        <div class="hamburger-menu">
          <img src="/images/icons/icon_menu_hamburger.svg" alt="" />
        </div>
        <div class="mobile-logo">
          <img src="/images/logo/SquareEyes_logo_glasses.webp" alt="" />
        </div>
        <div class="mobile-search">
          <img src="/images/icons/icon_menu_search.svg" alt="" />
        </div>
      </div>
  <nav class="mobile-navbar">
    <div class="mobile-nav-icon">
      <a href="index.html">
        <img src="/images/icons/icon_mobile_nav_films-active.svg" alt="" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="browse.html">
        <img src="/images/icons/icon_mobile_nav_browse.svg" alt="" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="collections.html">
        <img src="/images/icons/icon_mobile_nav_collection.svg" alt="" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="library.html">
        <img src="/images/icons/icon_mobile_nav_library.svg" alt="" />
      </a>
    </div>
  </nav>;
`;

  class NavbarMobile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}
  }
  window.customElements.define("template-navbar-mobile", NavbarMobile);
};
