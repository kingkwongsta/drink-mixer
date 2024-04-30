"use client";
import userStore from "./userStore";

export default function DrinkRecipeForm() {
  const { setDrinkRecipe, userFlavor, userLiquor, userMood, setDrinkImage } =
    userStore();

  const data = {
    user_flavor: "",
    user_mood: "",
    user_liquor: "",
    drink_recipe: {
      name: "",
      description: "",
      ingredients: [{ name: "", quantity: "" }],
      instructions: [""],
    },
    drink_image: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/add_recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for user_flavor, user_mood, user_liquor, and drink_image */}
      <div>
        <h3>Drink Recipe</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="drink_recipe.name"
            value={formData.drink_recipe.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="drink_recipe.description"
            value={formData.drink_recipe.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Ingredients</h4>
          {formData.drink_recipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              <label htmlFor={`ingredient-name-${index}`}>Name</label>
              <input
                type="text"
                id={`ingredient-name-${index}`}
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
              />
              <label htmlFor={`ingredient-quantity-${index}`}>Quantity</label>
              <input
                type="text"
                id={`ingredient-quantity-${index}`}
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div>
          <h4>Instructions</h4>
          {formData.drink_recipe.instructions.map((instruction, index) => (
            <div key={index}>
              <textarea
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
