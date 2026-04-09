
import fitz  # PyMuPDF
import shutil
import os

def prepare_assets():
    # Paths
    pdf_path = '/Users/yepz/jovenesstem/page_2.pdf'
    cover_src = '/Users/yepz/jovenesstem/Portada.png'
    
    website_dir = '/Users/yepz/jovenesstem/website'
    img_out_path = os.path.join(website_dir, 'book_page_2.png')
    cover_out_path = os.path.join(website_dir, 'book_cover_final.png')

    # Convert PDF Page 2 (index 0 if single page PDF, or index 1 if multi? User said page_2.pdf IS the page)
    # Assuming page_2.pdf is a single page file containing page 2.
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0) # Load first page of the file
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # 2x zoom for quality
        pix.save(img_out_path)
        print(f"Successfully converted PDF to {img_out_path}")
    except Exception as e:
        print(f"Error converting PDF: {e}")

    # Copy Cover
    try:
        shutil.copy(cover_src, cover_out_path)
        print(f"Successfully copied cover to {cover_out_path}")
    except Exception as e:
        print(f"Error copying cover: {e}")

if __name__ == "__main__":
    prepare_assets()
