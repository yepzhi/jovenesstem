
import pypdf

def extract_pages(pdf_path, start, end):
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i in range(start, min(end, len(reader.pages))): 
        page = reader.pages[i]
        text += f"\n--- Page {i+1} ---\n"
        text += page.extract_text()
    return text

if __name__ == "__main__":
    pdf_path = "/Users/yepz/jovenesstem/SPA v1 Alineado RENAC BlueBook.pdf"
    # Extract pages 10 to 50 (approx chapter 1 range)
    content = extract_pages(pdf_path, 10, 50)
    print(content)
