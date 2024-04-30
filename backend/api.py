from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from cocktail import generate_cocktail_recipe
from db import get_all, add_recipe

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

@app.get("/test")
async def testing():
    return {"message": "TESTING TESTING TESTING"}

@app.get("/more")
async def more():
    return {"1 + 1 = 3"}

@app.get("/cocktail")
async def get_cocktail(liquor: str = Query(default=None), flavor: str = Query(default=None), mood: str = Query(default=None)):
    return generate_cocktail_recipe(liquor, flavor, mood)

@app.get("/test_all")
async def test_all():
    return get_all()

class Recipe(BaseModel):
    user_flavor: str
    user_mood: str
    user_liquor: str

@app.post("/add_recipe/")
async def add_recipe_handler(data: Recipe):
    data = supabase.table("drink_recipes").insert({
        "user_flavor": data.user_flavor,
        "user_mood": data.user_mood,
        "user_liquor": data.user_liquor,
    }).execute()
    
# http://127.0.0.1:8000/add_recipe?user_flavor=sweet&user_liquor=gin&user_mood=happy