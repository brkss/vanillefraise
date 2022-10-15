#FROM arm64v8/python:3.8
FROM python:3.8

WORKDIR /app

COPY requirements.txt requirements.txt

#RUN apt-get install python-scipy

RUN pip install -r requirements.txt

COPY . .

EXPOSE 3001

CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=3001"]

