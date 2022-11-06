from selenium import webdriver 
from selenium.webdriver.common.keys import Keys
import time


PATH = "./chromedriver"
driver = webdriver.Chrome(PATH)

driver.get('https://marjane.ma/')
time.sleep(5)
search_box = driver.find_element('aria-controls', 'search-bar-listbox')
search_box.send_keys('sauce')
search_box.submit()

"""
elms = []
for item in driver.find_elements_by_tag_name('input'):
    att = driver.get_attribute('search-bar-listbox')
    if att :
        elms.append(item)

print(elms)

"""
