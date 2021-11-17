import { useCallback, useState } from 'react';
import ColorPalette from './core/ColorPalette';
import Input from './core/Input';
import { Logo } from './shared/Logo';
import { ReactComponent as ReactLogo } from "./assets/reactLogo.svg";
import { colorsCalculate } from './utils/colorsCalculate';
import { debounce } from './utils/debounce';
import { Wrapper } from './shared/Wrapper';
import Headline from './shared/Headline';
import { Body } from './shared/Body';
import Footer from './shared/Footer';

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
    <Wrapper>
      <Body>
        <Logo color={primary} >
          <ReactLogo height="100%" />
        </Logo>
        <Headline
          title="Choose your primary color"
          value={primary}
          >
        </Headline>
        <Input
          value={primary}
          onChange={e => handleChange(e.target.value)}
        />
        <ColorPalette palette={palette} />
        <Footer />
      </Body>
    </Wrapper>
  );
}

export default App;
