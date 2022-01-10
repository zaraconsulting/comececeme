FROM python:3.9-slim-buster

WORKDIR /

COPY requirements.txt .

RUN python3 -m venv venv && . venv/bin/activate

RUN pip3 install -r requirements.txt

COPY . .
COPY migrations .

ENV FLASK_APP run.py
ENV FLASK_RUN_HOST 0.0.0.0
# EXPOSE 5002

CMD [ "flask", "run" ]