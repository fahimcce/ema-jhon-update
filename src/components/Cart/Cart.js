import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        const price = product.price;
        total = total + price;
        shipping += product.shipping;
    }
    let tax = (total * 7) / 100;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {cart.length}</p>
            <p>Total price : ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand-Total : ${(total + shipping + tax).toFixed(2)}</h6>
        </div>
    );
};

export default Cart;