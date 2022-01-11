FROM python:3-alpine

RUN pip install --upgrade pip

WORKDIR /app

RUN adduser -D python
USER python

COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

COPY ./server/ /app/

RUN python init_db.py

CMD ["python", "main.py"]
