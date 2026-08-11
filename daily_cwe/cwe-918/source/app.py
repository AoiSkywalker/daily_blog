import os
from flask import Flask, request, jsonify
from urllib.parse import urlparse
import requests

app = Flask(__name__)

INTERNAL_ADMIN_URL = "http://127.0.0.1:5000/internal/flag"

def is_safe_url(target_url):
    try:
        parsed = urlparse(target_url)
        if parsed.hostname == 'example.com':
            return True
        return False
    except Exception:
        return False
    
@app.route('/fetch', methods=['POST'])
def fetch_url():
    data = request.get_json(silent=True) or {}
    url = data.get('url', '')

    if not url:
        return jsonify({"error": "Missing URL"}), 400
    
    if not is_safe_url(url):
        return jsonify({"error": "Access Denied: Unapproved Domain"}), 403
    
    try:
        resp = request.get(url, timeout=3)
        return jsonify({"content": resp.text}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/internal/flag')
def internal_flag():
    if request.remote_addr != '127.0.0.1':
        return jsonify({"error": "Forbidden"}), 403
    return jsonify({"flag": os.environ.get("FLAG")})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)