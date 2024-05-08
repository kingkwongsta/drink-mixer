import os
import requests
import base64
from dotenv import load_dotenv
from supabase import create_client
from models import Drink

load_dotenv()
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

def upload():
    image_url = "https://www.massaudubon.org/var/site/storage/images/2/5/9/0/1830952-1-eng-US/65d513c20021-FR_KForesto-2425-1200x800.jpg"
    response = requests.get(image_url)

    if response.status_code == 200:
        image_data = response.content
        path_on_supastorage = "image.jpg"  # Specify the desired file path on Supabase Storage
        supabase.storage.from_("drink_images").upload(path_on_supastorage, image_data, file_options={"content-type": "image/jpeg"})
        return "Image uploaded successfully"
    else:
        return f"Error downloading image: {response.status_code}"

def get_latest():
    response = supabase.table("drink_recipes").select("*").order("created_at", desc=True).limit(9).execute()
    return response.data

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
        "drink_image": data.drink_image
    }).execute()

    print("***** data successfully added to table *****")
    return response