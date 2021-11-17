import { useCallback, useState } from 'react';
import ColorPalette from './ColorPalette';
import Input from './Input';
import { Logo } from './Logo';
import { ReactComponent as ReactLogo } from "./assets/reactLogo.svg";
import { colorsCalculate } from './utils/colorsCalculate';
import { debounce } from './helpers/debounce';
import './App.css';

const App = () => {
  const [primary, setPrimary] = useState('#3282c8');
  const palette = colorsCalculate(primary);

  const handleChange = useCallback(
    debounce(value => {
      setPrimary(value);
      console.log(value);
    }, 500),
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <Logo color={primary} >
          <ReactLogo height="100%" />
        </Logo>

        Choose your primary color
        <p>{primary}</p>
        <Input
          value={primary}
          onChange={e => handleChange(e.target.value)}
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
