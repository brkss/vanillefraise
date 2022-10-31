from googletrans import Translator


src = "chicken wings"
translator = Translator()
res = translator.translate(src, dest="fr")
print(res.text)
