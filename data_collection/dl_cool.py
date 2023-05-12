import requests
import json

response = requests.get(f'https://data.cityofchicago.org/resource/msrk-w9ih.geojson').json()
filename = 'cooling_centers'
with open(filename + '.geojson', 'w') as file:
    file.write(json.dumps(response))