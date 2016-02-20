from lxml import html
import requests

page = requests.get('https://www.google.com/')
tree = html.fromstring(page.content)
print tree