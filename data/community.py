import pandas as pd
import json

features = []
community = {}

with open("../app/helpingHands/src/data/community_service_centers.json") as file:
    json_dict = json.load(file)
    community['type'] = json_dict['type']
    community['crs'] = json_dict['crs']
    for f in json_dict['features']:
        prop = f['properties']
        new_prop = {
            'name': prop['site'],
            'address': prop['location_address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone'],
            'type': 'community',
        }
        f['properties'] = new_prop
    features += json_dict['features']

print("\n\nFAMILY")
with open("../app/helpingHands/src/data/family_and_support_services.json") as file:
    json_dict = json.load(file)
    for f in json_dict['features']:
        prop = f['properties']
        new_prop = {
            'name': prop['site_name'],
            'address': prop['address'],
            'hours': 'Not Available',
            'phone': prop['phone_number'],
            'type': 'family',
        }
        f['properties'] = new_prop
    features += json_dict['features']


print("\n\nSENIORS")
with open("../app/helpingHands/src/data/senior_centers.json") as file:
    json_dict = json.load(file)
    for f in json_dict['features']:
        prop = f['properties']
        new_prop = {
            'name': prop['site_name'],
            'address': prop['location_address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone'],
            'type': 'senior',
        }
        f['properties'] = new_prop
    features += json_dict['features']


print("\n\nLIBRARIES")
with open("../app/helpingHands/src/data/libraries.json") as file:
    json_dict = json.load(file)
    for f in json_dict['features']:
        prop = f['properties']
        new_prop = {
            'name': prop['name_'],
            'address': prop['address'],
            'hours': prop['hours_of_operation'],
            'phone': prop['phone'],
            'type': 'library',
        }
        f['properties'] = new_prop
    features += json_dict['features']

community['features'] = features
with open('community.json', 'w') as file:
    file.write(json.dumps(community))