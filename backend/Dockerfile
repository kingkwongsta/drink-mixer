FROM python:3.10
WORKDIR /backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]

# docker build -t cocktail .
# docker images
# docker tag 74b9c4c4f89d gcr.io/fastapi-418702/july23-2:latest
# gcloud auth configure-docker
# docker push gcr.io/fastapi-418702/july23-2:latest
#  