import React from 'react'
import Meta from '../Components/Meta'
import BreadCramp from '../Components/BreadCrump'
import { FaHome } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Meta title={"Contact"} />
      <BreadCramp title="Contact" />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='col-12'>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31094.293317499087!2d80.19715201295163!3d13.049247095637245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703700978919!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ "border": "0;" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className='w-100'></iframe>
            </div>
          </div>
          <div className='col-12 py-5'>
                <div className='contact-inner-wrapper d-flex  justify-content-between'>
                    <div>
                      <h3 className='contact-title mb-4'>Contact</h3>
                      <form action="" className='d-flex flex-column'>
                          <div>
                          <input type="text" name="" id="" className='form-control mb-3' placeholder='Name'/>       
                          </div>
                          <div>
                          <input type="email" name="" id="" className='form-control mb-3' placeholder='Mail'/>       
                          </div>
                          <div>
                          <input type="tel" name="" id="" className='form-control mb-3' placeholder='Phone'/>       
                          </div>
                          <div>
                              <textarea name="" id="" cols="30" rows="4" className='form-control' placeholder='Comments'></textarea>
                          </div>
                          <div>
                             <button className='button mt-3 border-0'>Submit</button>
                          </div>
                         </form>
                    </div>
                    <div>
                      <h3 className='contact-title mb-4'>Get in touch with us</h3>
                        <div>
                           <ul className='ps-0'>
                               <li className='d-flex gap-15 align-items-center mb-4'>
                                <FaHome className='fs-4'/>
                                 <address className='mb-0'>N0 50 , Forum Mall ,Chennail ,Tamilnadu</address>
                               </li>
                               <li className='d-flex gap-15 align-items-center  mb-4'>
                                <IoMail className='fs-4'/>
                                 <a href="mailto: manojssankarlingam01@gmail.com">manojssankarlingam01@gmail.com</a>
                               </li>
                               <li className='d-flex gap-15 align-items-center  mb-4'>
                                <FaPhoneAlt className='fs-4'/>
                                  <a href="tel:+91 7010642694">+91 7010642694</a>
                               </li>
                               <li className='d-flex gap-15 align-items-center mb-4'>
                                <FaInfo className='fs-4'/>
                                    <p className='mb-0'>MONDAY - FRIDAY  10AM - 8PM</p>
                               </li>
                           </ul>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact