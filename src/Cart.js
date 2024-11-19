import React from 'react';
import './App.css';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price}/-
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>
                Total: {cartItems.reduce((total, item) => total + item.price, 0)}/-
            </h3>
        </div>
    );
}

export default Cart;
