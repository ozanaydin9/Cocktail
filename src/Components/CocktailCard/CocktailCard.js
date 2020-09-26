import React from "react";
import styles from './CocktailCard.module.css';
import {Link} from "react-router-dom";
import imgNotFound from "../../Assets/Images/imgnotfound.png";

const CocktailCard = ({strDrink, idDrink,strCategory, strAlcoholic, strDrinkThumb}) => {

    return(
        <div className={styles.cocktailcard} title={strDrink}>
            <Link to={{pathname:`/cocktaildetail/${idDrink}`, state:{ id:idDrink }}} >
                <div className={styles.cardImageArea}>
                    <img alt={"cocktail"} className={styles.cardImage} src={strDrinkThumb==="N/A" ? imgNotFound : strDrinkThumb}/>
                </div>
                <div className={styles.cardDetailArea}>
                    <p className={styles.cardimdb}> {strCategory} </p>
                    <p className={styles.carddate}> {strAlcoholic} </p>
                    <p className={styles.cardgotodetail}> Click to see details! </p>
                </div>
                <div className={styles.cardname}>{strDrink}</div>
            </Link>
        </div>
    )
};

export default CocktailCard;