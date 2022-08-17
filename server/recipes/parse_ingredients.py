import parse_ingredient
import json

def parse_ingredients(ingredients):
    parsed = []
    for ingredient in ingredients:
        p_ing = parse_ingredient.parse(ingredient)
        parsed.append(p_ing.as_dict())
        print("ing : ", json.dumps(p_ing.as_dict()))
    return parsed

ingredients = [
            "2 eggs, beaten",
            "2 cloves garlic, minced",
            "4 ounces feta cheese",
            "1 (10 ounce) box frozen chopped spinach, thawed and squeezed dry",
            "2 pounds ground turkey"
        ]
parse_ingredients(ingredients)
