
import underimg from "/asset/Rectangle 344.png"

const Banner = () => {
  return (
    <>
      <div className="hero  h-[500px] mt-3 " style={{
        backgroundImage: "url('/asset/modern.png')"

      }}>


        <div className="hero-overlay bg-opacity-60 bg-blue-700 "></div>
        <div className="hero-content  text-center text-neutral-content ">
          <div className=" ">
            <h1 className=" text-3xl  md:text-5xl font-bold   text-white " >Think Big.We Make <br />
              <span className="" >IT Possible!</span></h1>
            <p className="mt-5 text-white">We develops strategic software <br /> solutions for businesses.</p>

          </div>
        </div>
      </div>
      <img className="hidden md:block w-full h-1 " src={underimg} alt="" />
    </>
  );
};

export default Banner;
