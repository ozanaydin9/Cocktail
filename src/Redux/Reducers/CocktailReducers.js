const defaultState = {
    isLoading: null,
    cocktails: [],
    cocktailDetail: [],
    errorMessage: [],
    title: "",
    cocktailTitle:"",
    ingredientsTitle:"",
    randomCocktail: [],
    ingredients: []
};

const CocktailReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_COCKTAIL_STARTED':
            return { ...state, isLoading: true};

        case 'GET_COCKTAIL_SUCCESS':
            return { ...state, isLoading: false, cocktails: action.payload, errorMessage: action.errorMessage};

        case 'GET_COCKTAIL_FAILED':
            return { ...state, isLoading: false, cocktails: action.payload};

        case 'GET_COCKTAIL_DETAIL_STARTED':
            return { ...state, isLoading: true};

        case 'GET_COCKTAIL_DETAIL_SUCCESS':
            return { ...state, isLoading: false, cocktailDetail: action.payload};

        case 'GET_COCKTAIL_DETAIL_FAILED':
            return { ...state, isLoading: false, cocktailDetail: action.payload};

        case 'GET_COCKTAIL_TITLE':
            return { ...state, isLoading: false, cocktailTitle: action.payload};

        case 'GET_INGREDIENTS_TITLE':
            return { ...state, isLoading: false, ingredientsTitle: action.payload};

        case 'GET_RANDOM_COCKTAIL_STARTED':
            return { ...state, isLoading: true};

        case 'GET_RANDOM_COCKTAIL_SUCCESS':
            return { ...state, isLoading: false, randomCocktail: action.payload};

        case 'GET_RANDOM_COCKTAIL_FAILED':
            return { ...state, isLoading: false};

        case 'GET_INGREDIENTS_COCKTAIL_STARTED':
            return { ...state, isLoading: true};

        case 'GET_INGREDIENTS_COCKTAIL_SUCCESS':
            return { ...state, isLoading: false, ingredients: action.payload};

        case 'GET_INGREDIENTS_COCKTAIL_FAILED':
            return { ...state, isLoading: false, ingredients:"error"};
        default:
            return state
    }
};

export default CocktailReducers