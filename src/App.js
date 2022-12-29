import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Radio from './Components/Radio'
import Select from './Components/Select';


// import { JsonEditor as Editor } from 'jsoneditor-react';
// import 'jsoneditor-react/es/editor.min.css';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';

//temp data
import radio_data from './radio_data.js'
import select_data from './select_data.js'

function App() {
  const [uiSchema, setUiSchema] = useState({});

  const handleChange = (data) => {
    setUiSchema(data.jsObject);
    console.log(data);
  };

  return (
    <div className="App">
      <div className="left-section">
        <input type='text-area'></input>
      </div>
      <div className="right-section">
        <Input label="Pasta Name"/>
        <Radio obj={radio_data}/>
        <Select obj={select_data}/>
      </div>
    </div>
  );
}

export default App;
