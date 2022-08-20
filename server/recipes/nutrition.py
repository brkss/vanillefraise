import requests
import json

app_id = "4ae83249"
app_key = "4093dcfc796693ca3e7c13619b7295b2"
URL = "https://api.edamam.com/api/nutrition-details?app_id={}&app_key={}".format(app_id, app_key)

def get_nutrition(ingredients):
    data = {
        "title": "Test",
        "ingr": ingredients
    }
    headers={
        'Content-type':'application/json', 
        'Accept':'application/json'
    }
    res = requests.post(url=URL, headers=headers, json=data)
    results = res.json()
    return results


