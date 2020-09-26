export const selectCocktailsAreLoading = (s) => s.CocktailReducers.isLoading;

export const selectCocktails = (s) => s.CocktailReducers.cocktails;

export const selectErrorMessage = (s) => s.CocktailReducers.errorMessage;

export const selectCocktailDetails = (s) => s.CocktailReducers.cocktailDetail;

export const selectTitle = (s) => s.CocktailReducers.cocktailTitle;

export const selectIngredientsTitle = (s) => s.CocktailReducers.ingredientsTitle;

export const selectRandomCocktail = (s) => s.CocktailReducers.randomCocktail;

export const selectIngredients = (s) => s.CocktailReducers.ingredients;