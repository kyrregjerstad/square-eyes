import { navbarHTML } from "../HTML-CSS_templates.js";

export const navigation = () => {
  const template = document.createElement("template");

  template.innerHTML = navbarHTML;

  class Navigation extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const navbarBottom = this.shadowRoot.querySelector(".navbar-bottom");
      const mainContent = document.querySelector("main");
      const sticky = navbarBottom?.offsetTop * 1.58;
      const navbarBottomIcons = this.shadowRoot.querySelectorAll(
        ".navbar-bottom-icons"
      );

      const stickyNavbar = () => {
        if (window.pageYOffset >= sticky) {
          navbarBottom.classList.add("sticky");
          mainContent.classList.add("sticky-padding");
          navbarBottomIcons.forEach((icon) => {
            icon.classList.remove("hidden");
          });
        } else {
          navbarBottom.classList.remove("sticky");
          mainContent.classList.remove("sticky-padding");
          navbarBottomIcons.forEach((icon) => {
            icon.classList.add("hidden");
          });
        }
      };

      window.onscroll = () => {
        stickyNavbar();
      };

      const navbarPages = this.shadowRoot.querySelectorAll(".pages a");
      const navbarIcons =
        this.shadowRoot.querySelectorAll(".mobile-navbar img");
      const hamburgerMenu = this.shadowRoot.querySelectorAll(".hamburger-menu");
      const page = this.getAttribute("id");

      navbarPages.forEach((item) => {
        const isActivePage = item.classList.contains(page);

        if (isActivePage) {
          item.classList.add("active");
        }
      });

      navbarIcons.forEach((icon) => {
        const isActivePage = icon.classList.contains(page);
        if (isActivePage) {
          icon.src = `/images/icons/icon_mobile_nav_${page}-active.svg`;
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
