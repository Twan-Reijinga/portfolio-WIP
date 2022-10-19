import React, { FC } from 'react';
import './styles/App.css';
import HighlitedText from './components/HighlightedText';
import SpaceBackground from './components/SpaceBackground';

const App: FC = () => {
  return (
    <div>
      <SpaceBackground></SpaceBackground>
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
