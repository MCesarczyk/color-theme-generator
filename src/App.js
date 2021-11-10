import logo from './logo.svg';
import './App.css';
import { colorsCalculate } from './utils/colorsCalculate';
import ColorPalette from './ColorPalette';

const App = () => {
  const primary = colorsCalculate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hold your colors
        </a>
        <ColorPalette color={primary} />
      </header>
    </div>
  );
}

export default App;
