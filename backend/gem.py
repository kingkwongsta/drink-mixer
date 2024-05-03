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


def test():
  load_dotenv()
  api_key = os.getenv("GOOGLE_API_KEY")
  genai.configure(api_key=api_key)
  model = genai.GenerativeModel('gemini-1.0-pro')
  response = model.generate_content("Why is the sky blue?")

  response_dict = {
      "text": response.text
  }

  return response_dict
