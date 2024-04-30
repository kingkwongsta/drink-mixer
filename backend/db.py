import os
from dotenv import load_dotenv
from supabase import create_client, Client
from pydantic import BaseModel
from typing import List, Dict

load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)


# data = {
#     "col1": "9999",
#     "col2" : "999999"
# }
# response2 = supabase.table("Test").insert(data).execute()
# print(response2)


def get_all():
    response = supabase.table('Test').select("*").execute()
    return response

class IngredientItem(BaseModel):
    name: str
    quantity: str

class DrinkRecipe(BaseModel):
    name: str
    description: str
    ingredients: List[IngredientItem]
    instructions: List[str]

class Drink(BaseModel):
    user_flavor: str
    user_mood: str
    user_liquor: str
    drink_recipe: DrinkRecipe

def add_recipe(data: Drink):
    drink_recipe_data = [
        {
            "name": data.drink_recipe.name,
            "description": data.drink_recipe.description,
            "ingredients": [
                {"name": ingredient.name, "quantity": ingredient.quantity}
                for ingredient in data.drink_recipe.ingredients
            ],
            "instructions": data.drink_recipe.instructions,
        }
    ]

    response = supabase.table("drink_recipes").insert({
        "user_flavor": data.user_flavor,
        "user_mood": data.user_mood,
        "user_liquor": data.user_liquor,
        "drink_recipe": drink_recipe_data,
    }).execute()
    print("data successfully added")
    print(response)
    
