import React from 'react';
import './App.css';
import './index.css';
import ImageDropzone from './component/ImageDropzone';
import CompressedImagesDisplay from './component/CompressedImageDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageDropzone />
        <CompressedImagesDisplay />
      </header>
    </div>
  );
}

export default App;