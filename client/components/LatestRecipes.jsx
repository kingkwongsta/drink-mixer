"use client";
import { useEffect } from "react";
import userStore from "@/lib/userStore";
import RecipeCard from "./RecipeCard";

export default function LatestRecipes() {
  const { storedRecipes, setStoredRecipes } = userStore();
  const getLatest = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/latest_recipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setStoredRecipes(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Call getLatest only once on component mount
  useEffect(() => {
    getLatest();
  }, []);
  const handleClick = async () => {
    console.log(storedRecipes);
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
