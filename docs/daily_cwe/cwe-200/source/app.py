import os
import time
from flask import Flask, request, jsonify

app = Flask(__name__)
SECRET_FLAG = os.environ.get("FLAG")

@app.route('/api/verify', method=['POST'])
def verify():
    data = request.get_json(silent=True) or {}
    user_input = data.get("flag", "")
    if (len(user_input) != len(SECRET_FLAG)):
        return jsonify({"status": "wrong"}), 400
    
    for i in range(len(SECRET_FLAG)):
        if user_input[i] != SECRET_FLAG[i]:
            return jsonify({"status": "wrong"}), 400
        time.sleep(0.03)
    
    return jsonify({"status": "correct"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)