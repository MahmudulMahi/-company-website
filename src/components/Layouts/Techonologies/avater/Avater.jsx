import React from 'react';

const Avater = ({ ava }) => {
  const { name,image,thumbnail} = ava
  return (
    <div>
      <div >
        <div className="relative">
          <img src={thumbnail} alt="" />
          <div className='absolute z-10 top-12 left-9'>
          <img src={image} />
          </div>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Avater;

// https://i.ibb.co/v1wvky0/Group-224.png
// https://i.ibb.co/zrLcJ27/Group-228.png
// https://i.ibb.co/vxCHWYB/Group-229.png
// https://i.ibb.co/Rgb4qxm/Group-529-1.png
// https://i.ibb.co/f0p4J0h/Group-529.png
// https://i.ibb.co/RDSC6n5/Group-531.png
// https://i.ibb.co/kJp9k4n/nestjs-1.png
// https://i.ibb.co/JKYB89C/skill-icons-django.png
// https://i.ibb.co/BZgxm4Y/Vector-1.png
