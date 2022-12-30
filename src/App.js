import React, { useState } from 'react';
import render from './Components/render';
import './App.css';
import data from './data'

function App() {
  const [uiSchema, setUiSchema] = useState(data);

  const handleChange = (data) => {
    setUiSchema(data.jsObject);
  };

  return (
    <div className="App">
      <div className="left-section">
        <textarea onChange={(e)=> setUiSchema(eval('('+e.target.value+')')) }></textarea>
      </div>
      <div className="right-section">
        {uiSchema.map((item)=>
          <div className='main_container'>
            {render(item)}
          </div>
          )}
      </div>
    </div>
  );
}

export default App;
