import pypdf

# Extract pages 2 to 6 (index 1 to 5) as individual PDFs
reader = pypdf.PdfReader("SPA v1 Alineado RENAC BlueBook.pdf")

for i in range(1, 6): 
    writer = pypdf.PdfWriter()
    writer.add_page(reader.pages[i])
    with open(f"page_{i+1}.pdf", "wb") as f:
        writer.write(f)
        print(f"Created page_{i+1}.pdf")
