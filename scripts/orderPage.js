import { getProduct } from '../Data/productsData.js';
import {formatMoney} from '../Data/utils/formatMoney.js';

const productId = localStorage.getItem('selectedProductView');
const viewedProduct = getProduct(productId)

function generateViewProduct(viewedProduct) {
  const html =
    `
    <div class="product-image">
      <img id="image1" src="${viewedProduct.image}" alt="socks">
    </div>
    <div class="product-description">
      <div class="name-price">
        <span><b>Name:</b> ${viewedProduct.name}s</span>
        <span>$${formatMoney(viewedProduct.priceCents)}</span>
      </div>
      <div class="decription">
        <p>Lores ispum jsihsvs sihshs usbhsh richies font  exit attic do is sixth of Eri if Rdm is dis iBooks so osmosis of font is we ok Dow wig do it Rock is wick ooo wish POS ask okay ok if do of still lap if owl
        </p>
      </div>
      
      <div class="product-color">
        <p>Colors:</p>
        <div class="colors">
          <div class="white">
          </div>
          <div class="black">
          </div>
          <div class="red">
          </div>
          <div class="yellow">
          </div>
        </div>
      </div>
    </div>
    <div class="cart-section">
      <button class="buy-now">Buy Now</button>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;

  document.querySelector('.order-product-container').innerHTML = html;
}

generateViewProduct(viewedProduct);