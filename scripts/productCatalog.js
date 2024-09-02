let products = [];
function displayProducts() {
  const displayHTML = products.map((product, index) => {
  return `
    <div class="products-box">
      <div class="product">
      <img src="images/${product.image}.jpeg" alt="product-high1">
      <div class="product-info">
        <div class="product-name">
          <p id="product-name">${product.name} </p>
          <p id="description">${product.desc}</p>
        </div>
        <div class="price-cart">
          <p id="price">$${product.price}</p>
          <button onclick="delButton(${index})">Delete</button>
        </div>
      </div>
    </div>
  `}).join('');
  const display = document.querySelector('.displayProducts').innerHTML = displayHTML
}

function addProduct() {
  const productName = document.querySelector('.productNameInput').value.trim();
  const productDesc = document.querySelector('.productDescription').value.trim();
  const productImage = document.querySelector('.productImage');
  const price = document.querySelector('.productPrice').value;
  if (productName && productDesc && price) {
    products.push({name: productName, desc: productDesc, image: productImage, price: price});
    console.table(products);
    displayProducts();
    }
  else {
    console.log('Pls Enter a valid Product Details');
  }
}

function delButton(index) {
  products.splice(index, 1);
  displayProducts();
}

function clearInput() {
  const name = 
}