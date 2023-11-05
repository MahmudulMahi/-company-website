import bgimg from '/asset/Rectangle 297.png'
import bgimagerec1 from '../../../../public/asset/dashicons_email-alt.png'
import icon1 from '/asset/mingcute_location-3-line.png'
import icon2 from '/asset/gg_phone.png'
import icon3 from '/asset/dashicons_email-alt.png'
const Contact = () => {
  return (

    <div className='mt-12 relative' style={{ backgroundImage: `url('/asset/Rectangle 297.png')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh' }} >

      <div className='flex flex-col md:flex-row justify-between z-20 p-7 '>
        <div>
          <h2 className='text-3xl text-[#4169E1] font-medium '><span className='shadow-2xl rounded-full p-3'>Contact Us ~</span></h2>

          <h2 className='text-3xl font-bold mt-10'>You can <span className='text-[#4169E1]'>connect</span> with us <br />
            when need <span className='text-[#4169E1]'>help!</span></h2>
          <div className='mt-8 space-y-6 '>
            <div className='flex space-x-4 items-center '>
              <div className='bg-white p-5 rounded-xl border' >
                <img src={icon1} alt="" />
              </div>
              <div className=''>
                <p className=''>Office Location</p>
                <p>Mirpur-14, Dhaka-1230, </p>
                <p>Bangladesh</p>
              </div>
            </div>
            <div className='flex space-x-4 items-center'>
              <div className='bg-white p-5 rounded-xl border'>
                <img src={icon2} alt="" />
              </div>
              <div>
                <p>Phone</p>
                <p>017XX-XXXXXXX</p>
                <p>019XX-XXXXXXX</p>
              </div>
            </div>
            <div className='flex space-x-4 items-center'>
              <div className='bg-white p-5 rounded-xl border'>
                <img src={icon3} alt="" />
              </div>
              <div>
                <p>Email</p>
                <p>sajibsazzadulalam@gmail.com </p>
                <p>sajibsazzadulalam@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="card-body border md:w-[600px] mt-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>


    </div>

  );
};

export default Contact;