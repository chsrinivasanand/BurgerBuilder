import React from 'react';
import classes from './Burger.css';
import BugerIngredient from './BurgerIngrediants/BurgerIngredient';

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BugerIngredient type="bread-top" />
            <BugerIngredient type="cheese" />
            <BugerIngredient type="meat" />
            <BugerIngredient type="bread-bottom" />
        </div>

    );

};

export default burger;