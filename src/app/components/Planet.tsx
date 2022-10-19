import React, { CSSProperties, FC } from 'react';

interface Props {
  top: number;
  left: number;
  size: number;
  imageName: string;
}

const Planet: FC<Props> = ({ top, left, size, imageName }) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top + 'vh',
    left: left + '%',
    width: size + '%',
  };

  return <img src={require('../assets/images/' + imageName)} style={style} />;
};

export default Planet;
