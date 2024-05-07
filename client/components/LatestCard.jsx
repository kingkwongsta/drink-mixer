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

export default function LatestCard(drinkRecipe) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="px-6 pt-6 pb-4 text-center">
        <CardTitle className="text-3xl font-bold">{drinkRecipe.name}</CardTitle>
        <CardDescription>{drinkRecipe.description}</CardDescription>
      </CardHeader>
      {/* <Image
        alt={drinkRecipe.name}
        className="object-cover my-2"
        height="600"
        src={drinkImage}
        width="1200"
      /> */}
      <div className="flex flex-col sm:flex-row mt-6">
        <CardContent className="">
          <div className="items-center gap-4">
            <h3 className="text-sm font-semibold mb-1">Ingredients</h3>
            <ul className="text-sm list-disc marker:text-white pl-4">
              {drinkRecipe.ingredients
                .filter((item) => item.name !== "Ice cubes")
                .map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.name.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
        </CardContent>
        <CardContent className="">
          <div className="">
            <h3 className="text-sm font-semibold mb-1">Preparation</h3>
            <ul className="list-decimal pl-4 text-sm">
              {drinkRecipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
