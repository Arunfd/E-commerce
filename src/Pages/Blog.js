import React from 'react'
import Meta from '../Components/Meta'
import BreadCramp from '../Components/BreadCrump'
import Blogcards from '../Components/Blogcards'

const Blog = () => {
    return (
        <div>
            <Meta title={"Blogs"} />
            <BreadCramp title="Bolgs" />
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
                        <div className='col-9 '>
                            <div className='row'>
                                  <div className='col-6 mb-4'>
                                     <Blogcards/>
                                  </div>
                                  <div className='col-6 mb-4'>
                                     <Blogcards/>
                                  </div>
                                  <div className='col-6 mb-4'>
                                     <Blogcards/>
                                  </div>
                                  <div className='col-6 mb-4'>
                                     <Blogcards/>
                                  </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog