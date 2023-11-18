import profail from '../../../../public/asset/mahmudul.jpg'

const OurBoard = () => {
  return (
    <div className="mt-60">
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold mt-10 mb-8'><span className='shadow-2xl rounded-full p-0 md:p-3'>~ Our Board ~</span></h2>

      <div>
        <div className="card card-compact w-96 h-96  bg-base-100 shadow-xl bg-cover relative " style={{
        
        backgroundImage: "url('/asset/profailpic.png')", backgroundSize: "320px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: ""
      }}>
          <div>
          <figure><img className='w-52 h-56 rounded-full absolute top-8 left-[78px] ' src={profail} alt="Shoes" /></figure>
          </div>
          <div className="card-body absolute bottom-0">
            <h2 className="card-title">Ashraful Islam Spondon</h2>
            <p>Chief Executive Officer</p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBoard;