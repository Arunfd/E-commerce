import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX,BsInstagram,BsYoutube,BsFacebook } from "react-icons/bs";
import newsletter from '../images/newsletter.png'


const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex align-items-center gap-30'>
                <img src={newsletter} alt="" />
                <h3 className='text-white mb-0' >Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className=' footer-1 col-7'>
              <div className="input-group mb-1">
                <input type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address "
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 fs-6" id="basic-addon2 ">
                   Subscribe
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className='py-4'>
           <div className='container-xxl'>
              <div className='row'>
                 <div className='col-4'>
                    <h4 className='text-white mb-4'>Contact US</h4>
                     <div>
                        <address className='text-white'>
                             Demo sotre <br />
                             N0. 1459 Freedom ,New York ,1111 <br />
                             India
                        </address>
                          <a href="tel:+91 7010642694" className='text-white mt-4 mb-2 d-block '>+91 7010642694</a>
                          <a href="mailto:manojssankarlingam01@gmail.com" className='text-white mt-2 mb-0 d-block '>manojssankarlingam01@gmail.com</a>
                           <div className='social-icons  mt-4 '>
                               <a className='text-white fs-4 me-3' href=""><BsYoutube/></a>
                               <a className='text-white fs-4 me-3' href=""><BsInstagram/></a>
                               <a className='text-white fs-4 me-3' href=""><BsTwitterX/></a>
                               <a className='text-white fs-4 me-3' href=""><BsFacebook/></a>
                           </div>
                     </div>
                 </div>
                 <div className='col-3'>
                 <h4 className='text-white mb-4'>Information</h4>
                 <div className='footer-links d-flex flex-column '>
                         <Link className='text-white mb-1 py-2'>Privacy policy</Link>
                         <Link className='text-white mb-1 py-2'>Refund policy</Link>
                         <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
                         <Link className='text-white mb-1 py-2'>Terms Of Service</Link>
                         <Link className='text-white mb-1 py-2'>Blogs</Link>
                     </div>
                 </div>
                 <div className='col-3'>
                 <h4 className='text-white mb-4'>Account</h4>
                 <div className='footer-links d-flex flex-column '>
                         <Link className='text-white mb-1 py-2'>Search</Link>
                         <Link className='text-white mb-1 py-2'>About Us</Link>
                         <Link className='text-white mb-1 py-2'>Faq</Link>
                         <Link className='text-white mb-1 py-2'>Contact</Link>
                  
                     </div>
                 </div>
                 <div className='col-2'>
                 <h4 className='text-white mb-4'>Quick Links</h4>
                     <div className='footer-links d-flex flex-column '>
                         <Link className='text-white mb-1 py-2'>Accessories</Link>
                         <Link className='text-white mb-1 py-2'>Laptops</Link>
                         <Link className='text-white mb-1 py-2'>Headphones</Link>
                         <Link className='text-white mb-1 py-2'>Smart Watches</Link>
                         <Link className='text-white mb-1 py-2'>Tablets</Link>
                     </div>
                 </div>

              </div>
           </div>
      </footer>
      <footer className=' py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-white text-center mb-0 '>@ {new Date().getFullYear()},Digitic powdered by Shopify</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )

}

export default Footer