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
    // <Card className="max-md:w-full max-md:max-w-2xl border-2 border-solid border-gray-800">
    <Card className="border-2 border-solid border-gray-800 sm:w-full">
      <CardHeader className="px-6 pt-6 pb-4 text-center">
        <CardTitle className="text-xl font-bold">{drinkRecipe.name}</CardTitle>
        <CardDescription>{trimmedDescription}</CardDescription>
      </CardHeader>
      <div className="sm-max-w-[200px]">
        <Image
          alt={drinkRecipe.name}
          className="my-2 bg-cover max-w-full"
          height="600"
          src={drinkImage}
          width="1200"
        />
      </div>
    </Card>
  );
}
