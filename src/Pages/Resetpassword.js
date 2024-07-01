import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <div>
        <Meta title={"Reset Password"} />
    <BreadCramp  title="Reset Password" />
    
    <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card d-flex flex-column justify-content-center  '>
                                <h3 className='text-center mb-4'>Reset Password</h3>
                                <div>
                                    <form action="" className=' form d-flex flex-column gap-30 '>
                                       
                                        <div>
                                            <input type="password" name="" className='form-control' id="" placeholder="Password" />
                                        </div>
                                        <div>
                                            <input type="password" name="" className='form-control mt-1' id="" placeholder='Confirm Password' />
                                        </div>
                                        <div className='d-flex mt-0 justify-content-center gap-15'>
                                            <button className="button border-0">Ok</button>
                                        
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

export default Resetpassword