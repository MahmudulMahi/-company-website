import whoareimg from '/asset/aerial.jpg'
import iconAbout1 from '../../../public/asset/Future.png'
import iconAbout2 from '../../../public/asset/Campaign.png'
import iconAbout3 from '../../../public/asset/Gem.png'
const WhoWeAre = () => {
  return (
    <div className='mt-20'>

      
        <div className='flex flex-col md:flex-row gap-5 justify-between  '>

          <div className='w-[380px] md:w-[500px]'>
            <h2 className="text-3xl text-[#4169E1] mt-4 font-medium mb-5"> <span className='shadow-2xl rounded-full p-3'>~Who We Are~</span></h2>
            <span className='block mb-3'>
              Since 2022 Visionary Tech Solution has national presence, offering Information Technologies solutions, committed with the innovation, quality and any adjustment for the company´s requirements, our culture is set by values that contributes to create a flexible, creative, implication related and teamwork.
            </span>

            <span className='block mb-3'>
              We believe that our customers’ success is our own success, this is why we stablish strategic alliances with our customers in their IT projects development in Bangladesh.
            </span>

            <span>
              We have a wide experience at technical level, a young professional team, with a solid academic formation and advances technical skills who let us deliver high quality solutions to any kind of company
            </span>
          </div>
          <div className=''>
            <img className='w-[600px] h-[400px] rounded-lg' src={whoareimg} alt="" />
          </div>
        </div>
        <div className='flex gap-3 mt-9'>
        {/* ------------- */}
          <div className='w-1/3'>
            <div className='flex flex-col items-center'>
              <img  src={iconAbout1} alt="" />
              <h2 className='text-[#4169E1] font-medium'>Out Vision</h2>
            </div>
            Our vision is focused to be a leader company, model at solutions and Information Technology development, solid, profitable and always evolving.
          </div>
          {/* ---------- */}
          {/* ---------- */}
          <div className='w-1/3'>
            <div className='flex flex-col items-center'>
              <img src={iconAbout2} alt="" />
              <h2 className='text-[#4169E1] font-medium'>Our Mission</h2>
            </div>
            Our Mission is based on the productive growth of our customers, delivering tools, knowledge and Information Technology to satisfy their requirements promoting a harmonious development for our human talent.
          </div>
          {/* ---------- */}
               {/* ---------- */}
            <div className='w-1/3'>
            <div className='flex flex-col items-center'>
              <img src={iconAbout3} alt="" />
              <h2 className='text-[#4169E1] font-medium'>Our Values</h2>
            </div>
            Our business values are based on a clear services principle, quality, honesty and commitment. Our corporative principles are closely related to the continuous improvement, competitiveness, teamwork, human talent commitment and the democratic participation of our human resources.
          </div>
          {/* ---------- */}
          
        </div>

      </div>
  
  );
};

