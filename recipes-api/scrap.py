from bs4 import BeautifulSoup
from selenium import webdriver

url = "http://example.com/"

browser = webdriver.Firefox()
browser.get(url)
page = BeautifulSoup(browser.page_source, "lxml")

# Let's find some tables and then print all their rows
for table in page("table"):
    for row in table("tr"):
        print(row)
