

const OurBoard = () => {
  return (
    <div className="mt-60">
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold mt-10 mb-8'><span className='shadow-2xl rounded-full p-0 md:p-3'>~ Our Board ~</span></h2>

      <div>
        <div className="card card-compact w-96  bg-base-100 shadow-xl bg-cover  " style={{
        backgroundImage: "url('/asset/profailpic.png')",
        backgroundSize: "cover"
      }}>
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBoard;