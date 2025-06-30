import os
import json

def get_title_and_tags(filename):
    name = filename.replace('.jpeg', '').replace('.jpg', '')
    parts = name.split('_')
    
    occasion_map = {
        'bdy': 'birthday',
        'ann': 'anniversary',
        'bbs': 'babyshower',
        'wed': 'wedding',
        'val': 'valentines',
        'mdy': 'mothersday',
        'fdy': 'fathersday'
    }

    occasion = occasion_map.get(parts[0], 'cake')
    title = ' '.join(word.capitalize() for word in parts[1:])
    tags = [occasion] + [word.lower() for word in parts[1:]]

    return title, occasion, ','.join(tags)

image_folder = 'images'
images = [f for f in os.listdir(image_folder) if f.endswith(('.jpg', '.jpeg'))]

cakes = []

for img in images:
    title, occ, tag_str = get_title_and_tags(img)
    cakes.append({
        'title': title,
        'image': f'images/{img}',
        'description': f"A delicious {occ} cake with a {title} theme.",
        'tags': tag_str
    })

with open('cakes.json', 'w') as f:
    json.dump(cakes, f, indent=2)

print("✅ cakes.json generated.")
