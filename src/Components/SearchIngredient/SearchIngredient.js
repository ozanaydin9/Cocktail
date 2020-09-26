import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCocktailsAreLoading,
    selectIngredientsTitle,
    selectIngredients
} from "../../Redux/Accessors/Accessors";
import {getIngredients, getIngredientsTitle, getTitle} from "../../Redux/Actions/Actions";
import styles from './SearchIngredient.module.css';
import IngredientCard from "../IngredientCard/IngredientCard";

const SearchIngredient = () => {

    const dispatch = useDispatch();
    const ingredients = useSelector(selectIngredients);
    const isLoading = useSelector(selectCocktailsAreLoading);
    const ingredientsTitle = useSelector(selectIngredientsTitle);


    function handleGetIngredients() {
        dispatch(getIngredients(ingredientsTitle))
    }

    function onEnterPress (e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleGetIngredients();
        }
    }

    return (
        <div>
            <div>
                <div className={styles.searchArea}>
                    <textarea placeholder={"Ingredient"} value={ingredientsTitle} className={styles.textarea} onKeyDown={onEnterPress} onChange={(e) => {dispatch(getIngredientsTitle(e.target.value))}}></textarea>
                    <button disabled={ingredientsTitle == "" ? true : false} onClick={handleGetIngredients} className={styles.button}>Search</button>
                </div>

                {isLoading ? (<div style={{color:"white"}}>
                        <div className={styles.loading}>Loading...</div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                    </div>) :
                    Array.isArray(ingredients) ?
                        ingredients.map((t) => (
                            <IngredientCard key={t.idDrink} {...t} />
                        ))
                        : <div style={{color:"white"}}>error!</div>
                }
            </div>
        </div>

    )
};

export default SearchIngredient;