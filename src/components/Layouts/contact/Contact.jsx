import bgimg from '../../../../public/asset/Rectangle 297.png'
// import bgimagerec1 from '../../../../public/asset/iconoir_agile.png'
const Contact = () => {
  return (
    <div className='mt-12 '>

      <div className='flex justify-between'>
        <div>
          <h2 className='text-3xl text-[#4169E1] font-medium '><span className='shadow-2xl rounded-full p-3'>Contact Us ~</span></h2>

          <h2 className='text-3xl font-bold mt-10'>You can <span className='text-[#4169E1]'>connect</span> with us <br />
            when need <span className='text-[#4169E1]'>help!</span></h2>
        </div>
        <div>
          <form className="card-body ">
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



      {/* <img src={bgimg} alt="" /> */}
    </div>

  );
};

export default Contact;