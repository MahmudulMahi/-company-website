import whoareimg from '/asset/aerial.jpg'

import iconAbout1 from '/asset/Future.png'
import iconAbout2 from '/asset/Campaign.png'
import iconAbout3 from '/asset/Gem.png'

const WhoWeAre = () => {
  return (
    <div className='mt-20 '>


      <div className='flex flex-col md:flex-col lg:flex-row gap-20   '>

        <div className='flex-1'>
          <h2 className="text-3xl text-[#4169E1] mt-4 font-medium mb-14"> <span className='shadow-2xl rounded-full p-3 block md:inline-block text-center'>~Who We Are~</span></h2>
          <span className='block mb-3'>
          Founded in December 2022, Visionary Tech Solution is a dynamic and innovative technology firm that has swiftly made its mark by delivering impactful projects across diverse industries. Specializing in cutting-edge software solutions, we have successfully undertaken and completed numerous significant projects, solidifying our reputation as a reliable partner for businesses seeking technological excellence.

          </span>

          <span className='block mb-3'>
          At Visionary Tech Solution, we are defined by our passion for innovation, client satisfaction, and a dedication to creating solutions that transcend expectations. With a strong foundation built on integrity, collaboration, and a pursuit of excellence, we continue to shape the future of technology and make a meaningful impact on the world.
          </span>

          <span>
           
          </span>
        </div>
        <div className=' flex-1'>
          <img className='w-[400px] md:w-[600px] h-[300px] md:h-[430px] rounded-lg mt-0 md:mt-0 lg:mt-16' src={whoareimg} alt="" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-16 mt-14 py-4'>
        {/* ------------- */}
      
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-5">
          <img  src={iconAbout1} alt="" />
          </figure>
          <div className="card-body pt-5 items-center text-center">
          <h2 className='text-[#4169E1] font-medium'>Our Vision</h2>
            <p> At Visionary Tech Solution, we envision a world where cutting-edge software not only meets the evolving needs of businesses but also propels them towards sustained growth and success. Our vision is to be at the forefront of technological advancements, serving as a catalyst for companies to thrive in the dynamic landscape of the future.</p>
          </div>
        </div>
        {/* ---------- */}
        {/* ---------- */}
        <div className="card   bg-base-100 shadow-xl">
          <figure className="px-10 pt-5">
          <img  src={iconAbout2} alt="" />
          </figure>
          <div className="card-body pt-5 items-center text-center">
          <h2 className='text-[#4169E1] font-medium'>Our Mission</h2>
            <p>Our mission at Visionary Tech Solution is to design and deliver transformative software solutions that align seamlessly with the strategic goals of our clients. We are dedicated to creating intuitive, efficient, and scalable technologies that not only meet current requirements but also anticipate future trends.</p>
          </div>
        </div>
        {/* ---------- */}
        {/* ---------- */}
          <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-5">
          <img  src={iconAbout3} alt="" />
          </figure>
          <div className="card-body pt-5 items-center text-center">
          <h2 className='text-[#4169E1] font-medium'>Our Values</h2>
            <p>Driven by a commitment to innovation, client-centricity, integrity, collaboration, we embody a mission to redefine industry standards, prioritize client success, uphold ethical practices, amplify collective expertise through collaboration, proactively adapt to change, and consistently strive for excellence in every aspect of our work. </p>
          </div>
        </div>
        {/* ---------- */}

      </div>

    </div>

  );
};

export default WhoWeAre;