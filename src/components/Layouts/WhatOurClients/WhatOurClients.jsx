import profailimg from '../../../../public/asset/Rectangle 303 (1).png'
import icon1 from '/asset/Group 527.png'
const WhatOurClients = () => {
  return (
    <div className="h-96 mt-12"  >
      <div className='text-[#4169E1] text-3xl text-center font-semibold mt-8'>
        <span className='shadow-2xl rounded-full p-0 md:p-3'>~ What Our Clients think ~</span>
      </div>
      <div className="carousel w-full h-full mt-20" style={{ backgroundImage: "url('/asset/Rectangle 248 (1).png')" }}>
        <div id="item1" className=" flex p-10 carousel-item w-full space-x-48 mt-14 ">
          <div className='flex-1  '>
            <h2>Interactive Minded</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-36" />
            <div className='flex'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p>Figma Designer</p>
              </div>
              <div className='ml-80'>
                <h2>Fiver</h2>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={profailimg} className="w-[220px]" />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={profailimg} className="w-[220px]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={profailimg} className="w-[220px]" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={profailimg} className="w-[220px]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default WhatOurClients;