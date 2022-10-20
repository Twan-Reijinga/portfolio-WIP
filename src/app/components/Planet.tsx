import React, { CSSProperties, FC } from 'react';

interface Props {
  top: number;
  left: number;
  size: number;
  responsiveSize: number;
  imageName: string;
}

const Planet: FC<Props> = ({ top, left, size, responsiveSize, imageName }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    width: `calc(${size}px + ${responsiveSize}vmin)`,
  };

  return <img src={require('../assets/images/' + imageName)} style={style} />;
};

export default Planet;
