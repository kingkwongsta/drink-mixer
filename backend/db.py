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
