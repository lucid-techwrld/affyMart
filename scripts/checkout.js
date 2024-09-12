import { cart, removeCartItem, updateDeliveryDateOption} from '../Data/cart.js';
import products from '../Data/productsData.js';
import formatMoney from '../Data/utils/formatMoney.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import deliveryOptions from '../Data/deliveryDate.js';


function renderOderSummary() {

let cartSummaryHtml = '';

cart.forEach((item) => {
  const productId = item.productId;

  let matchingProduct = products.find((matchingItem) => matchingItem.id === productId);

  if (matchingProduct) {
    const deliveryOptionId = item.deliveryOptionId;
    
    let deliveryOption = deliveryOptions.find((option) => option.id === deliveryOptionId);
    
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const formattedDate = deliveryDate.format('dddd, MMMM D');
    
    cartSummaryHtml += `
      <div class="order-container js-order-container-${matchingProduct.id}">
        <p class="delivery-date">Delivery Date: ${formattedDate}</p>
        <div class="order-products">
          <div class="product-image">
            <img src="${matchingProduct.image}" alt="basket-ball">
          </div>
          <div class="product-details">
            <div class="details">
              <p>${matchingProduct.name}</p>
              <p>Price: $${formatMoney(matchingProduct.priceCents)}</p>
              <p>Quantity: <span class="quantity-label">${item.quantity}</span></p>
            </div>
            <div class="update-item">
              <button>Update</button>
              <button class="js-delete-btn" data-product-id="${matchingProduct.id}">Delete</button>
            </div>
          </div>
        </div>

        <div class="delivery-date-option">
          <p class="opt">Choose a delivery option</p>
          ${deliveryDateOptionHTML(matchingProduct, item)}

        </div>
      </div>
    `;
  } else {
    console.error(`Product with id ${productId} not found in products array`);
  }
});


function deliveryDateOptionHTML(matchingProduct, item) {
  
  let html = '';
  
  deliveryOptions.forEach((deliveryOpt) => {

  const today = dayjs();
  const deliveryDate = today.add(deliveryOpt.deliveryDays, 'days');
  const formattedDate = deliveryDate.format('dddd, MMMM D');
  
  
  const priceString = deliveryOpt.deliveryPrice === 0
  ? 'FREE'
  : `$${formatMoney(deliveryOpt.deliveryPrice)} - `;
  
  const isChecked = deliveryOpt.id === item.deliveryOptionId;
  
    html += `
     <div class="delivery-date-container js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOpt.id}">
            <input type="radio" name="date${matchingProduct.id}" ${isChecked ? 'checked' : ''}>
            <div class="delivery-options">
              <p class="date">${formattedDate}</p>
              <p>${priceString} SHIPPING</p>
            </div>
          </div>
   `
  });
  return html;
}



document.querySelector('.js-order-review').innerHTML = cartSummaryHtml;

document.querySelectorAll('.js-delete-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;
    removeCartItem(productId);
    const orderContainer = document.querySelector(`.js-order-container-${productId}`);
    if (orderContainer) {
      orderContainer.remove();
    }
  });
});


document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener('click', ()=> {
    const {productId, deliveryOptionId} = element.dataset;
    updateDeliveryDateOption(productId, deliveryOptionId);
    renderOderSummary();
  });
});
}

renderOderSummary();