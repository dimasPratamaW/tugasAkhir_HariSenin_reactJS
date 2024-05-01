// App.jsx
import React from 'react';
import Button from './Component/ComplexMeetIntuitif.jsx';

const App = () => {
  const handleButtonClick = () => {
    // Logika ketika tombol ditekan
  };

  return (
    <div>
      <h1>Contoh Penggunaan Komponen Button</h1>
      <Button label="Klik Saya" onClick={handleButtonClick} />
    </div>
  );
};

export default App;
