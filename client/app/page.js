"use client";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";
import Transition from "@/lib/transition";
import LatestRecipesCarousel from "@/components/LatestRecipesCarousel";
import { useEffect } from "react";

export default function Home() {
  const { drinkRecipe, setStoredRecipes } = userStore();
  const getLatest = async () => {
    const api_url =
      process.env.NODE_ENV === "production"
        ? `https://cocktail-may8-2twnlcizjq-wl.a.run.app/latest_recipes`
        : "http://127.0.0.1:8000/latest_recipes";
    try {
      const response = await fetch(api_url, {
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

  return (
    <main className="w-full px-12 py-12 md:py-24">
      <div className="space-y-20">
        <Title />
        <Dropdown />
        <div className="flex flex-col items-center">
          {!drinkRecipe && <GenerateRecipe />}
          <Transition>{drinkRecipe && <RecipeCard />}</Transition>
        </div>
      </div>
      <div class="border-t border-gray-800 w-full mt-20"></div>
      <LatestRecipesCarousel />
    </main>
  );
}
