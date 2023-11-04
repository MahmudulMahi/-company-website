import React from 'react';

const Avater = ({ ava }) => {
  const { name,image } = ava
  return (
    <div>
      <div >
        <div className="">
          <img src={image} />
          
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Avater;
