import json

features = []
health = {}

with open("../app/helpingHands/src/data/substance_abuse_services.json") as file:
    json_dict = json.load(file)
    health['type'] = json_dict['type']
    health['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        print(prop)
        new_prop = {
            'name': prop['treatment_center'],
            'address': prop['physical_address_address'],
            'hours': 'Not Available',
            'phone': 'Not Available',
            'type': 'Substance Abuse Services',
        }
        f['properties'] = new_prop
    features += json_dict['features']


with open("../app/helpingHands/src/data/wic_clinic.json") as file:
    json_dict = json.load(file)
    health['type'] = json_dict['type']
    health['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        print(prop)
        new_prop = {
            'name': prop['site_name'],
            'address': prop['street_address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone_1'],
            'type': 'Women-Infant-Children Clinic',
        }
        f['properties'] = new_prop
    features += json_dict['features']

with open("../app/helpingHands/src/data/sti_clinic.json") as file:
    json_dict = json.load(file)
    health['type'] = json_dict['type']
    health['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        print(prop)
        new_prop = {
            'name': prop['site_name'],
            'address': prop['street_address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone_1'],
            'type': 'STI Clinic',
        }
        f['properties'] = new_prop
    features += json_dict['features']

health['features'] = features
with open('health.json', 'w') as file:
    file.write(json.dumps(health))