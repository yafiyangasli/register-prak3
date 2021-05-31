from selenium import webdriver
import time

driver = webdriver.Chrome("D:/web/react/prak3/chromedriver.exe")
driver.get("https://register-automation.herokuapp.com/")
driver.find_element_by_id("fname").send_keys("yafi")
driver.find_element_by_id("email").send_keys("yafi0721@gmail.com")
driver.find_element_by_id("password").send_keys("yafic00l")
driver.find_element_by_id("password2").send_keys("yafic00l")
driver.find_element_by_css_selector(".btn-success").click()