from octoai.client import Client
from octoai.chat import TextModel, ChatCompletionResponseFormat
from pydantic import BaseModel, Field
from typing import List

client = Client()

class Car(BaseModel):
    color: str
    maker: str

completion = client.chat.completions.create(
    model=TextModel.MISTRAL_7B_INSTRUCT,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "the car was black and it was a toyota camry."},
    ],
    max_tokens=512,
    presence_penalty=0,
    temperature=0.1,
    top_p=0.9,
    response_format=ChatCompletionResponseFormat(
        type="json_object",
        schema=Car.model_json_schema(),
    ),
)

print(completion.choices[0].message.content)
