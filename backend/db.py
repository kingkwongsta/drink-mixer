import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)


# data = {
#     "col1": "9999",
#     "col2" : "999999"
# }
# response2 = supabase.table("Test").insert(data).execute()
# print(response2)


def get_all():
    response = supabase.table('Test').select("*").execute()
    return response

def add_recipe(data):
    response = supabase.table("drink_recipes").insert({
        "user_flavor": data.user_flavor,
        "user_mood": data.user_mood,
        "user_liquor": data.user_liquor,
    }).execute()
    print("data successfully added")
    print(response)
    
    
