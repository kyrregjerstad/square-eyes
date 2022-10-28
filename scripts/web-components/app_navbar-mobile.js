export const navbarMobile = () => {
  const template = document.createElement("template");

  template.innerHTML = `
  <link rel="stylesheet" href="style.css" />
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
