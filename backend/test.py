from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get OpenAI API key from environment variable
openai_api_token = os.getenv("OPENAI_API_KEY")

# Set the API key
client = OpenAI()

def create_recipe(liquor, flavor, mood):
  response = client.chat.completions.create(
    model="gpt-4o-mini",
    response_format={ "type": "json_object" },
    messages=[
      {"role": "system", "content": "You are a helpful mixologist designed to output JSON."},
      {"role": "user", "content": '''Create a unique creative advanced cocktail recipe based on the following user preferences of gin, sweet, happy. Return your response in the following JSON structure: {"name": "DRINK_NAME", description: "DRINK_DESCRIPTION", "ingredients": [{name: "INGREDIENT_NAME", quantity: "INGREDIENT_QUANTITY"}], "instructions": ["step 1", "step 2", "step 3"]}'''},
      ]
  )
  print("all done")
  return response.choices[0].message.content

print(create_recipe("gin", "sweet", "happy"))