document.querySelector('.products-box').innerHTML = ''; // Clear the container first

products.forEach((product, index) => {
  const html = `
  <div class="js-products">
    <div class="product-item">
      <img src="${product.image}" alt="${product.image}">
      <div class="product-info">
        <div class="product-name">
          <p id="product-name">${product.name}</p>
          <p id="description">${product.desc}</p>
        </div>
        <div class="price-cart">
          <p id="price">$${(product.priceCents / 100).toFixed(2)} </p>
          <button onclick="addCart(${index})">+</button>
        </div>
      </div>
    </div>
  </div>
  `;
  document.querySelector('.products-box').innerHTML += html;
});
