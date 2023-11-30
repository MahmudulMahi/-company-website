
import teamimg from '../../../../public/asset/team.jpeg'

const AboutOurTeam = () => {
  return (
    <div className='flex flex-col md:flex-row gap-20 mt-12'>
      <div className='flex-1' >
        <img className='w-[600px] h-[300px] md:h-[350px] rounded-lg mt-14' src={teamimg} alt="" />
      </div>
      <div className='flex-1'>
        <h2 className="text-3xl text-[#4169E1] mt-4 font-medium mb-10 "> <span className='shadow-2xl rounded-full p-3 block md:inline-block text-center'>~About Our Team~</span></h2>
        <span className='block mb-3'>
          At Visionary Tech Solution, our strength lies in the diversity and expertise of our dynamic team. Comprising skilled professionals across a spectrum of disciplines, we seamlessly integrate talents to deliver comprehensive solutions. From the backbone of our operations in backend development to the user-centric focus of frontend design, our team excels in crafting Android and iOS applications that set industry standards.
        </span>

        <span className='block mb-3'>
          Our collaborative spirit thrives on the synergy of these diverse skill sets, collectively working towards a shared vision. As a cohesive unit, we take pride in our ability to navigate the complexities of modern technology, consistently delivering excellence across a spectrum of services.
        </span>

        <span>
          We have a wide experience at technical level, a young professional team, with a solid academic formation and advances technical skills who let us deliver high quality solutions to any kind of company
        </span>
        <div className='mt-7'>
          <button className="btn  rounded-3xl border-[#4169E1]"><span className='text-[#4169E1]'>Meet our team</span></button>
        </div>
      </div>

    </div>
  );
};

export default AboutOurTeam;
