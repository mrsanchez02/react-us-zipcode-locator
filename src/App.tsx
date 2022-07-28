import React from 'react';
import './App.css';
import { Display } from './components/Display';
import { Form } from './components/Form';
import { ContextProvider } from './context/ZipcodeContext';

function App() {
  return (
    <ContextProvider>
      <div className="AppContainer">
        <h1 className='main__title'>US ZipCode Locator</h1>
        <Form/>
        <Display/>
      </div>
    </ContextProvider>
  );
}

export default App;
