import json
from .init import create_app

app = create_app()

@app.route('/', methods=['GET'])
def home():
    return json.dumps({"message": "Hello"})


if __name__ == '__main__':
    app.run(Debug=True, host='0.0.0.0', port=5000)
