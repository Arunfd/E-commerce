import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div>
          <Meta title={"Forgot-password"} />
            <BreadCramp title="Forgot-Password" />
            <div className='forgot-password-wrapper home-wrapper-2 py-5'>
                 <div className='container-xxl'>
                     <div className='row'>
                          <div className='col-12'>
                          <div className='login-card d-flex flex-column justify-content-center  '> 
                             <h3 className='text-center mb-4'>Reset Password</h3>
                             <p className='fogot-p text-center mb-3'>We will sent an email to reset your password</p>
                             <div>
                             <form action="" className=' form d-flex flex-column gap-30 '>
                                 <div>
                                     <input type="email" name="" className='form-control' id="" placeholder='Email'/>
                                 </div>
                                
                                  <div className='d-flex mt-0 justify-content-center align-items-center flex-column gap-15'>
                                      <button className="button border-0" type='submit'>Submit</button>
                                      <Link to='/login' className="cancel">Cancel</Link>
                                  </div>
                             </form>
                             </div>
                         </div>
                          </div>
                     </div>
                 </div>
            </div>
    </div>
  )
}

export default ForgotPassword