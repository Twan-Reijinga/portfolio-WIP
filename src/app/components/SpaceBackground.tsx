import React, { FC } from 'react';
import Star from './Star';
import starPositions from '../config/star-positions.json';

interface starProps {
  top: Number;
  left: Number;
  size: Number;
}

const stars: Array<starProps> = starPositions.stars;

const HighlitedText: FC = () => {
  return (
    <div>
      {stars.map((star, index) => {
        return <Star key={index} top={star.top} left={star.left} size={star.size} />;
      })}
      ;
    </div>
  );
};

export default HighlitedText;
