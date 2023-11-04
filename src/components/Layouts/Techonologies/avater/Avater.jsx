import React from 'react';

const Avater = ({ ava }) => {
  const { name,image } = ava
  return (
    <div>
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <img src={image} />
          
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Avater;