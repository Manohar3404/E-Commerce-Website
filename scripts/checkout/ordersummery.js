import { products} from "../../data/products.js";
import { cart,remove1,updateOptions,} from "../../data/cart.js";
import { moneyformat } from '../utils/money.js';
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {deliveryOptions} from "../../data/deliveryOptions.js";
import { renderpaymentsummary } from "./payment.js";
console.log('check',cart);
export function renderordersummery(){
let checkouthtml='';
// console.log(dayjs());
// console.log(cart);
cart.forEach((cartitem)=>{
    let matchingproduct;
    products.forEach((product)=>{
        if (product.id===cartitem.id)
            matchingproduct=product;
    });
    // console.log('check',matchingproduct);
    const deliveryoption_Id =cartitem.deliveryOptionId;
    let obj;
    deliveryOptions.forEach((option)=>{
        if (option.id===deliveryoption_Id)
        obj=option;

    }
    );
    const today=dayjs();
    const deliverydate=today.add(obj.deliverydays,'days');
    const datestring=deliverydate.format('dddd, MMMM D');
    const price=obj.priceCents===0?'Free':moneyformat(obj.priceCents);
    

    checkouthtml+=
        `    
    <div class="cart-item-container-${matchingproduct.id}">
        <div class="delivery-date">
        Delivery date: ${datestring}
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${matchingproduct.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${matchingproduct.name}
            </div>
            <div class="product-price">
            $${moneyformat(matchingproduct.priceCents)}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label">${cartitem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
                Update
            </span>
            <span class="delete-quantity-link link-primary" data-product-id="${matchingproduct.id}">
                Delete
            </span>
            </div>
        </div>
        <div class="delivery-options" >
        <div class="delivery-options-title">
        Choose a delivery option
        </div>
        ${setdeliveryoption(matchingproduct,cartitem)}

            
        </div>
        </div>
        </div>
        </div>
        `;
       
    // console.log('ddd',checkouthtml);
});
console.log('delivery',cart);
function setdeliveryoption(matchingproduct,cartitem){
    let deliveryHTML='';
    
    
    deliveryOptions.forEach((delivery)=>{
        const today=dayjs();
        const deliverydate=today.add(delivery.deliverydays,'days');
        const datestring=deliverydate.format('dddd, MMMM D');
        const price=delivery.priceCents===0?'Free':moneyformat(delivery.priceCents);
        
        deliveryHTML+=`   
        <div class="delivery-option js-delivery-option" data-product-id=${matchingproduct.id} data-delivery-id=${delivery.id}>

        <input type="radio" ${cartitem.deliveryOptionId===delivery.id?'checked':''}
        class="delivery-option-input"
        name="delivery-option-${matchingproduct.id}">
        <div>
        <div class="delivery-option-date">
        ${datestring}
        </div>
        <div class="delivery-option-price">
        ${price}-Shipping
        </div>
        </div>
        </div>
    `
    });
    // console.log(deliveryHTML);
    return deliveryHTML;
};

document.querySelector('.order-summary').innerHTML=checkouthtml;
document.querySelectorAll('.delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        remove1(productId);
        document.querySelector(`.cart-item-container-${productId}`).remove();
        renderpaymentsummary();
    });
});
document.querySelectorAll('.js-delivery-option')
.forEach((element)=>{
    element.addEventListener('click',()=>{
        const {productId,deliveryId}=element.dataset;
        updateOptions(productId,deliveryId);
        renderordersummery();
        renderpaymentsummary();
    });

});
}
renderordersummery();