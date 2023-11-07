import icon1 from '../../../../public/asset/Group 393.png'
import socalicon1 from '../../../../public/asset/logos_facebook.png'
import socalicon2 from '../../../../public/asset/skill-icons_linkedin.png'
import socalicon3 from '../../../../public/asset/Instragram Icon.png'
import socalicon4 from '../../../../public/asset/Twitter Icon.png'

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
              <h2 className='text-2xl mb-4'>Find Us on social media</h2>
              <div className='flex gap-4'>
              <img src={socalicon1} alt="" />
              <img src={socalicon2} alt="" />
              <img src={socalicon3} alt="" />
              <img src={socalicon4} alt="" />
              </div>
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