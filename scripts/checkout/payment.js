import {cart} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { moneyformat } from "../utils/money.js";

export function renderpaymentsummary() {
    let productPriceCents=0;
    let shippingCost=0;
    cart.forEach((element) => {
        const product=getProduct(element.id);
        productPriceCents+= product.priceCents*element.quantity;
        const deliveryobj=getDeliveryOption(element.deliveryOptionId);
        console.log(deliveryobj);
        shippingCost += deliveryobj.priceCents;

    });
const totalBeforeTax=productPriceCents+shippingCost;
const taxCents=totalBeforeTax*0.1;
const totalCents= totalBeforeTax+taxCents;
const paymentSummary=`
<div class="payment-summary-title">
Order Summary
</div>

<div class="payment-summary-row">
<div>Items (3):</div>
<div class="payment-summary-money">$${moneyformat(productPriceCents)}</div>
</div>

<div class="payment-summary-row">
<div>Shipping &amp; handling:</div>
<div class="payment-summary-money">$${moneyformat(shippingCost)}</div>
</div>

<div class="payment-summary-row subtotal-row">
<div>Total before tax:</div>
<div class="payment-summary-money">$${moneyformat(totalBeforeTax)}</div>
</div>

<div class="payment-summary-row">
<div>Estimated tax (10%):</div>
<div class="payment-summary-money">$${moneyformat(taxCents)}</div>
</div>

<div class="payment-summary-row total-row">
<div>Order total:</div>
<div class="payment-summary-money">$${moneyformat(totalCents)}</div>
</div>

<button class="place-order-button button-primary">
Place your order
</button>
`;
document.querySelector('.js-payment-summary').innerHTML=paymentSummary;
}