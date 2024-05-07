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
    </Card>
  );
}
