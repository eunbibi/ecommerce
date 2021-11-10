import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import classes from '*.module.css';

const Product = () => {
    return (
        <div>
            {/* adding classes */}
            <Card className={classes.root}>
                                                                    {/* this product.name is child component for Products.jsx */}
                <CardMedia className={classes.media} image='' title={product.name}/>
                <CardContent>
                    <div className={classes.CardContent}>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
