import bgimg from '/asset/Rectangle 297.png'
// import bgimagerec1 from '../../../../public/asset/iconoir_agile.png'
const Contact = () => {
  return (
  
    <div className='mt-12 relative' style={{backgroundImage: `url('/asset/Rectangle 297.png')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh'}} >

      <div className='flex flex-col md:flex-row justify-between z-20 p-7 '>
        <div>
          <h2 className='text-3xl text-[#4169E1] font-medium '><span className='shadow-2xl rounded-full p-3'>Contact Us ~</span></h2>

          <h2 className='text-3xl font-bold mt-10'>You can <span className='text-[#4169E1]'>connect</span> with us <br />
            when need <span className='text-[#4169E1]'>help!</span></h2>
        </div>
        <div>
          <form className="card-body border md:w-[600px] ">
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