import contactimg from '../../../../public/asset/Rectangle 452.png'
import { BsArrowRightCircle } from "react-icons/bs";

const Contactus = () => {
  return (
    <div>
      <img src={contactimg} alt="" />
      <div className=' relative '>
        <h2 className='text-2xl absolute bottom-36  text-white '>Contact Us</h2>
        <button> <BsArrowRightCircle></BsArrowRightCircle></button>
      </div>
    </div>
  );
};

export default Contactus;