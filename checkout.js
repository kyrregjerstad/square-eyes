import { movies } from "./database.js";

let movieCode = sessionStorage.getItem("movieCode");

const checkoutContainer = document.querySelector(".checkout-container");

checkoutContainer.innerHTML = `
  <div class="left-checkout">
    <img src="${movies[movieCode].cover}" alt="" />
  </div>
  <div class="right-checkout">
    <div class="checkout-top">
      <h1>${movies[movieCode].title}</h1>
      <h2>${movies[movieCode].year}</h2>
      <div class="quality">
        <img
          class="quality-selector-button"
          id="HD-on"
          src="/images/icons/icon_quality_hd-on.svg"
          alt=""
        />
        <img
          class="quality-selector-button none"
          id="HD-off"
          src="/images/icons/icon_quality_hd-off.svg"
          alt=""
        />
        <img
          class="quality-selector-button"
          id="4K-off"
          src="/images/icons/icon_quality_4k-off.svg"
          alt=""
        />
        <img
          class="quality-selector-button none"
          id="4K-on"
          src="/images/icons/icon_quality_4k-on.svg"
          alt=""
        />
      </div>
    </div>
    <div class="checkout-middle">
      <p class="checkout-description">
        ${movies[movieCode].description}
      </p>
    </div>
    <div class="checkout-bottom">
    <a href="#">Manage Payments</a>
    <p>Default payment method: PayPal</p>
    <p>Total: $3.99</p>
    <button class="buy-now">Buy and Watch Now</button>
  </div>
    `;
