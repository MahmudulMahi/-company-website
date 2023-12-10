import React from 'react';

const Ourbordcard = ({pro}) => {
  const{name,image,designation}=pro
  return (
    <div >
 
     
    <div className="card card-compact w-96 md:w-80 lg:w-96 h-96  bg-base-100 shadow-xl bg-cover relative p-1 " style={{
    
    backgroundImage: "url('/asset/profailpic.png')", backgroundSize: "320px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: ""
  }}>
      <div>
      <figure><img className='w-[240px] h-[240px] rounded-full absolute top-[26px] left-[60px] border-blue-600 border-[6px]' src={image} alt="" /></figure>
      </div>
      <div className="card-body absolute bottom-0 ml-4">
        <h2 className="card-title">{name}</h2>
        <p className='text-[#4169E1] font-semibold'>{designation}</p>
     
      </div>
    </div>
  </div>
  );
};

export default Ourbordcard;