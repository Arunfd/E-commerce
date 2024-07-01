import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'

const Wishlist = () => {
  return (
    <div>
         <Meta title={"Wish List"} />
            <BreadCramp title="Wish List" />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                     <div className='row'>
                         <div className='col-3'>
                             <div className='wishlist-card position-relative '>
                                <img src="/images/cross.svg" alt=""  className='img-fluid cross position-absolute'/>
                             
                                <div className='copmare-prd-image'>
                                    <img src="/images/tab.jpg" alt="" className='img-fluid mb-3' />
                                </div>
                                  <div className='px-2 py-2'>
                                  <h5 className='title mb-2'>Honor T1 7.0 GB RAM 8 GB ROM  7 Inch With Wi-Fi +5G Tablet</h5>
                                    <h6 className='price'>$ 100.00</h6>
                                  </div>
                             </div>
                         </div>
                         <div className='col-3'>
                             <div className='wishlist-card position-relative '>
                             <img src="/images/cross.svg" alt=""  className='img-fluid cross position-absolute'/>
                                <div className='copmare-prd-image'>
                                    <img src="/images/tab.jpg" alt="" className='img-fluid mb-3' />
                                </div>
                                  <div className='px-2 py-2'>
                                  <h5 className='title mb-2'>Honor T1 7.0 GB RAM 8 GB ROM  7 Inch With Wi-Fi +5G Tablet</h5>
                                    <h6 className='price'>$ 100.00</h6>
                                  </div>
                             </div>
                         </div>
                         <div className='col-3'>
                             <div className='wishlist-card position-relative '>
                                <img src="/images/cross.svg" alt=""  className='img-fluid cross position-absolute'/>
                                <div className='copmare-prd-image'>
                                    <img src="/images/tab.jpg" alt="" className='img-fluid mb-3' />
                                </div>
                                  <div className='px-2 py-2'>
                                  <h5 className='title mb-2'>Honor T1 7.0 GB RAM 8 GB ROM  7 Inch With Wi-Fi +5G Tablet</h5>
                                    <h6 className='price'>$ 100.00</h6>
                                  </div>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
    </div>
  )
}

export default Wishlist