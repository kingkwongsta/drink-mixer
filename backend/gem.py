import google.generativeai as genai

import os
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.0-pro')

response = model.generate_content("What is the meaning of life?")
print(response.text)