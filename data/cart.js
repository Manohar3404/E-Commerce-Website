console.log('sjbcdsb');
export let cart;
 export function loadcart(){
    cart=JSON.parse(localStorage.getItem('cart')) || [
        {
           
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '2'
        },
        {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '1'
        }
    ];
}
loadcart();
console.log('cart.js',cart);


export function Addtocart(productId){
    let matchingItem;
 
         cart.forEach((item) => {
             if (productId === item.id) {
                 matchingItem = item;
             }
         });
 
         if (matchingItem) {
             matchingItem.quantity += 1;
         } else {
             cart.push({
                 id: productId,
                 quantity: 1,
                 deliveryOptionId: '1'
             });
         }
        save();
 
 }
 function save() {
    localStorage.setItem('cart',JSON.stringify(cart));
 }
 
 export function updateOptions(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((ele)=>{
       
        if (ele.id===productId) {
            matchingItem=ele;
        }
       
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    save();
 }
export function remove1(removeId) {
     cart.forEach((item,idx)=>{
        if (removeId===item.id) {
            cart.splice(idx,1);
        }
     });
     save();
 

}