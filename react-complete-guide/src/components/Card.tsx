import React from 'react';

interface CardProps {
    children: React.ReactElement
}

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Card;
