import React, { FC } from 'react';
import Star from './Star';
import FullCircle from './FullCircle';
import HalfCircle from './HalfCircle';
import starStyles from '../config/star-style.json';
import circleStyles from '../config/circle-style.json';

interface styleProps {
  top: Number;
  left: Number;
  size: Number;
}

interface halfCircleProps extends styleProps {
  rotation: Number;
}

const stars: Array<styleProps> = starStyles.stars;
const fullCircleStyle: Array<styleProps> = circleStyles.fullCircles;
const halfCircleStyle: Array<halfCircleProps> = circleStyles.halfCircles;

const SpaceBackground: FC = () => {
  return (
    <div>
      {stars.map((style, index) => {
        return <Star key={index} top={style.top} left={style.left} size={style.size} />;
      })}

      {fullCircleStyle.map((style, index) => {
        return <FullCircle key={index} top={style.top} left={style.left} size={style.size} />;
      })}

      {halfCircleStyle.map((style, index) => {
        return <HalfCircle key={index} top={style.top} left={style.left} size={style.size} rotation={style.rotation} />;
      })}
    </div>
  );
};

export default SpaceBackground;
