import React, { CSSProperties, FC } from 'react';

interface props {
  top: number;
  left: number;
  size: number;
}

const Star: FC<props> = ({ top, left, size }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    width: size + 'px',
    aspectRatio: 1,
    borderRadius: size + 'px',
    backgroundColor: '#fff',
  };

  return <div style={style}></div>;
};

export default Star;
