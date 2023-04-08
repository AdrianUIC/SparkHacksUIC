import json


with open("../app/helpingHands/src/data/community_services.json") as file:
    json_dict = json.load(file)
    print(json_dict.keys())
    features = [f for f in json_dict['features'] if f['geometry'] is not None]
    json_dict['features'] = features
    with open('community_services.json', 'w') as file:
        file.write(json.dumps(json_dict))

