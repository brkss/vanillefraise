from recipe_scrapers import scrape_me

url = 'https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/'

def scrap_recipe(url):
    scraper = scrape_me(url)
    data = {
        "title": scraper.title(),
        "time": scraper.total_time(),
        "yields": scraper.yields(),
        "ingredients": scraper.ingredients(),
        "instructions": scraper.instructions(),
        "image": scraper.image(),
        "host": scraper.host(),
        "links": scraper.links(),
        "nutritions": scraper.nutrients()
    }
    print("data ingredients : ", data['ingredients'])
    return data

scrap_recipe(url)
