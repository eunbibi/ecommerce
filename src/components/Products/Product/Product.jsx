import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
// import classes from '*.module.css';
import useStyles from './styles';

const Product = ({product,onAddToCart}) => {
    const classes = useStyles();

    // console.log(product);

    // return <div>test</div>

    return (
        <div>
            {/* adding classes */}
            <Card className={classes.root}>
                                                                    {/* this product.name is child component for Products.jsx */}
                <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html : product.description }} variant="body2" color="textSecondary"/>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product


// youtube: https://www.youtube.com/watch?v=377AQ0y6LPA
// 6:39