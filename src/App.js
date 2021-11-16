import logo from './logo.svg';
import './App.css';
import { colorsCalculate } from './utils/colorsCalculate';
import ColorPalette from './ColorPalette';
import Input from './Input';
import { useCallback, useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [primary, setPrimary] = useState('#3282c8');
  const palette = colorsCalculate(primary);

  const handleChange = useCallback(({ target }) => {
    const payload = target.value;

    setValue(payload);

    payload.length === 7 && setPrimary(payload);
  }, [value]);

  useEffect(() => {
    console.log(`Primary: ${primary}`);
  }, [primary]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        Choose your primary color
        <Input
          value={value}
          onChange={handleChange}
        />
        <ColorPalette palette={palette} />
        <a
          className="App-link"
          href="https://ant.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ant Design
        </a>
      </header>
    </div>
  );
}

export default App;
