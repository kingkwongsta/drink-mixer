"use client";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import LatestRecipesCarousel from "@/components/LatestRecipesCarousel";
import userStore from "@/lib/userStore";
import Transition from "@/lib/transition";
import { useEffect } from "react";

export default function Home() {
  const { drinkRecipe, setStoredRecipes, storedRecipes } = userStore();
  //hydrate page with latest recipes
  useEffect(() => {
    const fetchData = async () => {
      const api_url =
        process.env.NODE_ENV === "production"
          ? `https://july23-2-2twnlcizjq-uc.a.run.app/latest_recipes`
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
    fetchData();
  }, [drinkRecipe]);

  return (
    <main className="w-full py-12 md:py-24">
      <div className="space-y-20">
        <Title />
        <Dropdown />
        <div className="flex flex-col items-center">
          {!drinkRecipe && <GenerateRecipe />}
          <Transition>{drinkRecipe && <RecipeCard />}</Transition>
        </div>
      </div>
      {/* LINE ELEMENT */}
      {/* <div className="border-t border-gray-800 w-full mt-20"></div> */}
      <div className="">
        <Transition>{storedRecipes && <LatestRecipesCarousel />}</Transition>
      </div>
    </main>
  );
}
