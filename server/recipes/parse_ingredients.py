from PyIng import parse_ingredients
import json

def parse_recipe_ingredients(ingredients):
    #parsed = []
    parsed = parse_ingredients(ingredients)
    """
    for ingredient in parse_ingredients:
    
        ['raw'] = ingredient
        parsed.append(p_ing)
    """
    return parsed

ingredients = [
            "2 eggs, beaten",
            "2 cloves garlic, minced",
            "4 ounces feta cheese",
            "1 (10 ounce) box frozen chopped spinach, thawed and squeezed dry",
            "2 pounds ground turkey"
        ]
#parse_ingredients(ingredients)
