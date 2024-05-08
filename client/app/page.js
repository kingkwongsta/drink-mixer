"use client";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";
import Transition from "@/lib/transition";
import LatestRecipesCarousel from "@/components/LatestRecipesCarousel";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { drinkRecipe, drinkImage } = userStore();

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
