import whoareimg from '/asset/aerial.jpg'
const WhoWeAre = () => {
  return (
    <div className=''>


      <div className='flex gap-5 justify-between mt-6'>
       
        <div className='w-[500px]'>
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
    </div>
  );
};

export default WhoWeAre;