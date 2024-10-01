import {renderPaymentSummary} from './paymentSummary.js';
import {renderCheckoutHead} from '../checkout-head.js';
import {renderOrderSummary} from './orderSummary.js';

renderCheckoutHead();
renderOrderSummary();
/*try {
  renderPaymentSummary();
} catch (error) {
  console.error("Error rendering payment summary:", error);
}*/

renderPaymentSummary();

