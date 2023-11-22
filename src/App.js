import React, { useState, useRef } from 'react';

import './App.css';

function App() {
  const inputRef = useRef();
  const [controlValue, setControlValue] = useState('');

  const changeValue = (e) => {
    const { value } = e.target;
    clearTimeout(inputRef.current);
    inputRef.current = setTimeout(()=>{
      console.log('Debounce Value', value);
    },1000)
  };

  const changeValueControlled = (e) => {
    const { value } = e.target;
    setControlValue(value);
    changeValue(e);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor='unControl'>UnControlled Input</label>
        <input type='text' id='unControl' ref={inputRef} onChange={changeValue} />
      </div>
      <div>
        <label htmlFor='control'>Controlled Input</label>
        <input type='text' id='control' value={controlValue} onChange={changeValueControlled} />
      </div>
    </div>
  );
}

export default App;
