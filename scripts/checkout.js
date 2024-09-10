import cart from '../Data/cart.js'
import products from '../Data/productsData.js'

let cartSummaryHtml = '';

cart.forEach((item) => {
  const productId = item.producdId;
  
  let matchingProduct; 
  
  products.forEach((matchingItem) => {
    if (matchingItem.id === productId) {
      matchingProduct = matchingItem
    } 
  });
  
  cartSummaryHtml += `
      <p class="delivery-date">9th September 2024</p>
      <div class="order-products">
        <div class="product-image">
          <img src="${matchingProduct.image}" alt="basket-ball">
        </div>
        <div class="product-details">
          <div class="details">
            <p>${matchingProduct.name} </p>
            <p>Price: ${(matchingProduct.priceCents / 100).toFixed(2)}</p>
            <p>Quantity: <span class="quantity-label">${item.quantity}</span></p>
          </div>
          <div class="update-item">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
      
      <div class="delivery-date-option">
        <p class="opt">Choose a delivery option</p>
        <div class="delivery-date-container">
          <input type="radio" name="date1">
          <div class="delivery-options">
            <p class="date">Tuesday, 10 September</p>
            <p>$5.99</p>
          </div>
        </div>
      
       <div class="delivery-date-container">
           <input type="radio" name="date1">
           <div class="delivery-options">
             <p class="date">Friday, 13 September</p>
             <p>$3.76</p>
           </div>
        </div>
        
        <div class="delivery-date-container">
          <input type="radio" name="date1">
          <div class="delivery-options">
            <p class="date">Monday, 16 September</p>
            <p>FREE Shipping</p>
          </div>
        </div>
  `;
});

document.querySelector('.js-order-review').innerHTML = cartSummaryHtml;
