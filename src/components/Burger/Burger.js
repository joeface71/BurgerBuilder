import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients) //{'salad', 'bacon', 'cheese', 'meat'}
    .map(igKey => {
      return [...Array(props.ingredients[igKey])] //(4) [Array(1), Array(1), Array(2), Array(2)] -- all elements undefined
      .map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />; //keys assigned eg salad0, bacon0, cheese0, cheese1, etc
      }); 
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    },[]);
  if (transformedIngredients.length === 0) {
     transformedIngredients = <p>Please Add Ingredients</p>
  }
      
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
