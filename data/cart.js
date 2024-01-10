console.log('sjbcdsb');
export const cart=[
    {id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1
    },
    {
        id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1
    },
    {
        id:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity:1
    }
];
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
 
 }
export function remove1(removeId) {
     cart.forEach((item,idx)=>{
        if (removeId===item.id) {
            cart.splice(idx,1);
        }
     });
}