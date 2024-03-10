import firebase_admin
from firebase_admin import credentials, db

import json
from dotenv import dotenv_values

env_vars = dotenv_values(".env")
cred_json_string = env_vars.get("CRED")

cred_dict = json.loads(cred_json_string)

cred = credentials.Certificate(cred_dict)
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://myezlynk-default-rtdb.firebaseio.com/'
})



ref = db.reference('/')

def append_data(route, link):
    ref.child('links').child(route).set(link)
    return "Data appended successfully!"

def access_all_links():
    links_ref = ref.child('links')
    all_links = links_ref.get()
    return all_links

def access_link_by_route(route):
    links_ref = ref.child('links')

    link = links_ref.child(route).get()


    if link:
        return link
    else:
        return None
    

import string

def shortest_unused_string(input_dict):
    """Return the shortest string not in use within the given dictionary."""
    existing_keys = set(input_dict.keys())
    alphabet = string.ascii_lowercase

    for char in alphabet:
        if char not in existing_keys:
            return char

    for length in range(2, len(alphabet) + 2):
        for first_char in alphabet:
            candidate = first_char
            for _ in range(length - 1):
                for next_char in alphabet:
                    candidate += next_char
                    if candidate not in existing_keys:
                        return candidate