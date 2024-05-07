import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LatestCard(drinkRecipe, drinkImage) {
  const trimmedDescription = drinkRecipe.description
    ? drinkRecipe.description.split(" ").slice(0, 15).join(" ") +
      (drinkRecipe.description.split(" ").length > 15 ? "..." : "")
    : "";

  return (
    <Card className="border-2 border-solid border-gray-800 sm:w-full">
      <CardHeader className="px-6 pt-6 pb-2 text-center">
        <CardTitle className="text-xl font-bold">{drinkRecipe.name}</CardTitle>
        <CardDescription>{trimmedDescription}</CardDescription>
      </CardHeader>
      <div className="mx-auto max-md:max-w-[300px]">
        <Image
          alt={drinkRecipe.name}
          className="my-2 bg-center"
          height="600"
          src={drinkImage}
          width="1200"
        />
      </div>
    </Card>
  );
}
