import cart from '../Data/cart-class.js';
import { products } from '../Data/productsData.js';
import formatMoney from '../Data/utils/formatMoney.js';
import { filterButton } from './filter.js';

// Function to render products HTML
function renderProductHTML(productsToRender) {
  document.querySelector('.products-box').innerHTML = ''; // Clear the container first

  productsToRender.forEach((product) => {
    const html = `
    <div class="js-products">
      <div class="product-item">
      <a href="order.html" data-order-product="${product.id}" class= "view-order">
        <img src="${product.image}" alt="${product.image}">
        </a>
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
    document.querySelector('.products-box').innerHTML += html;
  });

  // Reapply event listeners after rendering
  applyCartButtonListeners();
}

// Function to apply cart button event listeners
function applyCartButtonListeners() {
  document.querySelectorAll('.add-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      cart.addCart(productId);
      updateCartQuantity();
    });
  });
}

// Function to update cart quantity
function updateCartQuantity() {
  let cartQuantity = 0;
  cart.cartItem.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const cartCount = document.querySelector('.js-cart-quantity');
  cartCount.textContent = cartQuantity;
}

function viewOrder() {
  document.querySelectorAll('.view-order').forEach((element) => {
    element.addEventListener('click', () => {
      const productView = element.dataset.orderProduct;
      // Save productView to localStorage
      localStorage.setItem('selectedProductView', productView);
    });
  });
}


// Initial rendering of all products
renderProductHTML(products);

// Initialize the filter button
filterButton(renderProductHTML); // Pass the render function to filter.js
viewOrder();