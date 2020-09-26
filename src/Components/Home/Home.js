import React, {useCallback} from "react";
import styles from './Home.module.css';
import headerLogo from "../../Assets/Images/cocktailbyozanaydin.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCocktailsAreLoading, selectRandomCocktail} from "../../Redux/Accessors/Accessors";
import ingr from "../../Assets/Images/ingr.jpg";
import coct from "../../Assets/Images/coct.jpg";
import random from "../../Assets/Images/random.jpg";
import filter from "../../Assets/Images/filter.jpg";
import {useHistory} from 'react-router-dom';
import {getRandomCocktail} from "../../Redux/Actions/Actions";

const Home = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const handleOnClickFilter = useCallback(() => history.push('/filter'), [history]);
    const handleOnClickSearch = useCallback(() => history.push('/search'), [history]);
    const handleOnClickIngredient = useCallback(() => history.push('/searchingredient'), [history]);

    function handleOnClickRandom() {
        history.push('/random');
    }

    return(
        <div className={`container-fluid ${styles.main}`}>
            <div style={{maxHeight:"100%", paddingTop:44}}>

                    <div onClick={handleOnClickRandom} className={styles.box}>
                        <span className={styles.boxText}>Random Cocktail</span>
                        <img alt={"rand"} className={styles.boxImage} src={random}/>
                    </div>



                    <div onClick={handleOnClickSearch} className={styles.box}>
                        <span className={styles.boxText}>Search Cocktail</span>
                        <img alt={"cockt"} className={styles.boxImage} src={coct}/>
                    </div>



                    <div onClick={handleOnClickIngredient} className={styles.box}>
                        <span className={styles.boxText}>Search Ingredient</span>
                        <img alt={"ing"} className={styles.boxImage} src={ingr}/>
                    </div>


                    <div onClick={handleOnClickFilter} className={styles.box}>
                        <span className={styles.boxText}>Filter by Category</span>
                        <img alt={"filter"} className={styles.boxImage} src={filter}/>
                    </div>
            </div>

        </div>
    )
};

export default Home;