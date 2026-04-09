
import pypdf
from PIL import Image
from collections import Counter
import os

def extract_colors(image_path, num_colors=5):
    try:
        print(f"--- Analyzing {image_path} ---")
        img = Image.open(image_path).convert('RGB')
        # Simple analysis: center crop to avoid white borders if any
        w, h = img.size
        # img = img.crop((w//4, h//4, 3*w//4, 3*h//4))
        
        colors = img.getdata()
        # Filter out near-whites
        valid_colors = [c for c in colors if sum(c) < 750]
        
        if not valid_colors:
            print("Only white/light colors found.")
            return

        counts = Counter(valid_colors)
        common = counts.most_common(num_colors)
        
        for color, count in common:
            hex_c = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"RGB: {color} HEX: {hex_c} Count: {count}")
            
    except Exception as e:
        print(f"Error analyzing image: {e}")

def extract_pdf_toc(pdf_path):
    print(f"\n--- Analyzing PDF: {pdf_path} ---")
    try:
        reader = pypdf.PdfReader(pdf_path)
        # Try to read outline first
        if reader.outline:
            print("Outline found:")
            def print_outline(outline, level=0):
                for item in outline:
                    if isinstance(item, list):
                        print_outline(item, level + 1)
                    elif isinstance(item, pypdf.generic.Destination):
                        print("  " * level + f"- {item.title}")
            print_outline(reader.outline)
        else:
            print("No outline found. Scanning first 20 pages for keywords...")
            text_content = ""
            for i in range(min(20, len(reader.pages))):
                text_content += reader.pages[i].extract_text() + "\n"
            
            lines = text_content.split('\n')
            for line in lines:
                if any(x in line.lower() for x in ['capítulo', 'unidad', 'contenido', 'índice', 'tema']):
                    print(line.strip())

    except Exception as e:
        print(f"Error analyzing PDF: {e}")

# Run analysis
extract_colors('website/logo_ref_v2.png')
extract_colors('website/siip_ref.png')

extract_pdf_toc('SPA v1 Alineado RENAC BlueBook.pdf')
extract_pdf_toc('JovenesSTEM Fastrack HMO v1.pdf')
