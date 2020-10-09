import React, { useState } from 'react';
import { SoundsProvider, createSounds, Link, Header, Arwes, Frame, ThemeProvider, createTheme, Footer } from 'arwes';
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
          <Header animate>
            <h1 style={{ textShadow: '0 0 4px rgba(161,236,251,0.65)', textAlign: 'center', marginTop: '50px',  }} >
              Cyberpunk 2077 Release
            </h1>
          </Header>
          <div className='App'>
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
            <Footer style={{ bottom: 0 }}>
              <Link href='https://github.com/v-glb/cyberpunk2077-countdown'>Built by V</Link>
            </Footer>
          </div>
        </Arwes>
      </SoundsProvider >
    </ThemeProvider >
  );
}

export default App;
