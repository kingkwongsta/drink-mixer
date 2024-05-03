import google.generativeai as genai
import json

import os
from dotenv import load_dotenv


def test():
  load_dotenv()
  api_key = os.getenv("GOOGLE_API_KEY")
  genai.configure(api_key=api_key)

  # Define the request body as a dictionary
  request_body = {
      "contents": [{
          "parts": [{
              "text": "List 5 popular cookie recipes using this JSON schema: {\"type\": \"object\", \"properties\": {\"recipe_name\": {\"type\": \"string\"}}}"
          }]
      }],
      "generationConfig": {
          "response_mime_type": "application/json"
      }
  }

  # Convert the dictionary to JSON string
  json_data = json.dumps(request_body)

  # Use the TextService to send the request directly
  text_service = genai.TextService()
  response = text_service.generate_text(content=json_data, model_name="projects/your-project-id/locations/global/models/gemini-1.5-pro-latest")

  # Process the response (assuming it's a list of recipes)
  recipes = json.loads(response.text)["text"]
  print(f"Generated Cookie Recipes:")
  for recipe in recipes:
    print(recipe)

  return recipes  # You can return the recipes if needed