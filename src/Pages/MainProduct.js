import React, { useState } from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";


const MainProduct = () => {
    const [orderedproduct, setorderedproduct] = useState(true);
    const props = { width: 400, height: 250, zoomWidth: 500, img: "/images/tab.png" };
    return (
        <div>
            <Meta title={"Product Name"} />
            <BreadCramp title="Product Name" />

            <section className='main-product-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-prd-image '>
                                <div>
                                    <img src="/images/tab.jpg" alt="" />
                                    {/* <ReactImageZoom {...props}/> */}
                                </div>
                            </div>
                            <div className='other-prd-image d-flex flex-wrap gap-15'>
                                <div>
                                    <img src="/images/tab.jpg" alt="" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="/images/tab1.jpg" alt="" className='img-fluid' />

                                </div>
                                <div>
                                    <img src="/images/tab2.jpg" alt="" className='img-fluid' />

                                </div>
                                <div>
                                    <img src="/images/tab3.jpg" alt="" className='img-fluid' />

                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-prd-details'>
                                <div className='border-bottom'>
                                    <h5 className='title'>Honor T1 7.0 GB RAM 8 GB ROM  7 Inch With Wi-Fi +5G Tablet</h5>
                                </div>
                                <div className='border-bottom py-2'>
                                    <h6 className='price'>$ 100.00</h6>

                                    <div className='d-flex align-items-center gap-15'>
                                        <ReactStars

                                            count={5}
                                            size={24}
                                            value="4"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='main-prd-p mb-0'>(2 reviews )</p>


                                    </div>
                                    <a href="#review" className='main-prd-a mb-4'>Write a Review</a>

                                </div>
                                <div className='border-bottom py-3'>
                                    <div className='d-flex align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Type :</h5>
                                        <p className='main-prd-detail-p'>Tablet</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Categories :</h5>
                                        <p className='main-prd-detail-p'>Tablet,Smart Watch,Smart Tv,Bluetooth Speaker,Smart Phone</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Brand :</h5>
                                        <p className='main-prd-detail-p'>Honor T1</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Tags :</h5>
                                        <p className='main-prd-detail-p'>Tablet</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Avalablity :</h5>
                                        <p className='main-prd-detail-p'>In Stock</p>
                                    </div>
                                    <div className='d-flex  flex-column gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Size :</h5>
                                        <div className='d-flex gap-15'>
                                            <p className='badge border border-1 border-secondary text-dark bg-white'>S</p>
                                            <p className='badge border border-1 border-secondary text-dark bg-white'>M</p>
                                            <p className='badge border border-1 border-secondary text-dark bg-white'>XL</p>
                                            <p className='badge border border-1 border-secondary text-dark bg-white'>XXl</p>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Color :</h5>

                                        <div>
                                            <div className=''>
                                                <ul className='colors ps-0'>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row align-items-center gap-15 mb-3'>
                                        <h5 className='main-prd-h5'>Quantity :</h5>
                                        <div className='me-5 '>
                                            <input type="number" name="" id="" min={1} max={9} style={{ "padding": "2px" }} />
                                        </div>
                                        <div className='d-flex align-items-center gap-30'>
                                            <button className="button border-0">Add To Cart</button>
                                            <Link to='/signup' className="button signup">Buy  Now</Link>
                                        </div>
                                    </div>
 
                                    <div className='d-flex align-items-center  gap-30 mb-4'>
                                        <a href="">
                                        <FaCodeCompare className='fs-5 me-1'/>Add To Compare 
                                        </a>
                                        <a href="">  
                                        <FaRegHeart className='fs-5 me-1'/> Add Wishlist
                                        </a>
                                    </div>
                                    <div className='d-flex  flex-column  gap-15 my-3'>
                                        <h5 className='main-prd-heading mb-0 text-dark'>  Shopping & Returns :</h5>
                                        <p className='main-prd-detail-p text-dark'>Free Shipping and Returns Avalibale on all orders! <br />
                                         We ship all us domestic orders within <b>5-10 busniess days!</b>
                                        </p>
                                    </div>

                                    

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className='description-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='title'>Description</h3>
                            <div className='desc-inner'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus provident quo tempore aliquid! Dicta consequuntur temporibus perferendis, maxime tenetur officia debitis veniam, sint quam fugiat quaerat ut consectetur? Rerum deleniti ducimus quo eveniet molestias? Vel asperiores, saepe recusandae quidem adipisci obcaecati dolorem rerum minima iste cum velit omnis maxime quis aliquid temporibus fugiat est sit fugit laudantium nobis. Hic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='review' className='review-wraapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <h3 className='title '>Reviews</h3>
                        <div className='col-12'>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end p-4'>
                                    <div>
                                        <h3 className='review-header '>Cutsomer Reviews</h3>
                                        <div className='d-flex  pt-1 align-items-center gap-15 '>
                                            <ReactStars

                                                count={5}
                                                size={24}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='review-p mb-0 '>Based On 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedproduct && (
                                            <div>
                                                <a href="" className='review-p1'>Write a Review</a>
                                            </div>
                                        )
                                    }


                                </div>
                                <div className='reviews py-4'>
                                    <div className='review-form p-3'>
                                        <h3 className='review-header mb-3'>Write A Review </h3>
                                        <form action="" className='d-flex flex-column'>
                                            <div>
                                                <label htmlFor="">Name</label>
                                                <input type="text" name="" id="" className='form-control mb-3' placeholder='Enter your Name' />
                                            </div>
                                            <div>
                                                <label htmlFor="">Email</label>
                                                <input type="email" name="" id="" className='form-control mb-3' placeholder='Enter Your Mail' />
                                            </div>
                                            <div>
                                                <label htmlFor="">Review Title</label>
                                                <input type="text" name="" id="" className='form-control mb-3' placeholder='Give Your Review title' />
                                            </div>
                                            <div className='mb-2' >
                                                <label htmlFor="" className='rating mb-0'>Rating</label>
                                                <ReactStars

                                                    count={5}
                                                    size={24}
                                                    value="0"
                                                    edit={true}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="">Comment</label>
                                                <textarea name="" id="" cols="30" rows="4" className='form-control' placeholder='Write Your Comments'></textarea>
                                            </div>

                                        </form>
                                        <div className='submitbtn text-end '>
                                            <button className='button mt-3 border-0'>Submit Review</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-customer ps-3 py-3'>
                                    <div className='review'>
                                        <div className='d-flex align-items-center gap-15 mb-3'>
                                            <h6 className='mb-0'>Manoj </h6>
                                            <ReactStars

                                                count={5}
                                                size={24}
                                                value="4"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='review-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil doloremque fugit, ex, quibusdam eius molestiae rem harum dolorum consequuntur placeat possimus dolore cum architecto? Aspernatur labore officia eveniet eligendi iure voluptate repellat dolorem quam vitae. Dolor eius autem unde vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProduct