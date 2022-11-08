import { sidebarHTML } from "../HTML-CSS_templates.js";
export const templateSidebar = () => {
  const template = document.createElement("template");

  template.innerHTML = sidebarHTML;

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
