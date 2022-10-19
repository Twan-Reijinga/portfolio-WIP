import React, { FC } from 'react';
import './App.css';
import HighlitedText from './components/HighlightedText';

const App: FC = () => {
  return (
    <div className="App">
      <HighlitedText>Hello world!</HighlitedText>
    </div>
  );
};

export default App;
