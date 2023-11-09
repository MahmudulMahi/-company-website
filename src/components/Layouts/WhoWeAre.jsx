import whoareimg from '/asset/aerial.jpg'
const WhoWeAre = () => {
  return (
    <div>
      <h2 className="text-3xl text-[#4169E1] mt-8 font-medium"> <span className='shadow-2xl rounded-full p-3'>~Who We Are~</span></h2>

      <div className='flex'>
        <div>
          Since 2022 Visionary Tech Solution has national presence, offering Information Technologies solutions, committed with the innovation, quality and any adjustment for the company´s requirements, our culture is set by values that contributes to create a flexible, creative, implication related and teamwork.

          We believe that our customers’ success is our own success, this is why we stablish strategic alliances with our customers in their IT projects development in Bangladesh.

          We have a wide experience at technical level, a young professional team, with a solid academic formation and advances technical skills who let us deliver high quality solutions to any kind of company
        </div>
        <div>
          <img src={whoareimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;