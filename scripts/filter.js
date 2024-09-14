import { products } from '../Data/productsData.js';
import formatMoney from '../Data/utils/formatMoney.js';
//import {renderProductHTML} from './products.js';


let rangeInput = 0;
const range = document.querySelector('.priceRange');
range.addEventListener('input', () => {
  rangeInput = formatMoney(range.value);
  document.querySelector('.js-range-value').innerHTML = rangeInput;
});

export function filterButton() {
  const filterBtn = document.querySelector('.js-filter-btn');
  filterBtn.addEventListener('click', () => {
        let newPrice = products
          .filter((price) => {
            return price.priceCents <= rangeInput * 100;
          });

        newPrice.forEach((product, index) => {
          let newProductsHTML = `
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

          /console.log(newProductsHTML);
        });
      });
}