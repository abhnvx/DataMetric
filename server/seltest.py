from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from decouple import config

user = config('email')
password = config('password')

driver = webdriver.Chrome("D:\Downloads\chromedriver_win32\chromedriver.exe")  
driver.maximize_window()

driver.get("http://localhost:3000/")
# driver.get("http://127.0.0.1:5000")

get_started = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#root > div > div:nth-child(2) > div > div > div > div.inline-flex")))
get_started.click()

auth = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "body > div.relative.flex.flex-col-reverse.py-16.lg\:pt-0.lg\:flex-col.lg\:pb-0 > div.relative.flex.flex-col.items-start.w-full.max-w-xl.px-4.mx-auto.md\:px-0.lg\:px-8.lg\:max-w-screen-xl > div > div > a.inline-flex.items-center.justify-center")))
auth.click()

enter_email = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#identifierId")))
enter_email.send_keys(user)

next = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#identifierNext > div > button > span")))
next.click()

enter_password = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")))
enter_password.send_keys(password)

next_p = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "#passwordNext > div > button")))
next_p.click()


upload = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#submit-file")))

Check = (upload.is_displayed())
if Check:
    print("Login process successfully executed")
else:
    print("Login process Failed")
