import { useEffect, useCallback, useState } from 'react';
import ColorPalette from './core/ColorPalette';
import Input from './core/Input';
import { Logo } from './shared/Logo';
import { ReactComponent as ReactLogo } from "./assets/reactLogo.svg";
import { calculateColors } from './utils/calculateColors';
import { debounce } from './utils/debounce';
import { Wrapper } from './shared/Wrapper';
import Headline from './shared/Headline';
import { Body } from './shared/Body';
import Footer from './shared/Footer';

const App = () => {
  const [state, setState] = useState('loading');
  const [primary, setPrimary] = useState('#3282c8');
  const prefix = "@ant-primary-";
  const palette = calculateColors(primary);

  const handleChange = useCallback(
    debounce(value => {
      setPrimary(value);
      console.log(`Primary color: ${value}`);
    }, 500),
    []
  );

  const loadApp = () => {
    setTimeout(() => {
      setState('success');
    }, 2_000);
  };

  useEffect(() => {
    console.log(`State: ${state}`);
  }, [state]);

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <Wrapper>
      {state === 'loading' && <div style={{ margin: 'auto', marginTop: '50vh', color: '#fff', fontSize: '48px' }}>Loading...</div>}
      {state === 'success' && <Body>
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
        <ColorPalette
          palette={palette}
          prefix={prefix}
        />
        <Footer />
      </Body>}
    </Wrapper>
  );
}

export default App;
