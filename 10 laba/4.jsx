import React, { useState } from 'react';

const Flashlight = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  return (
    <div style={{ backgroundColor: isRed ? 'red' : 'green', width: '200px', height: '200px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{ fontSize: '1.5em', padding: '10px 20px', border: 'none', borderRadius: '5px', background: 'white', color: 'black', cursor: 'pointer' }} onClick={toggleColor}>Нажми меня</button>
    </div>
  );
};

export default Flashlight;

import React from 'react';
import Flashlight from './Flashlight';

const App = () => {
  return (
    <div>
      <h1>Фонарик</h1>
      <Flashlight />
    </div>
  );
};

export default App;