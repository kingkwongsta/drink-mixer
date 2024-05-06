// EXPERIMENT COMPONENT TO GET LATEST RECIPES
"use client";
import { useEffect } from "react";
import userStore from "./userStore";

export default function StoreData() {
  const { storeRecipes, setStoreRecipes } = userStore();
  const getLatest = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/latest_recipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data2 = await response.json();
      setStoreRecipes(data2);
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
