import React, { useState } from 'react';
import { Row, SoundsProvider, createSounds, Link, Heading, Arwes, Frame, ThemeProvider, createTheme, Footer } from 'arwes';
import Countdown from './components/Countdown/Countdown';
import ReleaseMsg from './components/ReleaseMsg/ReleaseMsg';
import './App.css';

const sounds = {
  shared: { volume: 1, },
  players: {
    deploy: {
      sound: { src: ['/deploy.mp3'] },
    },
  }
};

function App() {
  const [released, setReleased] = useState(false);

  function handleReleased(newReleased) {
    setReleased(newReleased);
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Arwes background='/cyber-bg.png' pattern='/glow.png' animate>
          <div className='App'>
            <Row col s={6} m={6} offset={['s3', 'm3']}>
              <Heading node='h1'>Cyberpunk 2077 Release</Heading>
              <Frame
                level={3}
                corners={4}
                layer='primary'
              >
                {
                  released ?
                    <ReleaseMsg />
                    :
                    <Countdown releaseHandler={handleReleased} />
                }
              </Frame>
            </Row>
            <Footer style={{ position: 'absolute', bottom: 0 }}>
              <Link href='https://github.com/v-glb/cyberpunk2077-countdown'>Github</Link>
            </Footer>
          </div>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider >
  );
}

export default App;
