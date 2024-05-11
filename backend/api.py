from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from models import Drink
# from cocktail import generate_cocktail_recipe
from generate_recipe import create_recipe
from db import get_latest, add_recipe, upload
import json


import os
from dotenv import load_dotenv
from supabase import create_client, Client
load_dotenv()
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

#Langchain
# @app.get("/cocktail")
# async def get_cocktail(liquor: str = Query(default=None), flavor: str = Query(default=None), mood: str = Query(default=None)):
#     return generate_cocktail_recipe(liquor, flavor, mood)

#Octoai API to generate cocktail recipe
@app.get("/cocktail")
async def get_cocktail(liquor: str = Query(default=None), flavor: str = Query(default=None), mood: str = Query(default=None)):
    recipe_json = json.loads(create_recipe(liquor, flavor, mood))
    return recipe_json

#supabase API to retrieve latest # of generated recipes
@app.get("/latest_recipes")
async def latest_recipes_handler():
    return get_latest()

#supabase API to add recipe to database
@app.post("/add_recipe/")
async def add_recipe_handler(data: Drink):
    add_recipe(data)

#supabase API to upload a file to object storage
@app.get("/upload")
async def upload_handler():
    upload()