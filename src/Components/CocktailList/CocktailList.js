import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCocktails, selectCocktailsAreLoading, selectTotalResults, selectErrorMessage, selectPage, selectTitle} from "../../Redux/Accessors/Accessors";
import {getCocktail, getPage, getTitle} from "../../Redux/Actions/Actions";
import styles from './CocktailList.module.css';
import {Selectbox} from "../Selectbox/Selectbox";
import CocktailCard from "../CocktailCard/CocktailCard";

const CocktailList = () => {

    const dispatch = useDispatch();
    const cocktails = useSelector(selectCocktails);
    const isLoading = useSelector(selectCocktailsAreLoading);
    const errorMessage = useSelector(selectErrorMessage);
    const titleCocktail = useSelector(selectTitle);


    useEffect(() => {
        dispatch(getCocktail(titleCocktail))
    }, []);

    function handleGetCocktail() {
        dispatch(getCocktail(titleCocktail))

    }

    function onEnterPress (e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleGetCocktail();
        }
    }

    return (
        <div>
            <div>
                <div className={styles.searchArea}>
                    <textarea placeholder={"Cocktail"} value={titleCocktail} className={styles.textarea} onKeyDown={onEnterPress} onChange={(e) => {dispatch(getTitle(e.target.value))}}></textarea>
                    <button onClick={handleGetCocktail} className={styles.button}>Search</button>
                </div>

                {isLoading ? (<div style={{color:"white"}}>
                        <div className={styles.loading}>Loading...</div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                    </div>) :
                        Array.isArray(cocktails) ?
                            cocktails.map((t) => (
                                <CocktailCard key={t.idDrink} {...t} />
                            ))
                            : <div style={{color:"white"}}>error!</div>
                }
            </div>
        </div>

    )
};

export default CocktailList;