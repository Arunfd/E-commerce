import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <Meta title={"Signup"} />
            <BreadCramp title="Signup" />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card d-flex flex-column justify-content-center  '>
                                <h3 className='text-center mb-4'>Sign Up</h3>
                                <div>
                                    <form action="" className=' form d-flex flex-column gap-30 '>
                                       <div>
                                            <input type="text" name="" className='form-control' id="" placeholder='FirstName' />
                                        </div>
                                        <div>
                                            <input type="text" name="" className='form-control' id="" placeholder='LastName' />
                                        </div>
                                        <div>
                                            <input type="email" name="" className='form-control' id="" placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type="tel" name="" className='form-control' id="" placeholder='Mobile Number' />
                                        </div>
                                        <div>
                                            <input type="password" name="" className='form-control mt-1' id="" placeholder='Password' />
                                        </div>
                                        <div className='d-flex mt-0 justify-content-center gap-15'>
                                            <button className="button border-0">Sign Up</button>
                                        
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

export default Signup