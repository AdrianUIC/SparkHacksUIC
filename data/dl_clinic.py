import requests
import json

response = requests.get(f'https://data.cityofchicago.org/resource/ie4n-kauq.geojson').json()
filename = 'sti_clinic'
with open(filename + '.json', 'w') as file:
    file.write(json.dumps(response))