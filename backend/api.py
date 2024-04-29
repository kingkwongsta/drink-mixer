from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from cocktail import generate_cocktail_recipe
from db import get_all


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