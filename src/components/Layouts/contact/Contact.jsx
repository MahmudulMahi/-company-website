// import bgimg from '/asset/Rectangle 297.png'
// import bgimagerec1 from '../../../../public/asset/dashicons_email-alt.png'
import icon1 from '/asset/locationicon.png'
import icon2 from '/asset/gg_phone.png'
import icon3 from '/asset/emailicon.png'
const Contact = () => {
  return (

    <div className='mt-12  bg-no-repeat bg-bottom ' style={{ backgroundImage: `url('/asset/Rectangle 297.png')`, backgroundPosition: 'bottom', minHeight: '50vh', backgroundSize: '1300px 350px' }} >

      <div className='flex flex-col md:flex-col lg:flex-row justify-between z-20 md:p-7 p-0'>
        <div>
          <h2 className='text-3xl text-[#4169E1] font-medium '><span className='shadow-2xl rounded-full p-3'>Contact Us ~</span></h2>

          <h2 className='text-3xl font-bold mt-10'>You can <span className='text-[#4169E1]'>connect</span> with us <br />
            when need <span className='text-[#4169E1]'>help!</span></h2>
          <div className='mt-8 space-y-6 '>
            <div className='flex space-x-4 items-center '>
              <div className='bg-white p-4 rounded-xl border' >
                <img className='w-7 md:w-12' src={icon1} alt="" />
              </div>
              <div >
                <p className='font-semibold'>Office Location</p>
                <p> House-18, Road-5, Block-G Mirpur-1  </p>
                <p> Dhaka-1216, Bangladesh</p>
              </div>
            </div>
            <div className='flex space-x-4 items-center'>
              <div className='bg-white p-4 rounded-xl border'>
                <img className='w-7 md:w-12' src={icon2} alt="" />
              </div>
              <div>
                <p className='font-semibold'>Phone</p>
                <p>+8801618412326</p>
                <p>+8801688008158</p>
              </div>
            </div>
            <div className='flex  space-x-4 '>
              <div className='bg-white p-4 rounded-xl border'>
                <img className='w-7 md:w-12 ' src={icon3} alt="" />
              </div>
              <div>
                <p className='md:font-semibold font-normal'>Email</p>
                <p className='text-[13px] md:text-lg'>info@visionarytechsolution.com </p>
                <p className='text-[13px] md:text-lg '>visionarytechsolution24@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="card-body bg-base-100 border rounded-3xl md:w-[600px] mt-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input type="text" placeholder="Enter Full Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input type="email" placeholder="Enter Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input type="text" placeholder="Enter Subject" className="input input-bordered" required />
              <label className="label">
                <span className="label-text"></span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Write Message"></textarea>
            </div>
            <div className=" text-center mt-6">
              <button className="btn text-white bg-[#4169E1] hover:bg-[#4169E1] w-28">Submit</button>
            </div>
          </form>
        </div>
      </div>


    </div>

  );
};

export default Contact;