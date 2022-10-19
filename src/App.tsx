import React, { FC } from 'react';
import './app/styles/App.css';
import HighlitedText from './app/components/HighlightedText';
import Planet from './app/components/Planet';
import SpaceBackground from './app/components/SpaceBackground';

interface planetProps {
  top: number;
  left: number;
  size: number;
  imageName: string;
}

const planetStyle: planetProps = {
  top: 60,
  left: 70,
  size: 20,
  imageName: 'world.gif',
};

const App: FC = () => {
  return (
    <div>
      <SpaceBackground></SpaceBackground>
      <Planet top={planetStyle.top} left={planetStyle.left} size={planetStyle.size} imageName={planetStyle.imageName} />
      <div className="title-container">
        <HighlitedText> Hello world! </HighlitedText>
        <h1 className="sub-title">
          I'm Twan<span>.</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
