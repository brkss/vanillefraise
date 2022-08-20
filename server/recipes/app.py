import json
from .init import create_app
from flask import request
from .scrape import scrape_recipe
from .parse_ingredients import parse_recipe_ingredients
from .nutrition import get_nutrition

app = create_app()

@app.route('/', methods=['GET'])
def home():
    return json.dumps({"message": "Hello"}), 200

@app.route('/get-recipe', methods=['POST'])
def get_recipe():
    data = request.get_json()
    url = data['url']
    recipe = scrape_recipe(url)
    recipe['nutrition'] = get_nutrition(recipe['ingredients'])
    recipe['ingredients'] = parse_recipe_ingredients(recipe['ingredients'])
    #print("data : ", data)
    return json.dumps({"success": True, "recipe": recipe}), 200

if __name__ == '__main__':
    app.run()

"""
if __name__ == '__main__':
    app.run(Debug=True, host='0.0.0.0', port=5000)
    """
