import React, { FC, CSSProperties } from 'react';
import { ReactComponent as SVG } from '../assets/images/full-circle.svg';

interface Props {
  top: Number;
  left: Number;
  size: Number;
}

const FullCircle: FC<Props> = ({ top, left, size }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    width: size + '%',
  };

  return <SVG style={style}></SVG>;
};

export default FullCircle;
