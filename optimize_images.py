from PIL import Image
import os

files = [
    "Bluebookv1 SPA-Front Cover.png",
    "Bluebookv1 SPA-Back Cover.png",
    "book_cover_final.png",
    "Portada.png"
]

for f in files:
    if os.path.exists(f):
        try:
            img = Image.open(f)
            # Resize if width > 1000 (Aggressive resizing for performance as requested)
            if img.width > 1000:
                ratio = 1000 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1000, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {f} to 1000px width")
            
            # Save as _opt.png with optimization
            new_name = f.replace(".png", "_opt.png")
            img.save(new_name, "PNG", optimize=True)
            print(f"Optimized {f} -> {new_name}")
        except Exception as e:
            print(f"Error processing {f}: {e}")
    else:
        print(f"File {f} not found")
