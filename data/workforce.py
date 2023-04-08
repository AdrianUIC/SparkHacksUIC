import json

features = []
wf = {}

with open("../app/helpingHands/src/data/workforce_centers.json") as file:
    json_dict = json.load(file)
    wf['type'] = json_dict['type']
    wf['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        print(prop)
        new_prop = {
            'name': prop['site_name'],
            'address': prop['address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone'],
        }
        f['properties'] = new_prop
    features += json_dict['features']

wf['features'] = features
with open('workforce_centers.json', 'w') as file:
    file.write(json.dumps(wf))
