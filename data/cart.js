console.log('sjbcdsb');
export let cart=JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart=[];
}


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
                 quantity: 1
             });
         }
         console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart));
 
 }
export function remove1(removeId) {
     cart.forEach((item,idx)=>{
        if (removeId===item.id) {
            cart.splice(idx,1);
        }
     });
     localStorage.setItem('cart',JSON.stringify(cart));
     
 

}