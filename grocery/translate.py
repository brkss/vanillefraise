from googletrans import Translator
from time import sleep

src = ["chicken wings", "olive oil", "black pepper", "garlic", "spinach"]
translator = Translator()
#res = translator.translate(src, dest="fr")
for item in src:
    res = translator.translate(item, dest='fr') 
    print(item, " -> ", res.text)
    sleep(1)
