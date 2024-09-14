import {cart, addCart} from '../Data/cart.js';
import {products} from '../Data/productsData.js';
import formatMoney from '../Data/utils/formatMoney.js';
//import {filterButton} from './filter.js'



document.querySelector('.products-box').innerHTML = ''; // Clear the container first
products.forEach((product, index) => {
  const html = `
  <div class="js-products">
    <div class="product-item">
      <img src="${product.image}" alt="${product.image}">
      <div class="product-info">
        <div class="product-name">
          <p id="product-name">${product.name}</p>
          <p class="add-cart-message"></p>
        </div>
        <div class="price-cart">
          <p id="price">$${formatMoney(product.priceCents)} </p>
          <button class= "add-cart-button" data-product-id="${product.id}">+</button>
        </div>
      </div>
    </div>
  </div>
  `;
  //console.log(html);
  document.querySelector('.products-box').innerHTML += html;
});

//document.querySelector('.products-box').innerHTML += html;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const cartCount = document.querySelector('.js-cart-quantity');
  cartCount.textContent = cartQuantity;
}

document.querySelectorAll('.add-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addCart(productId);
    updateCartQuantity();
  });
});


//filterButton();