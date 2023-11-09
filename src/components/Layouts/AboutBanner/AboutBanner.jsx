// import aboutbanner from '../../../../public/asset/Rectangle 387.png'
import underimg from "/public/asset/Rectangle 344.png"

const AboutBanner = () => {
  return (
    <>
      <div className="hero  h-[300px] md:h-[500px] mt-3" 
      
      style={{ backgroundImage: "url('/asset/Rectangle 387.png')" 
      
      }}>
        <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-blue-500  to-transparent h-full w-full "></div>
        <div className="hero-content pl-8 absolute items-start text-neutral-content left-1 md:left-36 top- md:top-72">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ABOUT US</h1>
            <p className="mb-5">We partner with you to fulfil your requirements for on-demand talent and a flexible workforce</p>        
          </div>
        </div>
      </div>
      <img src={underimg} alt="" />
    </>
  );
};

export default AboutBanner;