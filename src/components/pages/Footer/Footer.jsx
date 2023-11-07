import icon1 from '../../../../public/asset/Group 393.png'

const Footer = () => {
  return (

      <footer className=" p-10 bg-base-200 text-base-content mt-56 ">

    <div className="footer mx-auto max-w-7xl">

      <div>
      <img className='w-[100px]' src={icon1} alt="" />

      <h2 className='font-medium text-3xl'>Visionary</h2>
      <p className='text-xl'>Tech Solutions</p>

      <p className='w-60'>Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof. </p>

      <div>

      </div>
      </div>
    <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
    </div>
  
      </footer >

  );
};

export default Footer;