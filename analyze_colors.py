
from PIL import Image
from collections import Counter

def get_dominant_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image = image.resize((150, 150)) # Resize for speed
        pixels = list(image.getdata())
        counts = Counter(pixels)
        dominant_colors = counts.most_common(num_colors)
        
        print(f"Colors found in {image_path}:")
        for color, count in dominant_colors:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"RGB: {color}, Hex: {hex_color}, Count: {count}")
            
    except Exception as e:
        print(f"Error: {e}")

# Analizar la Portada.png que debe contener el logo y branding
get_dominant_colors('/Users/yepz/jovenesstem/website/Portada.png')
# También analizar la imagen del libro para colores complementarios
get_dominant_colors('/Users/yepz/jovenesstem/website/FRON FINAL FIXED V3.png')
