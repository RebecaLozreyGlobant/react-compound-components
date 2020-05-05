import React from 'react';
import './App.css';
import AlifeLogo from './components/AlifeLogo'
import Toggle from './components/Toggle'


function App() {
  const initialValue = false;
  return (
    <div className="App">
        <h2>Compound Components</h2>
        <Toggle initialValue={initialValue}>
          <Toggle.On>
            <div>Running</div>
          </Toggle.On>
  
          <Toggle.Off>
            <div>Stopped</div>
          </Toggle.Off>
  
          <Toggle.Button />
        </Toggle>
    </div>
  );
}

export default App;
