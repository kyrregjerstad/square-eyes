export const headerTemplate = () => {
  const template = document.createElement("template");
  template.innerHTML = `
  <link rel="stylesheet" href="style.css" />
  <header>
    <div class="navbar-top">
        <div class="left">
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
            alt=""
          />
        </div>
        <div class="right">
          <img
            class="user-icon"
            src="images/icons/icon_menu_user.svg"
            alt="user menu"
          />
        </div>
    </div>
    <div class="navbar-bottom">
      <nav class="pages">
        <a href="/index.html" class="films">FILMS</a>
        <a href="/browse.html" class="browse">BROWSE</a>
        <a href="/collections.html" class="collections">COLLECTIONS</a>
        <a href="/library.html" class="home">LIBRARY</a>
      </nav>
    </div>
  </header>`;

  class Header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const navbar = this.shadowRoot.querySelectorAll(".pages a");
      navbar.forEach((item) => {
        item.addEventListener("click", (event) => {
          navbar.forEach((item) => {
            item.classList.remove("active");
          });
          event.currentTarget.classList.add("active");
        });
      });
    }
  }

  window.customElements.define("template-header", Header);
};
