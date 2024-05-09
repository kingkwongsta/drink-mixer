FROM python:3.10
WORKDIR /backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]

# docker build -t cocktail .
# docker images
# docker tag 47b7020f7d3e gcr.io/fastapi-418702/may8:latest
# gcloud auth configure-docker
# docker push gcr.io/fastapi-418702/may8:latest
#  