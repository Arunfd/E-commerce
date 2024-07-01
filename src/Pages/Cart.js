import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import watch from '../images/watch.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
         <Meta title={"Cart"} />
            <BreadCramp title="Cart" />
            <div className='cart-wrapper home-wrapper-2 py-5'>
              <div className='container-xxl'>
                 <div className='row'>
                    <div className='cart-head py-3 d-flex align-items-center justify-content-between'>
                        <h4 className='card-head-h4 cart-col-1 '>Product</h4>
                        <h4 className='card-head-h4 cart-col-2'>Price</h4>
                        <h4 className='card-head-h4 cart-col-3'>Quantity</h4>
                        <h4 className='card-head-h4 cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data border-bottom d-flex gap-30 align-items-center justify-content-between py-4 mb-2'>
                         <div className='cart-col-1'>
                             <div className='d-flex gap-30 align-items-center'>
                                 <div className='w-25'>
                                    <img src={watch} alt="" className='img-fluid '/>
                                 </div>
                                 <div className='w-50 py-3'>
                                     <p className='card-data-p'>Kids Watch bulk 10 pack multi colured for kids</p>
                                     <p className='card-data-p'>Size : S</p>
                                     <p className='card-data-p'>Color : Blue</p>
                                     
                                 </div>
                             </div>
                         </div>
                         <div className='cart-col-2'>
                             <div>
                                 <h5 className='card-data-price'>$100.00</h5>
                             </div>
                         </div>
                         <div className='cart-col-3'>
                             <div className='d-flex align-items-center gap-30'>
                                 <input type="number" name="" id="" style={{"width" :" 50px"}} min={1} max={9}/>
                                 <RiDeleteBin6Line className='card-data-icon  '/>
                             </div>
                         </div>
                         <div className='cart-col-4'>
                         <div>
                                 <h5 className='card-data-price'>$100.00</h5>
                             </div>
                         </div>
                    </div>
                    <div className='cart-data border-bottom d-flex gap-30 align-items-center justify-content-between py-4 mb-2'>
                         <div className='cart-col-1'>
                             <div className='d-flex gap-30 align-items-center'>
                                 <div className='w-25'>
                                    <img src={watch} alt="" className='img-fluid '/>
                                 </div>
                                 <div className='w-50 py-3'>
                                     <p className='card-data-p'>Kids Watch bulk 10 pack multi colured for kids</p>
                                     <p className='card-data-p'>Size : S</p>
                                     <p className='card-data-p'>Color : Blue</p>
                                     
                                 </div>
                             </div>
                         </div>
                         <div className='cart-col-2'>
                             <div>
                                 <h5 className='card-data-price'>$100.00</h5>
                             </div>
                         </div>
                         <div className='cart-col-3'>
                             <div className='d-flex align-items-center gap-30'>
                                 <input type="number" name="" id="" style={{"width" :" 50px"}} min={1} max={9}/>
                                 <RiDeleteBin6Line className='card-data-icon  '/>
                             </div>
                         </div>
                         <div className='cart-col-4'>
                         <div>
                                 <h5 className='card-data-price'>$100.00</h5>
                             </div>
                         </div>
                    </div>
                    <div className='col-12 py-2 mt-4'>
                         <div className='d-flex py-5 justify-content-between align-items-baseline'>
                            <Link to='/product' className='button'>Continue To Shopping</Link>
                             <div className='d-flex flex-column align-items-end subtotal-inner' >
                                 <h4 className='subtotal-h4'>Subtotal : <span className='subtotal-span'>$100</span></h4>
                                 <p className='sub-p'>Taxes And Shipping caluculated at Checkout</p>
                                 <Link className='subtotal-button' to='/checkout'>Checkout</Link>
                             </div>
                         </div>
                         
                    </div>
                 </div>
              </div>
            </div>
    </div>
  )
}

export default Cart