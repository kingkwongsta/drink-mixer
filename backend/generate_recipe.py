from octoai.client import Client
from octoai.chat import TextModel, ChatCompletionResponseFormat
from models import Drink
import os
from dotenv import load_dotenv
load_dotenv()

octoai_api_token = os.getenv("OCTOAI_API_TOKEN")

client = Client(token=octoai_api_token)

completion = client.chat.completions.create(
    messages=[
        {"role": "system", "content": "You are an expert mixologist"},
        {"role": "user", "content": f"Create a unique creative advance cocktail recipe based on the following user preferences of {liquor}, {flavor}, {mood}. Do not include {flavor}, {liquor}, or {mood} in the recipe name."},
    ],
    model="meta-llama-3-8b-instruct",
    max_tokens=2000,
    presence_penalty=0,
    temperature=0.8,
    top_p=0.9,
    response_format=ChatCompletionResponseFormat(
        type="json_object",
        schema=Drink.model_json_schema(),
    ),
)

print(completion.choices[0].message.content)

