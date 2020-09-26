import React, {useEffect} from "react";
import styles from './Layout.module.css';
import Home from "../Home/Home";
import CocktailList from "../CocktailList/CocktailList";
import CocktailDetail from "../CocktailDetail/CocktailDetail";
import {Link, Route, Switch} from 'react-router-dom'
import bg from "../../Assets/Images/bg.png";
import {useSelector} from "react-redux";
import {selectCocktailsAreLoading, selectRandomCocktail} from "../../Redux/Accessors/Accessors";
import SearchIngredient from "../SearchIngredient/SearchIngredient";
import RandomCocktail from "../RandomCocktail/RandomCocktail";
import Filter from "../Filter/Filter";

const Layout = () => {

    const isLoading = useSelector(selectCocktailsAreLoading);

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <Link to="/">
                    <div className={styles.logo}>
                        <span className={styles.logoText}>Cocktail</span>
                    </div>
                </Link>

            </div>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/random" exact>
                    <RandomCocktail />
                </Route>
                <Route path="/search" exact>
                    <CocktailList />
                </Route>
                <Route path="/searchingredient" exact>
                    <SearchIngredient />
                </Route>
                <Route path="/cocktaildetail/:idDrink">
                    <CocktailDetail />
                </Route>
                <Route path="/filter">
                    <Filter />
                </Route>
            </Switch>
            <div className={styles.footer}>
                <Link to="/">
                    <div className={styles.footerLogo}>
                        <span className={styles.footerLogoText}>by ozanaydin</span>
                    </div>
                </Link>
            </div>
            {isLoading ? null :
            <div className={styles.bg}>
                <img alt={"bg"} className={styles.bgImage} src={bg}/>
            </div>}
        </div>
    )
};

export default Layout;