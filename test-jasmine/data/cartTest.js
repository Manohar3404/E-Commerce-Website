import {Addtocart,cart,loadcart} from "../../data/cart.js";

describe('test suite: add to cart',()=>{
    it('add existing product',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                id :'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId:'1'

        }]);
        });
        loadcart();
        spyOn(localStorage,'setItem');
        Addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(cart[0].quantity).toEqual(2);
        console.log('1',cart);

    });
    it('add new product to cart',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        console.log('2',cart);
        loadcart();
        spyOn(localStorage,'setItem');
        Addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].quantity).toEqual(1);
    });
});
