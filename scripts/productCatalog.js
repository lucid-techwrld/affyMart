let products = [];
function displayProducts1() {
  const displayHTML = products.map((product, index) => {
  return `
    <div class="products-box">
      <div class="product">
      <img src="images/${product.image}" alt="${product.image}">
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
  const display = document.querySelector('.displayProducts').innerHTML = displayHTML;
}

function displayProducts2() {
  const displayHTML = products.map((product, index) => {
    return `
    <div class="products-box">
      <div class="product">
      <img src="images/${product.image}" alt="${product.image}">
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
  `
  }).join('');
  const display = document.querySelector('.productBox').innerHTML = displayHTML;
}

function addProduct() {
  const productName = document.querySelector('.productNameInput').value.trim();
  const productDesc = document.querySelector('.productDescription').value.trim();
  const productImageInput = document.querySelector('.productImage');
  const price = document.querySelector('.productPrice').value;

  if (productName && productDesc && price && productImageInput) {
    if (productImageInput.files && productImageInput.files[0]) {
      const productImage = productImageInput.files[0].name;

      products.push({
        name: productName,
        desc: productDesc,
        image: productImage,
        price: price
      });

      console.table(products);
      displayProducts1();
      displayProducts2();
      clearInput();
    } else {
      console.log('Please select an image file.');
    }
  } else {
    console.log('Please enter valid product details.');
  }
}

function clearInput() {
  document.querySelector('.productNameInput').value = '';
  document.querySelector('.productDescription').value = '';
  document.querySelector('.productImage').value = '';
  document.querySelector('.productPrice').value = '';
}


function delButton(index) {
  products.splice(index, 1);
  displayProducts1();
  displayProducts2();
}
