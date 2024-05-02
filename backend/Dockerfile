FROM python:3.9-slim
WORKDIR /backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]

# docker build -t cocktail .
# docker images
### LABEL DOCKER IMAGE
# docker tag 9af9a1c84aa3 gcr.io/fastapi-418702/may1v2:latest
### RUN DOCKER IMAGE
# docker run -p 8000:8080 my-image
### TEST LOCALLY
# http://localhost:8000/docs
# gcloud auth configure-docker
# docker push gcr.io/fastapi-418702/may1v2:latest