import React from 'react';
import { Link, Heading, Arwes, Frame, ThemeProvider, createTheme, Footer } from 'arwes';
import Countdown from './components/Countdown/Countdown';
import { Row } from 'arwes/lib/Grid';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes background='/cyber-bg.png' pattern='/glow.png' animate>
        <div className='App'>
          <Row col s={6} m={4} offset={['s3', 'm4']}>
            <Heading node='h1'>Cyberpunk 2077 - Countdown</Heading>
          </Row>
          <Row col s={6} m={6} offset={['s3', 'm3']}>
            <Frame
              animate={true}
              level={3}
              corners={4}
              layer='primary'
            >
              <Countdown />
            </Frame>
          </Row>
          <Footer style={{ position: 'absolute', bottom: 0 }} animate >
            <Link href='https://github.com/v-glb/cyberpunk2077-countdown'>Github</Link>
          </Footer>
        </div>
      </Arwes>
    </ThemeProvider >
  );
}

export default App;
