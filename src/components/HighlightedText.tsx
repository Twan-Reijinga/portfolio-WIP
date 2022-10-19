import React, { FC } from 'react';

type Props = {
  children?: string;
};

const HighlitedText: FC<Props> = ({ children }) => (
  <div className="HighlitedText">
    <h1>{children}</h1>
  </div>
);

export default HighlitedText;
