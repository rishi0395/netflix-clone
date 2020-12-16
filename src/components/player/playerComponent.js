import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Inner,
  Close,
  Overlay,
  Button
} from './styles/playerStyles';
import ReactDOM from 'react-dom';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video id='netflix-player' controls>
            <source src={src} type='video/mp4' />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = function PlayerButton({ src }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};
