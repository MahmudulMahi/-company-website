import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const AservicesCard = ({ aservicescards }) => {

  const { id, title, name, details, icon, image, detailstitle, description } = aservicescards || {}

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>

        </div>
        <div className="card-actions justify-end">
          {/* <button onClick={toggleDetails} className="btn btn-primary  ">Learn more </button> */}
          <button className="p-5 flex items-center gap-2 text-[#008000]" onClick={() => document.getElementById('my_modal_4').showModal()}>learn more <FaArrowRight /></button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-full max-w-7xl">
              <div className='flex'>
              <div className='flex-1'>
              <div >
                  <h3 className="font-bold text-lg">{detailstitle}</h3>
                </div>
                <div className='flex-1'>
                  <p className="py-4">{description}</p>
                </div>
              </div>
                <img src={image} alt="" />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>


      </div>

      {showDetails && <div>
        {/* <div className='w-[1000px] h-full'>
          <div>
            <h2>{detailstitle}</h2>
          </div>
          <div>
            <h2>{description}</h2>
          </div>
          <div>
          <img src={image} alt="" />
          </div>
        </div> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}


      </div>
      }
    </>
  );
};

