import pandas as pd
import requests, json


def download_csv(row):
    response = requests.get(f'https://data.cityofchicago.org/resource/{row[1]}.geojson').json()
    filename = row['title'].lower().replace(' ', '_')
    with open(filename + '.geojson', 'w') as file:
        file.write(json.dumps(response))


df = pd.read_csv('sources.csv')
df['url'] = df['url'].apply(lambda x: x[-9:])
df.apply(download_csv, axis=1)
