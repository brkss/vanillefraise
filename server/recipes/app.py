import json
from .init import create_app
from flask import request

app = create_app()

@app.route('/', methods=['GET'])
def home():
    return json.dumps({"message": "Hello"}), 200

@app.route('/get-recipe', methods=['POST'])
def get_recipe():
    data = requiest.get_json()
    print("data : ", data)
    return json.dumps({"success": True}), 200

if __name__ == '__main__':
    app.run(Debug=True, host='0.0.0.0', port=5000)
