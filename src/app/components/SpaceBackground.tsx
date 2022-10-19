import React, { FC } from 'react';
import Star from './Star';

interface starProps {
  top: Number;
  left: Number;
  size: Number;
}

const stars: Array<starProps> = [
  {
    top: 20,
    left: 5,
    size: 7,
  },
  {
    top: 10,
    left: 20,
    size: 5,
  },
  {
    top: 12,
    left: 40,
    size: 8,
  },
  {
    top: 15,
    left: 60,
    size: 8,
  },
  {
    top: 40,
    left: 65,
    size: 4,
  },
  {
    top: 45,
    left: 85,
    size: 6,
  },
  {
    top: 13,
    left: 90,
    size: 5,
  },
  {
    top: 65,
    left: 20,
    size: 5,
  },
  {
    top: 90,
    left: 10,
    size: 4,
  },
  {
    top: 80,
    left: 55,
    size: 6,
  },
  {
    top: 70,
    left: 70,
    size: 3,
  },
  {
    top: 60,
    left: 95,
    size: 4,
  },
];

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
