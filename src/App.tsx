import React, { FC } from 'react';
import './app/styles/App.css';
import HighlitedText from './app/components/HighlightedText';
import Planet from './app/components/Planet';
import SpaceBackground from './app/components/SpaceBackground';
import planetStyles from './app/config/planet-style.json';

const App: FC = () => {
  const worldStyle = planetStyles.world;
  return (
    <div>
      <SpaceBackground></SpaceBackground>
      <div className="title-container">
        <HighlitedText> Hello world! </HighlitedText>
        <h1 className="sub-title">
          I'm Twan<span>.</span>
        </h1>
      </div>
      <Planet
        top={worldStyle.top}
        left={worldStyle.left}
        size={worldStyle.size}
        responsiveSize={worldStyle.responsiveSize}
        imageName={worldStyle.imageName}
      />
    </div>
  );
};

export default App;
