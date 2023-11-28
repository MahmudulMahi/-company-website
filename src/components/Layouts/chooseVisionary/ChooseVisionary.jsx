import icon1 from '/asset/ri_team-line.png'
// import bgimagerec1 from '../../../../public/asset/iconoir_agile.png'
import icon2 from '/asset/ri_stack-fill.png'
import icon3 from '/asset/iconoir_agile.png'
import icon4 from '/asset/material-symbols_partner-exchange.png'
import icon5 from '/asset/icon-park-outline_focus-one.png'
import icon6 from '/asset/iconoir_agile.png'

const ChooseVisionary = () => {
  return (
    <div className='mt-96  md:mt-20 '>
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold'><span className='shadow-2xl rounded-full p-2 md:p-3 block md:inline-block  '>~Why Choose Visionary Tech~</span></h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-5'>

        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon1} alt="" />
            <p className='text-[#4169E1] text-xl'>We're an Extension of your Team</p>

            <p className='text-sm'> We redefine collaboration by seamlessly integrating into your operations. We're not just service providers; we become an extension of your team. This means more than just sharing your goals; it means embracing them, understanding your challenges, and working hand-in-hand to overcome them.</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon2} alt="" />
            <p className='text-[#4169E1] text-xl'>Full-Stack Expertise</p>

            <p className='text-sm'> We stand out for our unparalleled Full-Stack Expertise, ensuring a comprehensive and seamless approach to software development. Our adept team of professionals possesses in-depth proficiency in both front-end and back-end technologies, allowing us to craft end-to-end solutions with finesse.
            </p>

          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon3} alt="" />
            <p className='text-[#4169E1] text-xl'>Agile Development </p>

            <p className='text-sm'>We prioritize Agile Development methodologies to ensure your projects are not just delivered but evolved collaboratively. Agile is more than a process; It's a mindset that values flexibility, collaboration, and rapid iterations. Our commitment to Agile Development brings the following benefits:</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon4} alt="" />
            <p className='text-[#4169E1] text-xl'>We Value Client, Over New Sales</p>

            <p className='text-sm'> We prioritize client satisfaction over pursuing new sales. Our commitment lies in fostering long-term relationships, ensuring client success and surpassing expectations. Rather than just seeking transactions, we focus on understanding and addressing the unique needs of each client, establishing a foundation built on trust, reliability, and mutual growth.
            </p>

          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon5} alt="" />
            <p className='text-[#4169E1] text-xl'>Solutions Focused, not Hours Focused</p>

            <p className='text-sm'>Choose Visionary Tech for Solutions Focused, not Hours Focused approach.
              We prioritize results over time, ensuring efficient, effective solutions tailored to your needs</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon6} alt="" />
            <p className='text-[#4169E1] text-xl'>Complete Delivery</p>

            <p className='text-sm'> We take pride in our commitment to Complete Delivery—a promise to transform your vision into a tangible reality. Our holistic approach ensures every facet of your project, from ideation to deployment, is meticulously addressed, resulting in an unparalleled and comprehensive solution.</p>

          </div>
        </div>
        {/* ----------- */}
      </div>
    </div>
  );
};

export default ChooseVisionary;