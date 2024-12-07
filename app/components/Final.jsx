"use client";
import { pdf } from "@react-pdf/renderer";
import PDFDocument from "./PDFSample";
/* import PDFTable from "./PDFTable"; */
const DownloadPDF = async () => {
  const blob = await pdf(<PDFDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "example.pdf";
  link.click();
};

const MyPDFPage = () => {
  return (
    <div>
      <button onClick={DownloadPDF}>Download PDF</button>
    </div>
  );
};

export default MyPDFPage;
