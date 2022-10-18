import requests
from bs4 import BeautifulSoup

URL = 'https://www.nutritionix.com/search?q={}'
def get_ingredient_image(ingredient):
    res = requests.get(URL.format(ingredient))
    content = res.content
    soup = BeautifulSoup(content, 'html.parser')
    img = soup.find_all("img", {"class": "item-photo"})
    print(soup)
    return

get_ingredient_image('banana')
