import icon1 from '/asset/logovts-removebg.png'
import socalicon1 from '/asset/logos_facebook-removebg-preview.png'
import socalicon2 from '/asset/skill-icons_linkedin.png'
import socalicon3 from '/asset/Instragram Icon.png'
import socalicon4 from '/asset/Twitter_Icon-removebg-preview.png'
import contacticon1 from '/asset/Group 171.png'
import contacticon2 from '/asset/dashicons_email-alt.png'
import contacticon3 from '/asset/mingcute_location-3-line.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


const Footer = () => {

  const handleClick = () => {
    // Scroll to the top when the link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [services, setservices] = useState([])


  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [])
  // const { id, title,  details, icon, image,image1,image2, detailstitle, description,titlemodal }=services

  const openModal = (service) => {
    const modal = document.getElementById(`modal-${service.id}`);
    modal.showModal();
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div>


      <footer className=" p-10 bg-base-200 text-base-content mt-8 ">



        <div className="footer mx-auto max-w-7xl">

          <div>
            <img className='w-[100px]' src={icon1} alt="" />

            <h2 className='font-medium text-3xl'>Visionary</h2>
            <p className='text-xl'>Tech Solutions</p>

            <p className='w-60'>Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof. </p>

            <div>
              <h2 className='text-2xl mb-4'>Find Us on social media</h2>
              <div className='flex gap-4 cursor-pointer'>
                
                <img  onClick={() => openNewTab('https://www.facebook.com/visionarytechsolution')} src={socalicon1} alt="" />
                
                
                
                <img onClick={() => openNewTab('https://www.linkedin.com/in/md-asraful-islam-1388a1131/')} src={socalicon2} alt="" />
               
                <img src={socalicon3} alt="" />
                <img src={socalicon4} alt="" />
              </div>
            </div>
          </div>
          <div>

          </div>
          <nav>
            <header className="text-xl font-medium">Company</header>
            <Link to='/' onClick={handleClick} className="link link-hover">Home</Link>
            <Link to='/services' onClick={handleClick} className="link link-hover">Services</Link>
            <Link to='/team' onClick={handleClick} className="link link-hover">Team</Link>
            <Link to='/contact' onClick={handleClick} className="link link-hover">Contact</Link>

          </nav>
          <nav>
            <header className="text-xl font-medium">Services</header>

            <div className='gap-5'>
              {services.map((service) => (
                <div key={service.id}>


                  <button className='pb-3' onClick={() => openModal(service)}>{service.title}</button>


                  <dialog id={`modal-${service.id}`} className="modal">
                    <div className="modal-box w-full  max-w-7xl p-6">
                      <div className='flex flex-col-reverse md:flex-row  gap-8 items-center justify-center'>
                        <div className='flex-1'>
                          <div>
                            <div className='text-3xl font-bold pb-5'>
                              <h2>{service.titlemodal}</h2>
                            </div>
                            <h3 className="font-bold text-lg">{service.detailstitle}</h3>
                          </div>
                          <div className=''>

                            <p className="py-4">{service.description}</p>
                          </div>
                        </div>
                        <div className='flex-1 bg-no-repeat ' style={{
                          backgroundImage: "url('/asset/Rectangle 446.png')",
                          width: "100%",
                          maxwidth: "450px",
                          height: "450px",
                          Shadow: "none"
                          // transform: "rotate(deg)",
                          // transformOrigin: "center center",
                        }}>

                          <div className='flex mt-16 items-center justify-center space-x-5'>
                            <div >
                              <img className='w-[100px] h-[200px]  md:w-[300px] md:h-[300px] ' src={service.image} alt="" />
                            </div>
                            <div className='space-y-4' >
                              <img className='w-[150px] h-[100px]' src={service.image1} alt="" />
                              <img className='w-[150px] h-[100px]' src={service.image2} alt="" />
                            </div>
                          </div>

                        </div>



                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn bg-red-600">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              ))}
            </div>
          </nav>

          <nav>
            <header className="text-xl font-medium">Contact Info</header>
            <div className='flex gap-2'>
              <div>
                <img className='w-4 h-4 mt-2' src={contacticon1} alt="" />
              </div>
              <div>
                <p>+8801618412326</p>
                <p>+8801688008158</p>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
              <div>
                <img className='w-4 h-4 mt-2' src={contacticon2} alt="" />
              </div>
              <div className='text-xs md:text-sm' >
                <p>info@visionarytechsolution.com</p>
                <p>visionarytechsolution24@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
              <div>
                <img className='w-4 h-4 mt-2' src={contacticon3} alt="" />
              </div>
              <div>
                <p>House-18, Road-5, Block-G Mirpur-1</p>
                <p>Dhaka-1216, Bangladesh</p>
              </div>
            </div>
          </nav>
        </div>

      </footer >
    </div>






  );
};

export default Footer;