import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(null, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('./pdf-extracted.txt', pdfParser.getRawTextContent());
    console.log("Extracted to pdf-extracted.txt");
});

pdfParser.loadPDF("./docs/Buku Program Kerja KMTETI 2026-Final.pdf");
