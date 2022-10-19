import React, { FC } from 'react';
import './styles/App.css';
import HighlitedText from './components/HighlightedText';

const App: FC = () => {
  return (
    <div className="App">
      <HighlitedText> Hello world! </HighlitedText>
      <h1 className="sub-title">
        I'm Twan<span>.</span>
      </h1>
    </div>
  );
};

export default App;
