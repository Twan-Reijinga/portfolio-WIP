import React, { FC, CSSProperties } from 'react';

interface Props {
  top: String;
  left: String;
  size: String;
}

const HighlitedText: FC<Props> = ({ top, left, size }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    height: size + 'px',
    aspectRatio: 1,
    borderRadius: size + 'px',
    backgroundColor: '#fff',
  };

  return <div style={style}></div>;
};

export default HighlitedText;
