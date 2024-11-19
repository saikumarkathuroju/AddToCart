import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    return (
        <div>
            <h1>Add to Cart Screen</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
        </div>
    );
}

export default App;
