import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function DoStuffButton() {
  const [buttonText, setButtonText] = useState('Do something');

  useEffect(() => console.log('Use effect was called'));

  function updateButtonText() {
    setButtonText('Loading...');
    window.setTimeout(() => setButtonText('Do something'), 1000);
  }

  return <button onClick={updateButtonText}>{buttonText}</button>;
}

function App() {
  return (
    <div className="App">
      <DoStuffButton />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
