import React, { useState } from 'react'
import BreadCramp from '../Components/BreadCrump'
import Meta from '../Components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductsCard from '../Components/ProductsCard'

const OurStore = () => {
   const [grid,setgrid]=useState(4);
//  alert(grid);
  return (
    <div>
      <Meta title="Our Store" />
      <BreadCramp title="Our Store" />
      <div className='outstore-wrapper home-wrapper-2 py-4'>
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

              <div className='title-card mb-3'>
                <h3 className='filter-title mb-4'>Filter By</h3>
                <div className='sub-card'>
                  <h5 className='sub-title'>Availablity</h5>
                  <div className='form-check'>
                    <input type="checkbox" value="" className='form-check-input' id="" />
                    <label htmlFor="" className='form-check-label'>In Stock (2)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" value="" className='form-check-input' id="" />
                    <label htmlFor="" className='form-check-label'>Out Of Stock (0)</label>
                  </div>
                </div>
                <div>

                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <span className=' span mb-3'>$</span>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" style={{ "height": "20px" }} id="floatingInput" placeholder="From" />
                      <label for="floatingInput" className=' form-label py-1'>From</label>
                    </div>
                    <span className=' span mb-3'>$</span>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control " style={{ "height": "20px" }} id="floatingInput1" placeholder="To" />
                      <label for="floatingInput " className=' form-label py-1'>To</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className='sub-title'>Colors</h5>
                  <div className=''>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li className='l1'></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className='sub-title'>Size</h5>
                  <div className='form-check'>
                    <input type="checkbox" value="" className='form-check-input' id="color1" />
                    <label htmlFor="color1" className='form-check-label'>S (2)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" value="" className='form-check-input' id="color2" />
                    <label htmlFor="color2" className='form-check-label'>M (0)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" value="" className='form-check-input' id="color3" />
                    <label htmlFor="color3" className='form-check-label'>XL (1)</label>
                  </div>
                </div>
              </div>

              <div className='title-card mb-3'>
                <h3 className='filter-title mb-4'>Products Tags</h3>
                <div className=' prd-tags d-flex flex-wrap gap-10 align-items-center'>
                  <span className='badge rounded-2 bg-light text-secondary py-2 px-2'>Head Phones</span>
                  <span className='badge rounded-2 bg-light text-secondary py-2 px-2'>Laptop</span>
                  <span className='badge rounded-2 bg-light text-secondary py-2 px-2'>Mobiles</span>
                  <span className='badge rounded-2 bg-light text-secondary py-2 px-2'>Smart Watch</span>
                  <span className='badge rounded-2 bg-light text-secondary py-2 px-2'>Smart TV</span>

                </div>
              </div>

              <div className='title-card'>
                <h3 className='filter-title mb-4'>Random Products</h3>
                <div className='random-products mb-3 d-flex '>
                  <div className='w-50'>
                    <img src="/images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className=' rand-content w-50'>
                    <h6 class="brand">heavells</h6>
                    <h5 class="desc">Milance Loop Watch brand For 42mm/44mm Apple..</h5>
                    <ReactStars
                      classNames="start"
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p class="price">$100.00</p>
                  </div>


                </div>

                <div className=' random-products d-flex '>
                  <div className='w-50'>
                    <img src="/images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className=' rand-content w-50'>
                    <h6 class="brand">heavells</h6>
                    <h5 class="desc">Milance Loop Watch brand For 42mm/44mm Apple..</h5>
                    <ReactStars
                      classNames="start"
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p class="price">$100.00</p>
                  </div>


                </div>


              </div>

            </div>
            <div className='col-9'>
                  <div className='filter-grid mb-4 '>
                    <div className='d-flex justify-content-between  align-items-center'>
                      <div className='d-flex justify-contetnt-between align-items-center'>
                      <p className='mb-0' style={{"width":"100px"}}>Sort By :</p>
                        <select  className='form-control form-select ' style={{width:"200px"}}>
                            <option value="selected">Best Selling</option>
                            <option value="alphabetical-ascending">Alphabetical A-Z</option>
                            <option value="alphabetical-deccending">Alphabetical Z-A</option>
                            <option value="price-ascending">Price Low to High</option>
                            <option value="price-descending">Price High to Low</option>
                            <option value="selected">Featured</option>
                        </select>
                        </div>
                          <div className='d-flex align-items-center gap-10'>
                             <p className='mb-0'>21 products</p>
                              <div className='d-flex align-items-center gap-10 justify-content-center grid'>
                                   <img onClick={()=> {setgrid(3)}} src="/images/gr4.svg" className='img-fluid' alt="" />
                                   <img  onClick={()=> setgrid(4)} src="/images/gr3.svg" className='img-fluid 'alt="" />
                                   <img  onClick={()=> setgrid(6)} src="/images/gr2.svg"  className='img-fluid 'alt="" />
                                   <img  onClick={()=> setgrid(12)} src="/images/gr.svg"   className='img-fluid 'alt="" />
                              </div>
                          </div>
                      </div>
                      
                  </div>

                  <div className='product-grid py-4'>
                      <div className='d-flex flex-wrap gap-15'>
                      <ProductsCard grid={grid}/>
                      </div>
                  </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStore