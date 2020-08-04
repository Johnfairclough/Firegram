import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/Uploadform';
import ImageGrid from './comps/ImageGrid';
import Modal from '/comps/Modal';


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
      <Modal selectedImg={selectedImg} />
    </div>
  );
}

export default App;
