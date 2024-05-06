// EXPERIMENT COMPONENT TO GET LATEST RECIPES
"use client";
import { useEffect } from "react";
import userStore from "./userStore";

export default function Latest() {
  const { storeRecipes, setStoredRecipes } = userStore();

  const getLatest = async () => {
    console.log("in getLatest");
    try {
      const response = await fetch("http://127.0.0.1:8000/latest_recipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setStoredRecipes(data, () => {
        // Log the updated value of storeRecipes after the state has been updated
        console.log(storeRecipes);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Call getLatest only once on component mount
  useEffect(() => {
    console.log("in the use EFFECT");
    getLatest();
  }, []);

  const handleClick = async () => {
    if (!storeRecipes) {
      console.log("Recipes are still loading...");
      return; // Prevent unnecessary processing
    }
    // No need to log storeRecipes here since it's already logged in getLatest
  };

  return (
    <button
      onClick={handleClick}
      className="border-2 border-cyan-300 m-5 p-4 text-3xl"
    >
      Get Me Latest
    </button>
  );
}
