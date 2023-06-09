import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFContent } from './PDFContent';

const BtnDownloadPDF = () => {
  return (
    <PDFDownloadLink
      className='bg-orange-500 text-white py-2 px-4 rounded uppercase font-bold'
      document={<PDFContent />}
      fileName='OrdenDeCompra.pdf'
    >
      {({ loading }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
    </PDFDownloadLink>
  );
};

export default BtnDownloadPDF;
