import React, { useState } from 'react';
import { SoundsProvider, createSounds, Link, Header, Arwes, Frame, ThemeProvider, createTheme, Footer } from 'arwes';
import Countdown from './components/Countdown/Countdown';
import ReleaseMsg from './components/ReleaseMsg/ReleaseMsg';
import './App.css';
import bgImage from './images/cyber-bg.png';
import glowImage from './images/glow.png';
import deploySound from './sounds/deploy.mp3';
import { Row } from 'arwes/lib/Grid';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

const theme = {
  typography: {
    headerFontFamily: '"Electrolize", "sans-serif"',
    fontFamily: '"Titillium Web", "sans-serif"'
  }
};

const sounds = {
  shared: { volume: 1, },
  players: {
    deploy: {
      sound: { src: [deploySound] },
    },
  }
};

function App() {
  const [released, setReleased] = useState(false);

  function handleReleased(newReleased) {
    setReleased(newReleased);
  }

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Arwes background={bgImage} pattern={glowImage} animate>
          <Header animate>
            <h1 style={{ textShadow: '0 0 4px rgba(161,236,251,0.65)', textAlign: 'center', marginTop: '50px', }} >
              Cyberpunk 2077 Release
            </h1>
          </Header>
          <div className='App'>
            <Row col s={12}>
              <Frame
                level={3}
                corners={4}
                layer='primary'
                style={{ margin: 'auto' }}
              >
                {
                  released ?
                    <ReleaseMsg />
                    :
                    <Countdown releaseHandler={handleReleased} />
                }
              </Frame>
            </Row>

          </div>
          <BrowserView>
            <Footer style={{ textAlign: 'center', position: 'absolute', bottom: '0px', width: '100%'}}>
              <Link href='https://github.com/v-glb/cyberpunk2077-countdown'>Built by V</Link>
            </Footer>
          </BrowserView>
          <MobileView>
            <Footer style={{ textAlign: 'center' }}>
              <Link href='https://github.com/v-glb/cyberpunk2077-countdown'>Built by V</Link>
            </Footer>
          </MobileView>
        </Arwes>
      </SoundsProvider >
    </ThemeProvider >
  );
}

export default App;
