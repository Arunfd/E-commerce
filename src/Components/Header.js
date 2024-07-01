import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6 text-start'>
                            <p className='text-white mb-0'>Free Shipping Over $100 And Free Returns</p>
                        </div>
                        <div className='col-6 text-white text-end'>
                            <p className='text-white mb-0'>Hotline :
                                <a className="text-white" href="tel:+91 7010642694"> +91 7010642694</a>
                            </p>
                        </div>

                    </div>
                </div>

            </header>

            <div className='header-upper py-3 '>
                <div className='container-xxl d-flex align-items-center'>
                    <div className='col-2'>
                        <h1 ><Link to='/' className='text-white fs-1'>DIgitic.</Link></h1>
                    </div>
                    <div className='col-5 me-5 '>
                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control py-2"
                                placeholder="Search Product Here ... "
                                aria-label="Search Product Here ..."
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-2 fs-6" id="basic-addon2 ">
                                <BsSearch />
                            </span>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='header-upper-link d-flex align-item-center justify-content-between '>
                            <div>
                                <Link to='/comapre-products' className='d-flex align-items-center justify-content-cente gap-10'>
                                    <img className='heade-upper-img' src="/images/compare.svg" alt="compare" />
                                    <p className='text-white mb-0'>Compares <br /> Products</p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/wishlist' className='d-flex align-items-center justify-content-cente gap-10'>
                                    <img className='heade-upper-img' src="/images/wishlist.svg" alt="wishlist" />
                                    <p className='text-white mb-0'>Favourites <br /> WishList</p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/login' className='d-flex align-items-center justify-content-center gap-10'>
                                    <img className='heade-upper-img' src="/images/user.svg" alt="user" />
                                    <p className='text-white mb-0'>Login <br /> SignUp</p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/cart' className='d-flex align-items-center gap-10 '>
                                    <img className='heade-upper-img' src="/images/cart.svg" alt="" />
                                    <div className='d-flex flex-column gap-10'>
                                        <span className='badge bg-white text-dark '>0</span>
                                        <p className='text-white mb-0'>$0.00</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='menu-bottom d-flex align-items-center gap-30'>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 "
                                     type="button" id="dropdownMenuButton1" 
                                     data-bs-toggle="dropdown" 
                                     aria-expanded="false">
                                          <img className='pe-2' src="/images/menu.svg" alt="" />
                                          <span className='me-5 '>Shop Categories</span> 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item text-white" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item text-white" href="#">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white" href="#">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-links d-flex align-items-center gap-15 '>
                                <NavLink className="text-white" to='/'>Home</NavLink>
                                <NavLink className="text-white" to='/product'>OutStore</NavLink>
                                <NavLink  className="text-white" to='/blogs'>Blogs</NavLink>
                                <NavLink className="text-white" to='/contact'>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header