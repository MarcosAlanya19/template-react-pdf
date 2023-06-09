import BtnDownloadPDF from './components/BtnDownloadPDF';
import ViewerPDF from './components/ViewerPDF';

const App: React.FC = () => {
  return (
    <div className='mx-2 my-5'>
        <BtnDownloadPDF />
        <div className="grid border mt-5">
          <ViewerPDF />
        </div>
    </div>
  );
};

export default App;
