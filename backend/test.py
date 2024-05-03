import google.generativeai as genai
from pydantic import BaseModel
from typing import List


import os
from dotenv import load_dotenv

class IngredientItem(BaseModel):
    name: str
    quantity: str

class DrinkRecipe(BaseModel):
    name: str
    description: str
    ingredients: List[IngredientItem]
    instructions: List[str]

print(DrinkRecipe)