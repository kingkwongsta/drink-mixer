"use client";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";
import Transition from "@/lib/transition";
import LatestRecipesBlog from "@/components/LatestRecipesBlog";
import LatestRecipesAccordian from "@/components/LatestRecipesAccordian";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { drinkRecipe, drinkImage } = userStore();

  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[50px]">
      <Title />
      <Dropdown />
      <div className="flex flex-col items-center">
        {!drinkRecipe && <GenerateRecipe />}
        <Transition>{drinkRecipe && <RecipeCard />}</Transition>
      </div>
      {/* <button onClick={() => console.log(drinkRecipe)}>get data</button>
      <button onClick={() => console.log(drinkImage)}>get image</button>
      <StoreData /> */}
      {/* <LatestRecipesBlog /> */}
      <LatestRecipesAccordian />
    </main>
  );
}
