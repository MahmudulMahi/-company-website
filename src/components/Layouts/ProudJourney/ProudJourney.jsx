import proudicon1 from '../../../../public/asset/Rating.png'
import proudicon2 from '../../../../public/asset/Global Businessman.png'
import proudicon3 from '../../../../public/asset/Vector.png'
import proudicon4 from '../../../../public/asset/Time Zone.png'
import proudicon5 from '../../../../public/asset/Vector (1).png'

const ProudJourney = () => {
  return (
    <div>
      <div className='text-[#4169E1] text-3xl text-center font-semibold'>
        ~We Are Proud of Our Journey~
      </div>

      <div className='grid grid-cols-5 gap-4'>
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <img src={proudicon1} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2+</p>
            <p className='text-[24px]'>Years of  <br/>
            Experience</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <img src={proudicon2} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2.5k+</p>
            <p className='text-[24px]'>Of customers <br/>
            worldwide</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <img src={proudicon3} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2.5k+</p>
            <p className='text-[24px]'>Projects <br/>
            Delivered</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <img src={proudicon4} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>13</p>
            <p className='text-[24px]'>Time zone <br/>
            covered</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <img src={proudicon5} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>4.9/5</p>
            <p className='text-[24px]'>Customer <br/>
              rating</p>
          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}


      </div>

    </div>
  );
};

export default ProudJourney;