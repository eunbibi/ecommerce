import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

//mock products
// const products =[
//     {id:1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://media.istockphoto.com/photos/pink-shoes-isolated-on-white-background-picture-id1168124796?k=20&m=1168124796&s=612x612&w=0&h=wfDhqA5yOuFuyfoHDikx78UWu_qyFnZWRZcrC58618E='},
//     {id:2, name: 'Macbook', description: 'Serise 9', price: '$59', image: 'https://media.istockphoto.com/photos/laptop-picture-id483912231?k=20&m=483912231&s=612x612&w=0&h=QkKZ4oEy9cd7605DeYnDpKilzrUZUybCoJ9k2cfwUzs='}
// ];

const Products = ({products})=> {
    //call it as a function
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing="{4}">
                {products.map((product) => (
                    // for rooping in JSX, you need the id
                                                //for devices' sizes
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;