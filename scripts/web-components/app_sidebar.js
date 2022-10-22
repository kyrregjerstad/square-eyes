export const templateSidebar = () => {
  const template = document.createElement("template");

  template.innerHTML = `
  <link rel="stylesheet" href="style.css" />

  <div class="background-blur hidden"></div>

  <section class="sidebar hidden">
    <img 
      class="close-button-arrow"
      src="/images/icons/icon_menu_arrow-back.svg"
      alt=""
    />
    <ul>
      <li><a href="#">Setting</a></li>
      <li><a href="/contact.html">Contact</a></li>
      <li><a href="/about.html">About</a></li>
    </ul>
    <div class="sidebar-logo">
      <img src="/images/logo/SquareEyes_Logo.webp" alt="" />
    </div>
  </section>`;

  class Sidebar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const backgroundBlur = document.querySelector(".background-blur");
      const sideBar = document.querySelector(".sidebar");
      const closeButton = document.querySelector(".close-button-arrow");

      closeButton?.addEventListener("click", () => {
        sideBar.classList.toggle("hidden");
        backgroundBlur.classList.toggle("hidden");
      });

      backgroundBlur?.addEventListener("click", () => {
        sideBar.classList.toggle("hidden");
        backgroundBlur.classList.toggle("hidden");
      });
    }
  }

  window.customElements.define("template-sidebar", Sidebar);
};
