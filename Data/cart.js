export let cart;
loadLocalStorage()
function loadLocalStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    },
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '2'
    }
  ];
}
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {

    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  }
  else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '2'
    });
  }
  saveToStorage();
}

export function removeCartItem(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  saveToStorage();
}

export function updateDeliveryDateOption(productId, deliveryOptionId) {
  let matchingItem = cart.find((item) => productId === item.productId);

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}