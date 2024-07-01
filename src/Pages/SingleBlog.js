import React from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";
import blog from '../images/blog-1.jpg'

const SingleBlog = () => {
    return (
        <div>
            <Meta title={"Single Blogs"} />
            <BreadCramp title="Single Blogs" />

            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='title-card mb-3'>
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <ul className='shop-list'>
                                    <li>Laptop</li>
                                    <li>Mobile</li>
                                    <li>Speaker</li>
                                    <li>Head Phones</li>
                                </ul>
                            </div>
                        </div>
                        <div className='px-5 col-9'>

                            <div className='single-blog-card'>
                                <Link to='/blogs' className='mb-4 d-flex align-items-center gap-15'>
                                    <FaLongArrowAltLeft className='fs-5' /> Go To Blog
                                </Link>
                                <h3 className='title mb-4'>A beautiful Sunday Morning Renaissance</h3>
                                <img src={blog} alt="" className='img-fluid w-100 blog-img my-4' />
                                <p className='desc mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam id earum, voluptatem beatae dolores minus! Reiciendis reprehenderit laboriosam ea? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iure aliquam facilis iusto quo asperiores. Inventore asperiores nemo eligendi eum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor debitis eos nisi maxime non facere placeat labore dolorum cumque?

                                </p>

                                <p className=' date d-inline-block me-4'>07 Jul, 2023 </p>
                                <span className='date'>Digitic</span>
                            </div>

                            <div className='comments '>
                                   <h3 className='title'>Leave A Comments</h3>

                                   <form action="" className=' form d-flex flex-row gap-30 mt-4 align-items-center '>
                                 <div>
                                     <input type="text" name="" className='form-control' style={{"width":"400px"}} id="" placeholder='Name'/>
                                 </div>
                                 <div>
                                     <input type="email" name="" className='form-control mt-1' style={{"width":"400px"}} id="" placeholder='Email' />
                                 </div>
                                 
                             </form>

                             <div>
                              <textarea name="" id="" cols="30" rows="10" className='form-control mt-4' style={{"height":"127px"}} placeholder='Comments'></textarea>
                          </div>
                               
                             <div className='d-flex mt-4  gap-15 '>
                                      <button className="button border-0" type='submit'>Post Comment</button>
                                      
                                  </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleBlog