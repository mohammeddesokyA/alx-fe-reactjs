import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) => set((state) => {
    const newRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: newRecipes,
      filteredRecipes: newRecipes 
    };
  }),

  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().searchTerm ? 
        updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(get().searchTerm.toLowerCase())
        ) : updatedRecipes
    };
  }),

  deleteRecipe: (id) => set((state) => {
    const filteredRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: filteredRecipes,
      filteredRecipes: get().searchTerm ? 
        filteredRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(get().searchTerm.toLowerCase())
        ) : filteredRecipes
    };
  }),

  setRecipes: (recipes) => set({ 
    recipes,
    filteredRecipes: recipes 
  }),

  setSearchTerm: (term) => set((state) => {
    const filtered = term ? 
      state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.description.toLowerCase().includes(term.toLowerCase())
      ) : state.recipes;
    
    return {
      searchTerm: term,
      filteredRecipes: filtered
    };
  }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.searchTerm ? 
      state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) : state.recipes
  }))
}));
