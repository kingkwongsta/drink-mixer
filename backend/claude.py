import anthropic
import os
from dotenv import load_dotenv
import json

load_dotenv()
claude_api_token = os.getenv("CLAUDE_API_KEY")

client = anthropic.Anthropic(api_key=claude_api_token)

message = client.messages.create(
    model="claude-3-haiku-20240307",
    max_tokens=1000,
    temperature=0,
    system="You are a Customer Insights AI. Always respond in valid JSON format.",
    messages=[
        {
            "role": "user",
            "content": """Analyze this feedback and output in JSON format with keys: "sentiment" (positive/negative/neutral), "key_issues" (list), and "action_items" (list of dicts with "team" and "task").

            Feedback: "I've been a loyal user for 3 years, but the recent UI update is a disaster. Finding basic features is now a scavenger hunt. Plus, the new 'premium' pricing is outrageous. I'm considering switching unless this is fixed ASAP.""""
        }
    ],
    response_format={"type": "json_object"}
)
print(message.content)