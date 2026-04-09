
from PIL import Image
import math

def analyze_logo_colors(image_path):
    try:
        img = Image.open(image_path).convert('RGB')
        width, height = img.size
        
        # We'll sample colors from the text areas manually based on typical logo positioning
        # knowing the image is likely cropped or centered.
        # But to be safe, let's just find the distinct non-white colors.
        
        colors = img.getdata()
        non_white_colors = [c for c in colors if sum(c) < 700] # filtering out whites/light grays
        
        # Simple clustering or sampling isn't enough for the specific gradient order.
        # Let's just find the "Reddest" and the "Bluest" and "Purples".
        
        reds = []
        blues = []
        purples = []
        
        for c in non_white_colors:
            r, g, b = c
            if r > g + 50 and r > b + 50: # Reddish
                reds.append(c)
            elif b > r + 20 and b > g + 20 and r < 100: # Deep Blue (STEM)
                blues.append(c)
            elif r > g and b > g and abs(r-b) < 60: # Purple-ish/Dark Wine
                purples.append(c)
                
        def avg_color(clist):
            if not clist: return (0,0,0)
            l = len(clist)
            return (sum(x[0] for x in clist)//l, sum(x[1] for x in clist)//l, sum(x[2] for x in clist)//l)

        # Get representative colors
        # For the red gradient start
        start_red = sorted(reds, key=lambda x: x[0], reverse=True)[0] if reds else (230, 60, 40)
        
        # For the blue STEM
        stem_blue = avg_color(blues) if blues else (0, 71, 187)
        
        # For the purple end of jovenes
        # We want a dark purple/wine color
        end_purple = avg_color(purples) if purples else (80, 40, 80)

        print(f"Start Red: #{start_red[0]:02x}{start_red[1]:02x}{start_red[2]:02x}")
        print(f"End Purple: #{end_purple[0]:02x}{end_purple[1]:02x}{end_purple[2]:02x}")
        print(f"STEM Blue: #{stem_blue[0]:02x}{stem_blue[1]:02x}{stem_blue[2]:02x}")

    except Exception as e:
        print(f"Error: {e}")

analyze_logo_colors('logo_ref.png')
