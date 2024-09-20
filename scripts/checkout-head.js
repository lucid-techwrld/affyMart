import cart from '../Data/cart-class.js';
export function renderCheckoutHead() {
  let cartCount = 0;
  let html = '';
  cart.cartItem.forEach((cartItem) => {
  cartCount += cartItem.quantity;
      html = `
    <span class="affy-mart-logo">
    <a href="homepage.html" class="back-to-home">
    AffyMart
    </a>
    </span>
    <span class="checkout">Checkout (<b>${cartCount}</b> items)</span>
  `;
    });
    document.querySelector('.js-checkout-head').innerHTML = html;
  }