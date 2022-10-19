import React, { FC, CSSProperties } from 'react';

interface Props {
  top: Number;
  left: Number;
  size: Number;
}

const Star: FC<Props> = ({ top, left, size }) => {
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
