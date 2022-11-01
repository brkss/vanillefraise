from googletrans import Translator
from time import sleep

src = ["chicken wings", "olive oil", "black pepper", "garlic", "spinach"]
translator = Translator()
res = translator.translate("Melt the butter in a medium-to-large saucepan over medium heat. Once melted, add the oats and stir to coat. Cook, stirring occasionally, until the oats smell toasty and some are starting to turn lightly golden, about 4 to 6 minutes.", dest="ar")
print("origin : ", res.origin)
print("ar : ", res.text)
"""
for item in src:
    res = translator.translate(item, dest='fr') 
    print(item, " -> ", res.text)
    sleep(1)
"""
