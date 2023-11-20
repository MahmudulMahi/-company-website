import React from 'react';
import AservicesCard from '../Layouts/AservicesCard/AservicesCard';

const Servicescard = ({servicescards}) => {
  // console.log(servicescards)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        servicescards.map(aservicescards=> <AservicesCard key={aservicescards.id} aservicescards={aservicescards} ></AservicesCard>)
      }
    </div>
  );
};

export default Servicescard;