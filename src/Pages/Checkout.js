import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import watch from '../images/watch.jpg'


const Checkout = () => {
    return (
        <div>
            <Meta title={"Checkout"} />
            <BreadCramp title="Checkout" />
            <div className='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-lastdata'>
                                <h2 className='websitename mb-3'>Digitic </h2>
                                <nav aria-label="breadcrumb" className='mb-5'>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item text-dark"><Link to="/cart">Cart</Link></li>
                                        <li className="breadcrumb-item text-dark "><a href="#">Information</a></li>
                                        <li className="breadcrumb-item active text-dark" aria-current="page">Shipping</li>
                                        <li className="breadcrumb-item active text-dark" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                  <h3 className='title mb-3'>Contact Information</h3>
                                   <p className='user-details mb-5'>MANOJ G S    &nbsp;&nbsp;&nbsp; (manojssankarlingam01@gmail.com)</p>
                                <div className=''>
                                  <h3 className='title mb-3'>Shipping Address</h3>
                                    <form action="" className='d-flex flex-column gap-15 mt-4'>
                                         <select name="" id="" className="form-control form-select">
                                             <option value=""  >Select Country</option>
                                             <option value=""  >India</option>
                                             <option value=""  >United States</option>
                                             <option value=""  >Japan</option>
                                         </select>
                                          <div className=' d-flex gap-15 flex-grow-1'>
                                          <input type="text" className="form-control" placeholder='First Name (optional) ' />
                                          <input type="text" className="form-control" placeholder='Last Name ' />
                                          </div>
                                          <div >
                                          <input type="text" className="form-control" placeholder='Address' />
                                          </div>
                                          <div >
                                          <input type="text" className="form-control"  placeholder='Apartment,Suite,etc..' />
                                          </div>
                                          <div className='d-flex gap-15 flex-grow-1'>
                                          <input type="text" className="form-control"  placeholder='City'/>
                                          <select name="" id="" className="form-control form-select">
                                             <option value=""  selected disabled >Select Country</option>
                                         </select>
                                          <input type="text" className="form-control" placeholder='Zip Code' />
                                          </div>


                                    </form>
                                      <div className='d-flex justify-content-between mt-4 align-items-center'>
                                        <Link to='/cart' className='checkout-back'>
                                      <FaLongArrowAltLeft className='fs-5' /> &nbsp;
                                             Return To Cart
                                        </Link>

                                          <Link className='button'>Continue Shipping</Link>
                                        
                                      </div>
                                </div>
                            </div>
                        </div>
                         <div className='col-5'>
                             <div className='border-bottom py-5'>
                                 <div className='d-flex  mb-2 align-items-center gap-10 justify-content-between'>
                                     <div className='w-75 d-flex gap-15'>
                                         <div className='w-25 position-relative'>
                                             <span style={{"top":"-4%","right":"-2%"}} className='badge bg-secondary py-1 rounded-circle position-absolute'>1</span>
                                             <img src={watch} alt="" className='img-fluid'/>
                                         </div>
                                         <div>
                                              <h4 className='check-total'>Milance Loop Watch brand For 42mm/44mm Apple..</h4>
                                              <p className='check-total'>s / #AB5454 </p>
                                         </div>
                                     </div>
                                     <div>
                                         <h5>$100</h5>
                                     </div>
                                 </div>
                             </div>
                             <div className='border-bottom mt-4'>
                             <div className='d-flex align-items-center justify-content-between'>
                                     <p className='check-total'>Subtotal</p>
                                      <p className='check-price'>$100</p>
                                 </div>
                                 <div className='d-flex align-items-center justify-content-between'>
                                      <p className='check-total'>Shipping</p>
                                      <p className='check-price'>$19.5</p>
                                 </div>
                             </div>
                             <div className='mt-4'>
                                 <div className='d-flex align-items-center justify-content-between'>
                                     <h4 className='check-total mb-0'>Total</h4>
                                     <h5 className='check-total-price mb-0'><span className='check-country'>USD</span> $119.5</h5>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout