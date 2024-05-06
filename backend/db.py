import os
from dotenv import load_dotenv
from supabase import create_client
from models import Drink

load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

def get_latest():
  response = supabase.table("drink_recipes").select("*").order("created_at", desc=True).limit(9).execute()
  return response

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
        # "drink_recipe": data.drink_recipe,
        "drink_image": data.drink_image
    }).execute()
    print("********** data successfully added to table **********")
    return response

