import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Blogcards from '../Components/Blogcards'
import ProductsCard from '../Components/ProductsCard'
import SpecialCards from '../Components/SpecialCards'
import tv from '../images/TV/tv1.webp'
import speaker from '../images/speaker/speaker3.jpg'
import watch1 from '../images/Watch/watch2.webp'
import camera from '../images/camera/camera1.webp'




const Home = () => {
const categoryList = [
  {
id:4,
  imgUrl:watch1,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'DSLR Camera',
  price:'$100',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
id:4,

  imgUrl: camera,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Shoes',
  price:'$150',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
id:4,

  imgUrl: speaker,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Photography',
  price:'$200',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
id:4,
  imgUrl: tv,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Formal Dress',
  price:'$250',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'
  },
  
  ]
    return (
        <div>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                                <div className='main-banner position-relative  '>
                                    <img className='img-fluid rounded-3 ' src="/images/main-banner-1.jpg" alt="" />

                                    <div className='main-banner-content position-absolute'>
                                        <h4>SUPERCHARGED FOR PROS</h4>
                                        <h5>ipad S13+ pro</h5>
                                        <p className='mb-0'>From $999 or $41.76/mo</p>
                                        <p>for 24 mo.Footnote*</p>
                                        <Link className='button'>Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>

                            <div className='d-flex flex-wrap flex-row  justify-content-between gap-10 align-items-center  '>
                                <div className='small-banner position-relative  '>
                                    <img className='img-fluid rounded-3 ' src="/images/catbanner-01.jpg" alt="" />

                                    <div className='small-banner-content position-absolute'>
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p className='mb-0'>From $1699 or </p>
                                        <p>$64.62/mo.</p>

                                    </div>
                                </div>
                                <div className='small-banner position-relative  '>
                                    <img className='img-fluid rounded-3 ' src="/images/catbanner-02.jpg" alt="" />

                                    <div className='small-banner-content position-absolute'>
                                        <h4>10% OFF</h4>
                                        <h5>Smart Watch 7</h5>
                                        <p className='mb-0'>Shop the Latest Band </p>
                                        <p>styles and colors</p>

                                    </div>
                                </div>
                                <div className='small-banner position-relative  '>
                                    <img className='img-fluid rounded-3 ' src="/images/catbanner-03.jpg" alt="" />

                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p className='mb-0'>From $599 or </p>
                                        <p>$52.62/mo. for 12 mon*</p>

                                    </div>
                                </div>
                                <div className='small-banner position-relative  '>
                                    <img className='img-fluid rounded-3 ' src="/images/catbanner-04.jpg" alt="" />

                                    <div className='small-banner-content position-absolute'>
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>AirPods Max</h5>
                                        <p className='mb-0'>High-friendly playback & </p>
                                        <p>ultra-low distortion</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center jsutify-content-between gap-30'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="/images/service.png" alt="" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $5</p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <img src="/images/service-02.png" alt="" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <img src="/images/service-03.png" alt="" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <img src="/images/service-04.png" alt="" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory Default Price</p>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <img src="/images/service-05.png" alt="" />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% protected paymentx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex flex-wrap align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap '>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap'>
                                    <div>
                                        <h6>Watch</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper home-wrapper-2 py-5'>
                 <div className='container-xxl'>
                       <div className='row'>
                          <div className='blog-heading'>
                              <h2>Our Featured Blogs</h2>
                          </div>
                          <ProductsCard/>
                          <ProductsCard/>
                          <ProductsCard/>
                          <ProductsCard/>

                       </div>
                 </div>
            </section>
            <section className='famous-wrapper home-wrapper-2 py-5'>
                 <div className='container-xxl'>
                     <div className='row'>
                         <div className='col-3'>
                             <div className='famous-card'>
                                  <img src="/images/famous9.png"  alt="" />
                             </div>
                         </div>
                     </div>
                 </div>
            </section>
             <section className='home-wrapper-2 py-5'>
                 <div className='container-xxl'>
                     <div className='row'>
                     <div className='blog-heading'>
                              <h2>Special Products</h2>
                          </div>
                          <SpecialCards/>
                          <SpecialCards/>
                          <SpecialCards/>
                          <SpecialCards/>
                          <SpecialCards/>
                          <SpecialCards/>
                     </div>
                 </div>
             </section>
            <section className='marquee-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper bg-white'>
                            <Marquee>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-01.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-02.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-03.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-04.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-05.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-06.png" alt="brand" />
                                 </div>
                                 <div className='mx-4 w-25'>
                                     <img src="/images/brand-07.png" alt="brand" />
                                 </div>
                            </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            <section className='blog-wrapper home-wrapper-2 py-5'>
                 <div className='container-xxl'>
                       <div className='row'>
                          <div className='blog-heading'>
                              <h2>Our Latest News</h2>
                          </div>
                            <div className='col-3'>
                                 <Blogcards/>
                            </div>
                            <div className='col-3'>
                                 <Blogcards/>
                            </div>
                            <div className='col-3'>
                                 <Blogcards/>
                            </div>
                            <div className='col-3'>
                                 <Blogcards/>
                            </div>
                       </div>
                 </div>
            </section>
        </div>
    )
}

export default Home