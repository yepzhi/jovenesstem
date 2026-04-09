
import fitz  # PyMuPDF

pdf_path = '/Users/yepz/jovenesstem/SPA v1 Alineado RENAC BlueBook.pdf'
doc = fitz.open(pdf_path)

# Extract first 5 pages to find the index/TOC
for i in range(5):
    page = doc.load_page(i)
    pix = page.get_pixmap()
    pix.save(f"website/book_page_{i}.png")
    print(f"Saved website/book_page_{i}.png")
