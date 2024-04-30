from pydantic import BaseModel
from typing import List

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