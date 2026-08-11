FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

ENV FLAG="AoiCTF{55rf_ur1_p4r53_d15cr3p4ncy}"

EXPOSE 5000
USER nobody

CMD ["python", "app.py"]
