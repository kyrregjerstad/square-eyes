export const navbarDesktop = () => {
  const template = document.createElement("template");

  template.innerHTML = `<link rel="stylesheet" href="style.css" />
  <header>
    <div class="navbar-top">
        <div class="navbar-left">
          <img
            class="hamburger-menu"
  })
            src="images/icons/icon_menu_hamburger.svg"
            alt="navigation menu"
          />
          <a href="/search.html">
            <img src="images/icons/icon_menu_search.svg" alt="search icon"
          /></a>
        </div>
        <div class="middle">
          <img
            class="header-logo"
            src="/images/logo/SquareEyes_Logo_no_text.webp"
            alt=""
          />
        </div>
        <div class="navbar-right">
          <img
            class="user-icon"
            src="images/icons/icon_menu_user.svg"
            alt="user menu"
          />
        </div>
    </div>
    <div class="navbar-bottom">
    <div class="navbar-left-bottom hidden">
          <img
            class="hamburger-menu"
  })
            src="images/icons/icon_menu_hamburger.svg"
            alt="navigation menu"
          />
          <a href="/search.html">
            <img src="images/icons/icon_menu_search.svg" alt="search icon"
          /></a>
        </div>
      <nav class="pages">
        <a href="/index.html" class="films">FILMS</a>
        <a href="/browse.html" class="browse">BROWSE</a>
        <a href="/collections.html" class="collections">COLLECTIONS</a>
        <a href="/library.html" class="library">LIBRARY</a>
      </nav>
      <div class="navbar-right-bottom hidden">
          <img
            src="images/icons/icon_menu_user.svg"
            alt="user menu"
          />
        </div>
    </div>
  </header>`;

  class NavbarDesktop extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const navbarBottom = this.shadowRoot.querySelector(".navbar-bottom");
      const navbarIconsLeft = this.shadowRoot.querySelector(
        ".navbar-left-bottom"
      );
      const navbarIconsRight = this.shadowRoot.querySelector(
        ".navbar-right-bottom"
      );
      const mainContent = document.querySelector("main");

      const sticky = navbarBottom?.offsetTop * 1.58;

      const stickyNavbar = () => {
        if (window.pageYOffset >= sticky) {
          navbarBottom.classList.add("sticky");
          mainContent.classList.add("sticky-padding");
          navbarIconsLeft.classList.remove("hidden");
          navbarIconsRight.classList.remove("hidden");
        } else {
          navbarBottom.classList.remove("sticky");
          mainContent.classList.remove("sticky-padding");
          navbarIconsLeft.classList.add("hidden");
          navbarIconsRight.classList.add("hidden");
        }
      };

      window.onscroll = () => {
        stickyNavbar();
      };

      const navbarPages = this.shadowRoot.querySelectorAll(".pages a");
      const hamburgerMenu = this.shadowRoot.querySelectorAll(".hamburger-menu");
      const page = this.getAttribute("id");

      navbarPages.forEach((item) => {
        const isActivePage = item.classList.contains(page);

        if (isActivePage) {
          item.classList.add("active");
        }
      });

      const shadowSidebar = document.querySelector(".shadow-sidebar");
      const sidebar = shadowSidebar.shadowRoot.querySelector(".sidebar");
      const backgroundBlur =
        shadowSidebar.shadowRoot.querySelector(".background-blur");

      const closeButton = shadowSidebar.shadowRoot.querySelector(
        ".close-button-arrow"
      );

      hamburgerMenu?.forEach((item) => {
        item.addEventListener("click", () => {
          sidebar.classList.toggle("hidden");
          backgroundBlur.classList.toggle("hidden");
        });
      });

      closeButton?.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        backgroundBlur.classList.toggle("hidden");
      });

      backgroundBlur?.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        backgroundBlur.classList.toggle("hidden");
      });
    }
  }

  window.customElements.define("template-navbar-desktop", NavbarDesktop);
};

export const navbarMobile = () => {
  const template = document.createElement("template");

  template.innerHTML = `
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
