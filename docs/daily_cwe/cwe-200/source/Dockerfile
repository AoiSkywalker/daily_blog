FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

ENV FLAG="AoiCTF{l3ak_v1a_t1m1n8}"

EXPOSE 5000
USER nobody

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]