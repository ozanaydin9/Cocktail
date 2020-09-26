const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export function getCocktail(s) {
    return async (dispatch) => {
        dispatch({
            type: 'GET_COCKTAIL_STARTED'
        });

        try {
            const res = await fetch(endpoint+"?s="+s);
            const data = await res.json()

            dispatch({
                type: 'GET_COCKTAIL_SUCCESS',
                payload:  data.drinks,
            })
        } catch (error) {
            dispatch({
                type: 'GET_COCKTAIL_FAILED',
                payload: error
            })
        }
    }
}

export function getCocktailDetail(i) {
    return async (dispatch) => {
        dispatch({
            type: 'GET_COCKTAIL_DETAIL_STARTED'
        });

        try {
            const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php"+"?i="+i);
            const data = await res.json()

            dispatch({
                type: 'GET_COCKTAIL_DETAIL_SUCCESS',
                payload: data.drinks[0]
            })
        } catch (error) {
            dispatch({
                type: 'GET_COCKTAIL_DETAIL_FAILED',
                payload: error
            })
        }
    }
}

export function getPage(p) {
    return {
        type: 'GET_PAGE',
        payload: p
    }

}

export function getTitle(t) {
    return {
        type: 'GET_COCKTAIL_TITLE',
        payload: t
    }

}

export function getIngredientsTitle(t) {
    return {
        type: 'GET_INGREDIENTS_TITLE',
        payload: t
    }

}

export function getRandomCocktail() {
    return async (dispatch) => {
        dispatch({
            type: 'GET_RANDOM_COCKTAIL_STARTED'
        });

        try {
            const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const data = await res.json()

            dispatch({
                type: 'GET_RANDOM_COCKTAIL_SUCCESS',
                payload: data.drinks[0]
            })
        } catch (error) {
            dispatch({
                type: 'GET_RANDOM_COCKTAIL_FAILED',
                payload: error
            })
        }
    }
}

export function getIngredients(i) {
    return async (dispatch) => {
        dispatch({
            type: 'GET_INGREDIENTS_COCKTAIL_STARTED'
        });

        try {
            const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php"+"?i="+i);
            const data = await res.json()

            dispatch({
                type: 'GET_INGREDIENTS_COCKTAIL_SUCCESS',
                payload:  data.drinks,
            })
        } catch (error) {
            dispatch({
                type: 'GET_INGREDIENTS_COCKTAIL_FAILED',
                payload: error
            })
        }
    }
}