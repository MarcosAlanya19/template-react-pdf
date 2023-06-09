import { PDFViewer } from '@react-pdf/renderer';
import { PDFContent } from './PDFContent';

const ViewerPDF = () => {
  return (
    <PDFViewer className='w-full h-[45vw]'>
      <PDFContent />
    </PDFViewer>
  );
};

export default ViewerPDF;
