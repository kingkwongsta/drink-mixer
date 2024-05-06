// EXPERIMENT COMPONENT TO GET LATEST RECIPES
"use client";
import { useEffect } from "react";
import userStore from "./userStore";

export default function Latest() {
  const { storeRecipes, setStoredRecipes } = userStore();
  const getLatest = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/latest_recipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStoredRecipes(data.data, () => {
        console.log(storeRecipes);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLatest();
  }, []);

  const handleClick = async () => {
    console.log(storeRecipes);
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
