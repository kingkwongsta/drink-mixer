# Drink Mixer
Discover a world of exquisite cocktail recipes
### Live Site: https://drink-mixer.vercel.app/

- Create a cocktail recipe based on your preference with Generative AI

## Tech Stack

**Client**
- Hosted on Vercel
- Next.js, Zustand, TailwindCSS, Shadcn

**Backend**

- Docker Container containing a Python FastAPI app hosted on Google Cloud Run (Serverless)
- Langchain to orchestrate an inference API call to Mixtral-8x7B LLM for recipe generation- React Server Action for text to image generation using Stable Diffusion XL with the [Paint Splash Style](https://civitai.com/models/140335/sdxl-paint-splash-style) LoRA


![screenshot](https://i.imgur.com/QYv1zoh.png)
