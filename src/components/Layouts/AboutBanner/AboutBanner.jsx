// import aboutbanner from '../../../../public/asset/Rectangle 387.png'

const AboutBanner = () => {
  return (
    <div className="hero  h-[500px] mt-3" style={{backgroundImage:"url('/asset/Rectangle 387.png')"}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       
      </div>
    </div>
  </div>
  );
};

export default AboutBanner;