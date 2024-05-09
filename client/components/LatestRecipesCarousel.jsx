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
  const { storedRecipes } = userStore();

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
