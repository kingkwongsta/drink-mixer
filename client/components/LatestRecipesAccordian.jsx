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

export default function LatestRecipesAccordian() {
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

  function renderRecipes() {
    return (
      <>
        {storedRecipes.map((drink, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <h3>HELLO</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </>
    );
  }

  return (
    <>
      {storedRecipes && (
        <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
          <CarouselContent>{renderRecipes()}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
}
