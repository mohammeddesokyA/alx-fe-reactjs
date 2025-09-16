// recipeStore.js - محدث
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

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
  })),

  // إضافة دوال المفضلة
  addFavorite: (recipeId) => set((state) => {
    // تجنب الإضافة المكررة
    if (state.favorites.includes(recipeId)) return state;
    return { favorites: [...state.favorites, recipeId] };
  }),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  toggleFavorite: (recipeId) => set((state) => {
    if (state.favorites.includes(recipeId)) {
      return { favorites: state.favorites.filter(id => id !== recipeId) };
    } else {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // توليد توصيات بسيطة بناءً على المفضلة
  generateRecommendations: () => set((state) => {
    if (state.favorites.length === 0) {
      // إذا لم يكن هناك مفضلات، عرض بعض الوصفات العشوائية
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }

    // البحث عن وصفات مشابهة للمفضلة
    const favoriteCategories = state.favorites.map(favId => {
      const recipe = state.recipes.find(r => r.id === favId);
      return recipe ? recipe.category || 'general' : 'general';
    });

    // إيجاد الوصفات التي تنتمي لنفس فئات المفضلة
    const recommended = state.recipes
      .filter(recipe => 
        !state.favorites.includes(recipe.id) && 
        favoriteCategories.some(cat => 
          (recipe.category || 'general') === cat
        )
      )
      .slice(0, 5);

    // إذا لم تكن هناك توصيات كافية، إضافة وصفات عشوائية
    if (recommended.length < 3) {
      const additional = state.recipes
        .filter(recipe => 
          !state.favorites.includes(recipe.id) && 
          !recommended.includes(recipe)
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3 - recommended.length);
      
      return { recommendations: [...recommended, ...additional] };
    }

    return { recommendations: recommended };
  }),
}));