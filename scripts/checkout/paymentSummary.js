import cart from '../../Data/cart-class.js';
import {getProduct} from '../../Data/productsData.js';
import {getDelivery} from '../../Data/deliveryDate.js';
import {formatMoney} from '../../Data/utils/formatMoney.js';


export function renderPaymentSymmary() {
  let totalPrice = 0;
  let deliveryCost = 0;
  let cartCount = 0;
  cart.cartItem.forEach((cartItem) => {
  cartCount += cartItem.quantity;
  
  const product = getProduct(cartItem.productId);
  totalPrice += product.priceCents * cartItem.quantity
  
  const delivery = getDelivery(cartItem.deliveryOptionId);
  deliveryCost += delivery.deliveryPrice
  
  });
  
  const totalBeforeTax = totalPrice + deliveryCost;
  const tax = totalBeforeTax * 0.1;
  const total = tax + totalBeforeTax;
  
  
  const paymenSummaryHTML = 
  `
    <div class="checkout-summary-container">
        <div class="summary-header">
          Order Summary
        </div>
        <div class="items-price summary">
          <span>Items(<span class="js-checkout-quantity">${cartCount}</span>):</span>
          <span>$${formatMoney(totalPrice)}</span>
        </div>
        <div class="shipping-price summary">
          <span>Shipping &amp; Handling: </span>
          <span>$${formatMoney(deliveryCost)}</span>
        </div>
        <div class="before-tax summary">
          <span>Total Before Tax:</span>
          <span>$${formatMoney(totalBeforeTax)}</span>
        </div>
        <div class="tax summary">
          <span>Estimated Tax (%10):</span>
          <span>$${formatMoney(tax)}</span>
        </div>
        <div class="total summary">
          <span>Order Total:</span>
          <span>$${formatMoney(total)}</span>
        </div>

        <button>Place your order</button>
      </div>
  `;
  
  document.querySelector('.js-payment-summary').innerHTML = paymenSummaryHTML;
}
