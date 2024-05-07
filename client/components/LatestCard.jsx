import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";

export default function LatestCard(drinkRecipe, drinkImage) {
  const trimmedDescription = drinkRecipe.description
    ? drinkRecipe.description.split(" ").slice(0, 15).join(" ") +
      (drinkRecipe.description.split(" ").length > 15 ? "..." : "")
    : "";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="border-2 border-solid border-gray-800 sm:w-full">
          <CardHeader className="px-6 pt-6 pb-2 text-center">
            <CardTitle className="text-xl font-bold">
              {drinkRecipe.name}
            </CardTitle>
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
      </DialogTrigger>
      <DialogContent className="min-w-[600px]">
        <RecipeCard drinkRecipe={drinkRecipe} drinkImage={drinkImage} />
      </DialogContent>
    </Dialog>
  );
}

function RecipeCard(props) {
  const { drinkRecipe, drinkImage } = props;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="px-6 pt-6 pb-4 text-center">
        <CardTitle className="text-3xl font-bold">{drinkRecipe.name}</CardTitle>
        <CardDescription>{drinkRecipe.description}</CardDescription>
      </CardHeader>
      <Image
        alt={drinkRecipe.name}
        className="object-cover my-2"
        height="600"
        src={drinkImage}
        width="1200"
      />
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
