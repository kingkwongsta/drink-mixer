// EXPERIMENT COMPONENT TO GET LATEST RECIPES
"use client";
import userStore from "./userStore";

export default function StoreData() {
  const { userFlavor, userLiquor, userMood, drinkRecipe, drinkImage } =
    userStore();

  const data = {
    user_flavor: userFlavor,
    user_mood: userMood,
    user_liquor: userLiquor,
    drink_recipe: drinkRecipe,
    drink_image: drinkImage,
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/add_recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data2 = await response.json();
      console.log(data2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="border-2 border-cyan-300 m-5 p-4 text-3xl"
    >
      Store the Data
    </button>
  );
}
