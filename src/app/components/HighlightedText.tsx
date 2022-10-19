import React, { FC } from 'react';

type Props = {
  children?: string;
};

const HighlitedText: FC<Props> = ({ children }) => (
  <div className="highlited-container">
    <h1 className="highlited-text">{children}</h1>
  </div>
);

export default HighlitedText;
