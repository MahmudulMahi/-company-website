import { useEffect, useState } from 'react';

import Ourbordcard from './Ourbordcard/Ourbordcard';

import firstprofail from './../../../../public/asset/mahmudul.jpg'

const OurBoard = () => {

  const [profail, setprofail] = useState([])

  useEffect(() => {
    fetch('/profail.json')
      .then(res => res.json())
      .then(data => setprofail(data))
  }, [])
  return (
    <div className="mt-14 ">
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold mt-10 mb-12'><span className='shadow-2xl rounded-full p-0 md:p-3'>~ Our Board ~</span></h2>
      <div className='grid grid-cols-1 justify-items-center '>
        <div className="card card-compact w-96 md:w-80 lg:w-96 h-96 lg:h-96 bg-base-100 shadow-xl bg-cover relative " style={{

          backgroundImage: "url('/asset/profailpic.png')", backgroundSize: "320px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: ""
        }}>
          <div>
            <figure><img className='w-52 h-56 rounded-full absolute top-8 left-[78px] ' src={firstprofail} alt="" /></figure>
          </div>
          <div className="card-body absolute bottom-0 ml-5">
            <h2 className="card-title">Ashraful Islam Spondon</h2>
            <p className='text-[#4169E1] font-bold'>Chief Executive Officer</p>

          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 mt-12'>


        {
          profail.map(pro => <Ourbordcard key={pro.id} className='flex-1 max-w-[calc(50%-1rem)] m-2' pro={pro}></Ourbordcard>)
        }
      </div>


    </div>
  );
};

export default OurBoard;