"use client";
import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import { useState, useEffect } from "react";
import { createImage, storeRecipe } from "@/app/actions";
import LoadingIcon from "./LoadingIcon";

export default function GenerateRecipe() {
  const [isLoading, setIsLoading] = useState(false);
  const { setDrinkRecipe, userFlavor, userLiquor, userMood, setDrinkImage } =
    userStore();
  const fetchData = async () => {
    const queryString = new URLSearchParams({
      liquor: userLiquor,
      flavor: userFlavor,
      mood: userMood,
    });
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://cocktail-may1-2twnlcizjq-wl.a.run.app/cocktail?${queryString}`
        : `/cocktail?${queryString}`;

    const url = `${baseUrl}?${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      const imageResponse = await createImage(data, userLiquor);
      const imageURL = `data:image/jpeg;base64,${imageResponse[0].imageData}`;
      setDrinkRecipe(data);
      setDrinkImage(imageURL);
      storeRecipe(userFlavor, userLiquor, userMood, data, imageURL);
    }

    setIsLoading(false);
  };
  return (
    <>
      <form action={fetchData}>
        <Button
          type="submit"
          className={` ${isLoading ? "hidden" : ""}`}
          onClick={() => setIsLoading(true)}
        >
          Generate Recipe
        </Button>
      </form>
      {isLoading && <LoadingIcon />}
    </>
  );
}
