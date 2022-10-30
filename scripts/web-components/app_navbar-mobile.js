export const navbarMobile = () => {
  const template = document.createElement("template");

  template.innerHTML = `
  <link rel="stylesheet" href="style.css" />
  <div class="mobile-header">
    <div class="hamburger-menu">
      <img src="/images/icons/icon_menu_hamburger.svg" alt="hamburger menu" />
    </div>
    <div class="mobile-logo">
      <img src="/images/logo/SquareEyes_logo_glasses.webp" alt="Square Eyes logo in the version of a pair of glasses" />
    </div>
    <div class="mobile-search">
      <img src="/images/icons/icon_menu_search.svg" alt="magnifying glass search icon" />
    </div>
    <input type="search" class="mobile-searchbar" />
  </div>
  <nav class="mobile-navbar pages">
    <div class="mobile-nav-icon">
      <a href="index.html">
        <img src="/images/icons/icon_mobile_nav_films-active.svg" alt="flims navigation" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="browse.html">
        <img src="/images/icons/icon_mobile_nav_browse.svg" alt="browse navigation" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="collections.html">
        <img src="/images/icons/icon_mobile_nav_collection.svg" alt="collections navigation" />
      </a>
    </div>
    <div class="mobile-nav-icon">
      <a href="library.html">
        <img src="/images/icons/icon_mobile_nav_library.svg" alt="library navigation" />
      </a>
    </div>
  </nav>
`;

  class NavbarMobile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const navbarPages = this.shadowRoot.querySelectorAll(".pages a");
      const page = this.getAttribute("id");

      navbarPages.forEach((item) => {
        const isActivePage = item.classList.contains(page);

        if (isActivePage) {
          item.classList.add("active");
        }
      });

      const shadowSidebar = document.querySelector(".shadow-sidebar");
      const hamburgerMenu = this.shadowRoot.querySelector(".hamburger-menu");
      const sidebar = shadowSidebar.shadowRoot.querySelector(".sidebar");
      const backgroundBlur =
        shadowSidebar.shadowRoot.querySelector(".background-blur");

      hamburgerMenu?.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        backgroundBlur.classList.toggle("hidden");
      });

      // closeButton?.addEventListener("click", () => {
      //   sidebar.classList.toggle("hidden");
      // });
    }
  }
  window.customElements.define("template-navbar-mobile", NavbarMobile);
};
