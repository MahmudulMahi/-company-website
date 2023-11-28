import profailimg from '/asset/joe.jpeg'
import coma1 from '/asset/icon-park-outline_quote.png'
import coma2 from '/asset/coma2.png'
import icon1 from '/asset/Group 527.png'
import { FaRegCopy } from "react-icons/fa";
const WhatOurClients = () => {


  return (
    <div className="  p-10 "  >
      <div className='text-[#4169E1] text-3xl text-center font-semibold mt-8'>
        <span className='shadow-2xl block md:inline-block  rounded-full p-2 md:p-3'>~ What Our Clients think ~</span>
      </div>
      <div className="carousel flex  w-full  mt-4 " >
        <div id="item1" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full md:space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>VTS expertise and professionalism truly impressed me. His attention to detail and ability to grasp our requirements quickly resulted in some good progress and a quick turnaround time. I also appreciated his commitment to excellence and willngness to go the extra mile which was evident throughout the project“</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>Joe</h2>
                <p className='text-[#4169E1] mt-3'>Founder
                  The People House</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative mt-6  '>
            <img src={profailimg} className="w-[220px] rounded-full" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10 '>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item2" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>This company is amazing . He takes full responsibility for the project and has the ability to push the project across the finish line. I will definitely recommend him for your python/Django project. With very little instruction he can get the work done.</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>Johny Martin</h2>
                <p className='text-[#4169E1] mt-3'>Founder and CEO,  Realvision Media</p>
              </div>
              <div className='text-center '>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10'>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item3" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>First phase of the project is going well

                The Team was extremely helpful, friendly and had quick response with great communication. I would definityly recommand them to anyone looking for a product. I already had a great experience working with them</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10'>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item4" className=" flex flex-col md:flex-col lg:flex-row carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>VTS did an excellent job building a custom tracking page for our customers. He used an API to display real time tracking update for our customers.Excellent work. The needed features were detailed .but VTS took charge of the project and got it to the finish line . Great work. thank you !
</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10 '>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item5" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full md:space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>Excelent !!!! Very Smooth Experience !!! Great work !! Highly Recommended</p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>Joe</h2>
                <p className='text-[#4169E1] mt-3'>Founder
                  The People House</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative mt-6  '>
            <img src={profailimg} className="w-[220px] rounded-full" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10 '>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item5" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full md:space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex '>
              <img className='w-[30px] h-[30px]' src={coma1} alt="" />
              <p className='text-xl'>VTS did a great job and delivered on time. Was continuously in contat and updated regularly the project </p>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>Joe</h2>
                <p className='text-[#4169E1] mt-3'>Founder
                  The People House</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative mt-6  '>
            <img src={profailimg} className="w-[220px] rounded-full" />
            <div className='absolute top-2 right-10 md:right-80 lg:right-10 '>
              <img className='w-8 md:w-14' src={coma2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <button className="btn  bg-slate-100 sm:btn-sm md:btn-md lg:btn-lg text-[#4169E1] ">read More Reviews <FaRegCopy /></button>
      </div>
    </div>

  );
};

export default WhatOurClients;