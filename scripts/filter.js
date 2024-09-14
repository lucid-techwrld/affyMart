import { products } from '../Data/productsData.js';
import formatMoney from '../Data/utils/formatMoney.js';

let rangeInput = 0;
const range = document.querySelector('.priceRange');

// Display the selected range value
range.addEventListener('input', () => {
  rangeInput = formatMoney(range.value);
  document.querySelector('.js-range-value').innerHTML = rangeInput;
});

// Export the filterButton function and pass a render function
export function filterButton(renderProductHTML) {
  const filterBtn = document.querySelector('.js-filter-btn');

  filterBtn.addEventListener('click', () => {
    let newPrice = products.filter((product) => {
      return product.priceCents <= rangeInput * 100;
    });

    // Render filtered products
    renderProductHTML(newPrice);
  });
}
