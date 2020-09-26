import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCocktailsAreLoading,
    selectRandomCocktail
} from "../../Redux/Accessors/Accessors";
import {
    getCocktailDetail,
    getIngredients,
    getIngredientsTitle,
    getRandomCocktail,
    getTitle
} from "../../Redux/Actions/Actions";
import styles from './RandomCocktail.module.css';
import CocktailCard from "../CocktailCard/CocktailCard";

const RandomCocktail = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectCocktailsAreLoading);
    const random = useSelector(selectRandomCocktail);

    function handleGetRandom() {
        dispatch(getRandomCocktail())

    }
    useEffect(() => {
        dispatch(getRandomCocktail())
    }, []);

    function onEnterPress (e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleGetRandom();
        }
    }

    return (
        <div>
            <div>
                <div className={styles.searchArea}>
                    <button onClick={handleGetRandom} className={styles.button}>Give Another</button>
                </div>

                {isLoading ? (<div style={{color:"white"}}>
                        <div className={styles.loading}>Loading...</div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                    </div>) :
                         <CocktailCard {...random} />
                }
            </div>
        </div>

    )
};

export default RandomCocktail;