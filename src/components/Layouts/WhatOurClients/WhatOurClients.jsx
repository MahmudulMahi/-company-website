import profailimg from '/asset/joe.jpeg'
import profailimg2 from '/asset/SharRaju.jpeg'
import profailimg3 from '/asset/WhatsApp Image 2023-11-28 at 6.53.49 PM.jpeg'
import profailimg4 from '/asset/johny.jpeg'
import profailimg5 from '/asset/WhatsApp Image 2023-11-28 at 6.56.02 PM (1).jpeg'
import coma1 from '/asset/icon-park-outline_quote.png'
import coma2 from '/asset/coma2-removebg-preview.png'
import icon1 from '/asset/Group 527.png'
import { FaRegCopy } from "react-icons/fa";
const WhatOurClients = () => {


  return (
    <div className="  p-10 "  >
      <div className='text-[#4169E1] text-3xl text-center font-semibold mt-8'>
        <span className='shadow-2xl block md:inline-block  rounded-full p-2 md:p-3'>~ What Our Clients think ~</span>
      </div>
      <div className="carousel flex flex-col md:flex-row lg:flex-row w-full mt-4" >
        <div id="item1" className="flex flex-col md:flex-row lg:flex-row carousel-item w-full md:space-x-28 mt-14">
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex flex-col md:flex-row lg:flex-row'>
              <img className='w-[30px] h-[30px] mb-3 md:mr-3 lg:mr-3' src={coma1} alt="" />
              <p className='text-base md:text-xl lg:text-xl'>VTS expertise and professionalism truly impressed me. His attention to detail and ability to grasp our requirements quickly resulted in some good progress and a quick turnaround time. I also appreciated his commitment to excellence and willingness to go the extra mile, which was evident throughout the project.</p>
            </div>
            <hr className="h-px my-6 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
              <div>
                <img src={icon1} alt="" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h2 className='text-base md:text-xl lg:text-xl'>Joe</h2>
                <p className='text-[#4169E1] mt-1 md:mt-3 lg:mt-3 text-sm md:text-base lg:text-base'>Founder<br />The People House</p>
              </div>
              <div className='ml-3'>
                <h2>Fiver</h2>
                <div className="rating mt-1 md:mt-3 lg:mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-0 md:pr-12 lg:pr-12 relative mt-4 md:mt-0 lg:mt-0'>
            <img src={profailimg} className="w-[120px] md:w-[220px] lg:w-[220px] rounded-full" />
            <div className='absolute top-2 right-2 md:right-10 lg:right-10'>
              <img className='w-6 md:w-8 lg:w-14 hidden md:hidden lg:block ' src={coma2} alt="" />
            </div>
          </div>
        </div>

        <div id="item2" className="flex flex-col md:flex-row lg:flex-row carousel-item w-full md:space-x-28 mt-14">
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex flex-col md:flex-row lg:flex-row'>
              <img className='w-[30px] h-[30px] mb-3 md:mr-3 lg:mr-3' src={coma1} alt="" />
              <p className='text-base md:text-xl lg:text-xl'>This company is amazing . He takes full responsibility for the project and has the ability to push the project across the finish line. I will definitely recommend him for your python/Django project. With very little instruction he can get the work done.</p>
            </div>
            <hr className="h-px my-6 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
              <div>
                <img src={icon1} alt="" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h2 className='text-base md:text-xl lg:text-xl'>Shar Raju</h2>
                <p className='text-[#4169E1] mt-1 md:mt-3 lg:mt-3 text-sm md:text-base lg:text-base'> DM Auto Solution</p>
              </div>
              <div className='ml-3'>
                <h2>Fiver</h2>
                <div className="rating mt-1 md:mt-3 lg:mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-0 md:pr-12 lg:pr-12 relative mt-4 md:mt-0 lg:mt-0'>
            <img src={profailimg2} className="w-[120px] md:w-[220px] lg:w-[220px] rounded-full" />
            <div className='absolute top-2 right-2 md:right-10 lg:right-10'>
              <img className='w-6 md:w-8 lg:w-14 hidden md:hidden lg:block' src={coma2} alt="" />
            </div>
          </div>
        </div>

        <div id="item3" className="flex flex-col md:flex-row lg:flex-row carousel-item w-full md:space-x-28 mt-14">
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex flex-col md:flex-row lg:flex-row'>
              <img className='w-[30px] h-[30px] mb-3 md:mr-3 lg:mr-3' src={coma1} alt="" />
              <p className='text-base md:text-xl lg:text-xl'>VTS did an excellent job building a custom tracking page for our customers. He used an API to display real time tracking update for our customers.Excellent work. The needed features were detailed .but VTS took charge of the project and got it to the finish line . Great work. thank you !</p>
            </div>
            <hr className="h-px my-6 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
              <div>
                <img src={icon1} alt="" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h2 className='text-base md:text-xl lg:text-xl'>Santino </h2>
                <p className='text-[#4169E1] mt-1 md:mt-3 lg:mt-3 text-sm md:text-base lg:text-base'>Founder<br />Valley Hatchery Corporation</p>
              </div>
              <div className='ml-3'>
                <h2>Fiver</h2>
                <div className="rating mt-1 md:mt-3 lg:mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-0 md:pr-12 lg:pr-12 relative mt-4 md:mt-0 lg:mt-0'>
            <img src={profailimg3} className="w-[120px] md:w-[220px] lg:w-[220px] rounded-full" />
            <div className='absolute top-2 right-2 md:right-10 lg:right-10'>
              <img className='w-6 md:w-8 lg:w-14 hidden md:hidden lg:block' src={coma2} alt="" />
            </div>
          </div>
        </div>

        <div id="item4" className="flex flex-col md:flex-row lg:flex-row carousel-item w-full md:space-x-28 mt-14">
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex flex-col md:flex-row lg:flex-row'>
              <img className='w-[30px] h-[30px] mb-3 md:mr-3 lg:mr-3' src={coma1} alt="" />
              <p className='text-base md:text-xl lg:text-xl'>First phase of the project is going well</p>
            </div>
            <hr className="h-px my-6 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
              <div>
                <img src={icon1} alt="" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h2 className='text-base md:text-xl lg:text-xl'>Johny Kim Martin</h2>
                <p className='text-[#4169E1] mt-1 md:mt-3 lg:mt-3 text-sm md:text-base lg:text-base'>Founder and CEO,<br />Realvision Media</p>
              </div>
              <div className='ml-3'>
                <h2>Fiver</h2>
                <div className="rating mt-1 md:mt-3 lg:mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-0 md:pr-12 lg:pr-12 relative mt-4 md:mt-0 lg:mt-0'>
            <img src={profailimg4} className="w-[120px] md:w-[220px] lg:w-[220px] rounded-full" />
            <div className='absolute top-2 right-2 md:right-10 lg:right-10'>
              <img className='w-6 md:w-8 lg:w-14 hidden md:hidden lg:block' src={coma2} alt="" />
            </div>
          </div>
        </div>

        <div id="item5" className="flex flex-col md:flex-row lg:flex-row carousel-item w-full md:space-x-28 mt-14">
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl mb-3'>Interactive Minded</h2>
            <div className='flex flex-col md:flex-row lg:flex-row'>
              <img className='w-[30px] h-[30px] mb-3 md:mr-3 lg:mr-3' src={coma1} alt="" />
              <p className='text-base md:text-xl lg:text-xl'>Excelent !!!! Very Smooth Experience !!! Great work !! Highly Recommended</p>
            </div>
            <hr className="h-px my-6 md:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
              <div>
                <img src={icon1} alt="" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h2 className='text-base md:text-xl lg:text-xl'>Arafat Hossain</h2>
                <p className='text-[#4169E1] mt-1 md:mt-3 lg:mt-3 text-sm md:text-base lg:text-base'>Founder<br />Findy Lead Corporation</p>
              </div>
              <div className='ml-3'>
                <h2>Fiver</h2>
                <div className="rating mt-1 md:mt-3 lg:mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-0 md:pr-12 lg:pr-12 relative mt-4 md:mt-0 lg:mt-0'>
            <img src={profailimg5} className="w-[120px] md:w-[220px] lg:w-[220px] rounded-full " />
            <div className='absolute top-2 right-2 md:right-10 lg:right-10'>
              <img className='w-6 md:w-8 lg:w-14 hidden md:hidden lg:block' src={coma2} alt="" />
            </div>
          </div>
        </div>



      </div>
      <div className="md:flex justify-center w-full py-2 gap-2 hidden   ">
        <a href="#item1" className="btn btn-xs ">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
      </div>
      <div className='flex justify-center items-center mt-7 md:mt-3'>
        <button className="btn  bg-slate-100 sm:btn-sm md:btn-md lg:btn-lg text-[#4169E1] ">read More Reviews <FaRegCopy /></button>
      </div>
    </div>

  );
};

export default WhatOurClients;