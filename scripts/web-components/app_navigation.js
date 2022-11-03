import { mobileBreakpoint } from "../helpers.js";

export const navigation = () => {
  const template = document.createElement("template");

  let style =
    /* CSS */
    `
    <style>

    .hidden {
      display: none
    }

    a {
      color: var(--default-black);
      cursor: pointer;
      text-decoration: none;
    }

    header {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: var(--default-white);
      z-index: 2000;
    }
    
    .navbar-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.5%;
      width: 100%;
      max-width: 1200px;
      z-index: 1000;
    }

    .navbar-left, .navbar-right {
      position: relative;
      top: clamp(1px, 1.5vw, 34px);
    }
    
    .navbar-left img {
      height: clamp(15px, 2.5vw, 50px);
      cursor: pointer;
    }

    .header-logo {
      width: 18vw;
      max-width: 350px;
    }
    
    .user-icon {
      height: clamp(15px, 4vw, 80px);
    }
    
    .navbar-left-bottom {
      position: absolute;
      left: 0;
      margin-left: 1%;
    }
    
    .navbar-left-bottom img {
      height: clamp(8px, 2vw, 50px);
      cursor: pointer;
    }
    
    .navbar-right-bottom img {
      position: absolute;
      top: 0;
      right: 0;
      height: clamp(8px, 4vw, 50px);
      margin-right: 0.5%;
    }
    
    .navbar-bottom {
      position: sticky;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      height: clamp(16px, 4vw, 50px);
      width: 100%;
      background-color: var(--default-white);
      box-shadow: var(--default-box-shadow-down);
      z-index: 2000;
    }
    
    .sticky {
      position: fixed;
      top: 0;
    }
    
    .sticky-padding {
      padding-top: 3vw;
    }
    
    .pages {
      display: flex;
      justify-content: space-between;
      width: 60vw;
      max-width: 1180px;
      font-size: var(--font-medium);
      font-weight: 300;
    }
    
    .active {
      font-weight: bold;
      text-decoration: underline;
    }

    .mobile {
      display: none;
    }

    @media (max-width: ${mobileBreakpoint}) {
      .desktop {
        display: none;
      }

      .mobile {
        display: unset;
      }

      .mobile-header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        left: 0;
        right: 0;
        top: 0;
        padding-inline: 15px;
        height: var(--navbar-mobile-height);
        background-color: var(--default-white, white);
        z-index: 2000;
      }
    
      .mobile-logo img {
        padding-top: 12px;
        height: var(--navbar-mobile-height);
      }
    
      .mobile-navbar {
        position: fixed;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        bottom: 0;
        width: 100%;
        height: 120px;
        z-index: 2000;
      }
    
      .mobile-nav-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 100%;
        background-color: var(--default-dark-grey, #121212);
      }
    
      .mobile-searchbar {
        position: absolute;
        width: 10%;
        height: var(--navbar-mobile-height);
        top: 0;
        right: 0;
        padding: 1em;
        outline: 0;
        opacity: 0;
        background-color: var(--default-black);
        color: var(--default-white);
        cursor: pointer;
        z-index: 3000;
        transition: width 200ms;
      }
    
      .mobile-searchbar:focus {
        width: 100%;
        opacity: 1;
        cursor: auto;
      }
    }
    </style>
    `;

  template.innerHTML =
    /* HTML */
    `
      ${style}
      <header class="desktop">
        <div class="navbar-top">
          <div class="navbar-left">
            <img
              class="hamburger-menu"
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
              alt="Square Eyes logo"
              width="18vw"
              height="120vw"
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
            <img src="images/icons/icon_menu_user.svg" alt="user menu" />
          </div>
        </div>
      </header>

      <div class="mobile">
        <div class="mobile-header">
          <div class="hamburger-menu">
            <img
              src="/images/icons/icon_menu_hamburger.svg"
              alt="hamburger menu"
            />
          </div>
          <div class="mobile-logo">
            <img
              src="/images/logo/SquareEyes_logo_glasses.webp"
              alt="Square Eyes logo in the version of a pair of glasses"
            />
          </div>
          <div class="mobile-search">
            <img
              src="/images/icons/icon_menu_search.svg"
              alt="magnifying glass search icon"
            />
          </div>
          <input type="search" class="mobile-searchbar" />
        </div>
        <nav class="mobile-navbar">
          <div class="mobile-nav-icon pages">
            <a href="index.html" class="films">
              <img
                src="/images/icons/icon_mobile_nav_films-active.svg"
                alt="flims navigation"
              />
            </a>
          </div>
          <div class="mobile-nav-icon pages">
            <a href="browse.html" class="browse">
              <img
                src="/images/icons/icon_mobile_nav_browse.svg"
                alt="browse navigation"
              />
            </a>
          </div>
          <div class="mobile-nav-icon pages">
            <a href="collections.html" class="collections">
              <img
                src="/images/icons/icon_mobile_nav_collection.svg"
                alt="collections navigation"
              />
            </a>
          </div>
          <div class="mobile-nav-icon pages">
            <a href="library.html" class="library">
              <img
                src="/images/icons/icon_mobile_nav_library.svg"
                alt="library navigation"
              />
            </a>
          </div>
        </nav>
      </div>
    `;

  class Navigation extends HTMLElement {
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

  window.customElements.define("template-navigation", Navigation);
};
