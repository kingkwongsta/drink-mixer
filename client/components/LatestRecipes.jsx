"use client";
import { useEffect } from "react";
import userStore from "@/lib/userStore";
import LatestCard from "@/components/LatestCard";

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

  function renderRecipes() {
    return (
      <div className="grid sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7">
        {storedRecipes.map((drink) => {
          return LatestCard(drink.drink_recipe[0], drink.drink_image);
        })}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="border-2 border-cyan-300 m-5 p-4 text-3xl"
      >
        Get Me Latest
      </button>
      {storedRecipes && renderRecipes()}
    </>
  );
}
