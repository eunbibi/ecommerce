import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from  '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    //call it as a function
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className="{classes.appBar}" color="inherit">
                <Toolbar>
                    <Typography variantt="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                         E - Commerce
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}> </div>
                    <IconButton aria-lable="Show cart Items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary" >
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
