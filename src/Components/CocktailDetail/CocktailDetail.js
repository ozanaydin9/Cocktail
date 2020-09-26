import React, {useEffect} from "react";
import styles from './CocktailDetail.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectCocktailDetails, selectCocktailsAreLoading} from "../../Redux/Accessors/Accessors";
import {Link, useLocation, useHistory} from 'react-router-dom'
import {getCocktailDetail} from "../../Redux/Actions/Actions";
import imgNotFound from "../../Assets/Images/imgnotfound.png";
import backLogo from "../../Assets/Images/back.svg";


const CocktailDetail = () => {

    const dispatch = useDispatch();
    const cocktailDetail = useSelector(selectCocktailDetails);
    const isLoading = useSelector(selectCocktailsAreLoading);
    const location = useLocation();
    const history = useHistory();
    const id = location.state.id;

    useEffect(() => {
        dispatch(getCocktailDetail(id))
    }, []);

    return(
        <div className={styles.cocktailDetail}>
                <div onClick={()=> history.goBack()} className={`d-none d-sm-block  ${styles.back}`}><img src={backLogo} alt={"back"}/></div>
            {isLoading ? ( <div style={{color:"white"}}>
                                <div className={styles.loading}>Loading...</div>
                                <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                                <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                                <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                            </div>) :
            <div className={`container-fluid`}>
                <div className={`row justify-content-center p-3`}>
                    <div className={styles.cocktailTitle}>{cocktailDetail.strDrink}</div>
                </div>
                <div className={`row`}>
                    <div className={`col-sm-12 col-md-4 col-lg-4 col-12`}>
                        <div>
                            <img alt={"cocktail"} className={styles.cocktailDetailImage} src={cocktailDetail.strDrinkThumb==="N/A" ? imgNotFound : cocktailDetail.strDrinkThumb}/>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-8 col-lg-8 col-12`}>
                        <div className={styles.cocktailDetailRightTop}>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Category - </span>
                                {cocktailDetail.strCategory}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Alcholic - </span>
                                {cocktailDetail.strAlcoholic}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Glass - </span>
                                {cocktailDetail.strGlass}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Instructions - </span>
                               {cocktailDetail.strInstructions}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Ingredient1 - </span>
                                {cocktailDetail.strIngredient1} {cocktailDetail.strMeasure1}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Ingredient2 - </span>
                                {cocktailDetail.strIngredient2} {cocktailDetail.strMeasure2}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Ingredient3 - </span>
                                {cocktailDetail.strIngredient3} {cocktailDetail.strMeasure3}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Ingredient4 - </span>
                                {cocktailDetail.strIngredient4} {cocktailDetail.strMeasure4}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Ingredient5 - </span>
                                {cocktailDetail.strIngredient5} {cocktailDetail.strMeasure5}
                            </div>
                            <div className={styles.cocktailInfo}>
                                <span style={{fontWeight:"bold"}}>Plot - </span>
                                {cocktailDetail.Plot}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
};

export default CocktailDetail;