"use client";
import { useEffect } from "react";
import userStore from "@/lib/userStore";
import LatestCard from "@/components/LatestCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LatestRecipesCarousel() {
  const { storedRecipes, setStoredRecipes } = userStore();
  const getLatest = async () => {
    const api_url =
      process.env.NODE_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_GCP_BACKEND_CONTAINER}/latest_recipes/`
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

  function renderRecipes() {
    return (
      <>
        {storedRecipes.map((drink, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6">
                {drink.drink_image &&
                  LatestCard(drink.drink_recipe[0], drink.drink_image)}
              </div>
            </div>
          </CarouselItem>
        ))}
      </>
    );
  }

  return (
    <div className="mt-[80px]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recently Created Recipes
        </h2>
      </div>
      <div>
        {storedRecipes && (
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="">{renderRecipes()}</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
}
