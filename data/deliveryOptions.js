export const deliveryOptions =[
    {
        id:'1',
        deliverydays:7,
        priceCents:0
    },
    {
        id:'2',
        deliverydays:3,
        priceCents:499
    },
    {
        id:'3',
        deliverydays:1,
        priceCents:999
    }
];
export function getDeliveryOption(deliveryOptionId){
    let matchingobj;
    deliveryOptions.forEach((delivery)=>{
        console.log(deliveryOptionId,delivery.id);
        if (deliveryOptionId===delivery.id)
        matchingobj=delivery;
    });
    console.log(matchingobj);
    return matchingobj;
}