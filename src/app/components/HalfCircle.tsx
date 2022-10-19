import React, { FC, CSSProperties } from 'react';
import { ReactComponent as SVG } from '../assets/images/half-circle.svg';

interface Props {
  top: Number;
  left: Number;
  size: Number;
  rotation: Number;
}

const HalfCircle: FC<Props> = ({ top, left, size, rotation }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    width: size + '%',
    transform: `rotate(${rotation}deg)`,
  };

  return <SVG style={style}></SVG>;
};

export default HalfCircle;
