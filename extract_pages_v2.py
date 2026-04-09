import pypdf
from pdf2image import convert_from_path

# Since we might not have pdf2image or poppler installed, let's try pypdf to extract text or just rely on the user having sips (macOS)
# Actually, the previous turn used 'sips' after extracting a single page pdf.
# Let's extract pages 2, 3, 4, 5 as separate PDFs first.

reader = pypdf.PdfReader("SPA v1 Alineado RENAC BlueBook.pdf")

for i in range(1, 6): # Pages 2 to 6 (0-indexed 1 to 5)
    writer = pypdf.PdfWriter()
    writer.add_page(reader.pages[i])
    with open(f"page_{i+1}.pdf", "wb") as f:
        writer.write(f)
