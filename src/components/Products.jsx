import React from 'react';
import Grid from '@material-ui/core';

const products =[
    {id:1, name: 'Shoes', description: 'Running shoes'},
    {id:2, name: 'Macbook', description: 'Serise 9'}
];

const Products = ()=> {
    <main>
        <Grid container justify="center" spacing="{4}">
            {products.map((products) => (
                // for rooping in JSX, you need the id
                                            //for devices' sizes
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;