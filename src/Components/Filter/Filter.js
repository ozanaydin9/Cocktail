import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCocktailsAreLoading,
    selectIngredientsTitle,
    selectIngredients
} from "../../Redux/Accessors/Accessors";
import {getCocktailDetail, getIngredients, getIngredientsTitle, getTitle} from "../../Redux/Actions/Actions";
import styles from './Filter.module.css';
import IngredientCard from "../IngredientCard/IngredientCard";
import {Selectbox} from "../Selectbox/Selectbox";

const Filter = () => {

    const dispatch = useDispatch();
    const ingredients = useSelector(selectIngredients);
    const isLoading = useSelector(selectCocktailsAreLoading);
    const ingredientsTitle = useSelector(selectIngredientsTitle);
    let val = [];
    const [filterType, setFilterType] = useState([]);
    const [list, setList] = useState([]);
    const [type, setType] = useState([]);
    const [cocktails, setCocktails] = useState([]);

    async function fetchData(val) {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?"+val+"=list");
        const data = await res.json()
        setList(data.drinks)
    }

    useEffect(() => {
        if(filterType!=[]){
            fetchData(filterType)
        }
    }, [filterType]);

    async function handleGetIngredients() {
        console.log(val)
        console.log(type)
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?"+filterType+"="+type);
        const data = await res.json()
        setCocktails(data.drinks);

    }

    function onEnterPress (e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleGetIngredients();
        }
    }

    function handleTypeChange(event) {
        setType(event.target.value)
    };

    function handleRadioChanged(e) {
        val = e.target.value;
        setFilterType(val)
    }
    const mappedList= list.map((element) => {
            let nameList = (filterType=="g") ? element.strGlass : (filterType=="a") ? element.strAlcoholic : element.strCategory;
            let valueList = (filterType=="g") ? element.strGlass : (filterType=="a") ? element.strAlcoholic : element.strCategory;

                return {
                    name: nameList,
                    value: valueList
                }
        }
    )
    console.log(mappedList)

    return (
        <div>
            <div>
                <div className={styles.searchArea}>
                    <div className={styles.radioGroup}>
                        <input onChange={handleRadioChanged} type="radio" className={styles.radio} name="x" value="a" id="a"/>
                        <label htmlFor="y">Filter by alcoholic</label>
                        <input onChange={handleRadioChanged} type="radio" className={styles.radio} name="x" value="c" id="c"/>
                        <label htmlFor="z">Filter by Category</label>
                        <input onChange={handleRadioChanged} type="radio" className={styles.radio} name="x" value="g" id="g"/>
                        <label htmlFor="x">Filter by Glass</label>
                    </div>
                    <Selectbox placeholder={"Select filter type"} optionList={mappedList} onChange={handleTypeChange}/>
                    <button onClick={handleGetIngredients} className={styles.button}>Search</button>
                </div>

                {isLoading ? (<div style={{color:"white"}}>
                        <div className={styles.loading}>Loading...</div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                        <div className="spinner-grow spinner-grow-sm text-dark m-2"></div>
                    </div>) :
                    Array.isArray(cocktails) ?
                        cocktails.map((t) => (
                            <IngredientCard key={t.idDrink} {...t} />
                        ))
                        : <div style={{color:"white"}}>error!</div>
                }
            </div>
        </div>

    )
};

export default Filter;