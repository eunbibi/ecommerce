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

    const fetchProducts = async () => {
        // this is gonna return a promise
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    //calling products
    //useEffect hook
    useEffect(() => {
        //call commerce.products.list(); AND setProducts to state
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
    )
}

export default App;


//52:40