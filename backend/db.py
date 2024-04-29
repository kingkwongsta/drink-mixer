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
    response = supabase.table("drink_recipes").insert(data).execute()
    print(response)
    
# data = supabase.table("drink_recipes").insert({
#         "user_flavor=": "342",
#         "user_mood=": "222",
#         "user_liquor=": "5611",
#     }).execute()
# print(data)