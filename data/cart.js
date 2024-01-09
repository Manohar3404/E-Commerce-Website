console.log('sjbcdsb');
export const cart=[];
export function Addtocart(productName){
    let matchingItem;
 
         cart.forEach((item) => {
             if (productName === item.name) {
                 matchingItem = item;
             }
         });
 
         if (matchingItem) {
             matchingItem.quantity += 1;
         } else {
             cart.push({
                 name: productName,
                 quantity: 1
             });
         }
 
 }