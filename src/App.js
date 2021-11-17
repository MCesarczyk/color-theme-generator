import logo from './logo.svg';
import './App.css';
import { colorsCalculate } from './utils/colorsCalculate';
import ColorPalette from './ColorPalette';
import Input from './Input';
import { useEffect, useState } from 'react';

const App = () => {
  const [primary, setPrimary] = useState('#3282c8');
  const palette = colorsCalculate(primary);

  useEffect(() => {
    console.log(`Primary: ${primary}`);
  }, [primary]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        Choose your primary color
        <Input
          value={primary}
          onChange={e => setPrimary(e.target.value)}
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
