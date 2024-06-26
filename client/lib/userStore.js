import { create } from "zustand";

const userStore = create((set) => ({
  userFlavor: "Sweet",
  userLiquor: "Vodka",
  userMood: "Celebratory",
  drinkRecipe: "",
  drinkImage: "",
  storedRecipes: null,
  latestRecipes: null,
  setUserFlavor: (flavor) => set((state) => ({ ...state, userFlavor: flavor })),
  setUserLiquor: (liquor) => set((state) => ({ ...state, userLiquor: liquor })),
  setUserMood: (mood) => set((state) => ({ ...state, userMood: mood })),
  setDrinkRecipe: (recipe) =>
    set((state) => ({ ...state, drinkRecipe: recipe })),
  setDrinkImage: (image) => set((state) => ({ ...state, drinkImage: image })),
  setStoredRecipes: (data) =>
    set((state) => ({ ...state, storedRecipes: data })),
  setlatestRecipes: (data) =>
    set((state) => ({ ...state, latestRecipes: data })),
}));

export default userStore;
