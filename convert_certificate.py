
import pypdf
from PIL import Image
import io

def convert_pdf_to_image(pdf_path, output_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        # Check if there are images in the first page resources
        page = reader.pages[0]
        
        # This is a basic extraction. For a full render we'd need pdf2image which requires poppler.
        # Since we might not have poppler, let's see if we can extract the main image if the certificate is effectively an image in a PDF wrapper.
        
        if '/XObject' in page['/Resources']:
            xObject = page['/Resources']['/XObject'].get_object()
            for obj in xObject:
                if xObject[obj]['/Subtype'] == '/Image':
                    size = (xObject[obj]['/Width'], xObject[obj]['/Height'])
                    data = xObject[obj].get_data()
                    
                    # Try to save content
                    try:
                        mode = "RGB" if xObject[obj]['/ColorSpace'] == '/DeviceRGB' else "P"
                        if '/Filter' in xObject[obj]:
                            if xObject[obj]['/Filter'] == '/DCTDecode':
                                img = open(f"{output_path}.jpg", "wb")
                                img.write(data)
                                img.close()
                                print(f"Saved {output_path}.jpg")
                                return
                            elif xObject[obj]['/Filter'] == '/FlateDecode':
                                img = Image.frombytes(mode, size, data)
                                img.save(f"{output_path}.png")
                                print(f"Saved {output_path}.png")
                                return
                    except Exception as e:
                        print(f"Error extracting image object: {e}")
                        
        print("Could not extract simple image from PDF. It might be vector based.")
        
    except Exception as e:
        print(f"Error: {e}")

convert_pdf_to_image('CertificadojóvenesSTEM.pdf', 'website/certificate_preview')
