
import pypdf

def extract_text(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    # Assuming Chapter 1 is within the first 25 pages
    for i in range(min(25, len(reader.pages))): 
        page = reader.pages[i]
        page_text = page.extract_text()
        text += f"\n--- Page {i+1} ---\n"
        text += page_text
    return text

if __name__ == "__main__":
    pdf_path = "/Users/yepz/jovenesstem/SPA v1 Alineado RENAC BlueBook.pdf"
    try:
        content = extract_text(pdf_path)
        print(content)
    except Exception as e:
        print(f"Error: {e}")
