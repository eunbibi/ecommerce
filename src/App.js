import React, {useState, useEffect} from 'react'

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

//fetching
import {commerce} from './lib/commerce';

//simpler way to put many components
import {Products, Navbar} from './components';
import { set } from 'react-hook-form';

const App = () => {
    //state
    const [products, setProducts] = useState([]);

    //cart adding
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        // this is gonna return a promise
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    //another function
    const fetchCart = async () => {
        //const cart = await commerce.cart.retrieve();
        //setCart(cart)
        // shorter version
                    //using API
        setCart(await commerce.cart.retrieve())
    }

    //add products in the cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
        }

    //calling products
    //useEffect hook
    useEffect(() => {
        //call commerce.products.list(); AND setProducts to state
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App;


//1:01:22