import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialCards = () => {
    return (
        <div className='col-4 mb-4'>
            <div className='special-blog d-flex justify-content-between align-itmes-center'>
                <div>
                    <img className='img-fluid' src="/images/watch.jpg" alt="" />
                </div>
                <div className='sepcial-blog-content'>
                    <h6 className='brand'>heavells</h6>
                    <h5 className='desc'>Milance Loop Watch brand For 42mm/44mm Apple..</h5>
                    <ReactStars
                        classNames="start"
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'><strike className="strike">$100</strike> $200</p>

                    <div className='discount-till gap-10 d-flex align-items-center'>
                        <div className>
                            <p className='mb-0'><b>5</b> days</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center '>
                            <span className='badge rounded-circle  bg-danger p-2 w-100'>05</span>:
                            <span className='badge rounded-circle  bg-danger p-2'>23</span>:
                            <span className='badge rounded-circle bg-danger p-2'>17</span>
                        </div>
                    </div>
                     <p className='mt-3 mb-2'>Product 5</p>
                    <div class="progress">
                         
                        <div class="progress-bar" style={{width :"25%"}} progress-height={{height:"1rem"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                     <Link className='my-3'><button className='btn'>Add To Cart</button></Link>

                </div>
            </div>
        </div>
    )
}

export default SpecialCards