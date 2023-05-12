import json

features = []
out = {}

with open("../app/helpingHands/src/data/warming_centers.json") as file:
    json_dict = json.load(file)
    out['type'] = json_dict['type']
    out['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        print(prop)
        new_prop = {
            'name': prop['site_name'],
            'address': prop['location_address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone'],
        }
        f['properties'] = new_prop
    features += json_dict['features']

out['features'] = features
with open('warming_centers.json', 'w') as file:
    file.write(json.dumps(out))
