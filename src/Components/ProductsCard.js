import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import watch from '../images/watch.jpg'
import wishlist from '../images/wish.svg'
import prdcompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import tv from '../images/TV/tv3.jpg'
import speaker from '../images/speaker/speaker5.jpg'
import watch1 from '../images/Watch/watch4.jpg'
import camera from '../images/camera/cam7.jpg'
import headphone from '../images/speaker/headphone3.webp'





const categoryList = [
  {
  imgUrl:watch1,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'DSLR Camera',
  price:'$100',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
  imgUrl: camera,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Shoes',
  price:'$150',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
  imgUrl: speaker,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Photography',
  price:'$200',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'

  },
  {
  imgUrl: tv,
  imgAlt: 'category rajibraj91 rajibraj',
  iconName: 'icofont-brand-windows',
  title: 'Formal Dress',
  price:'$250',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?'
  },
  
  ]

const ProductsCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to=':id' className='prd-card position-relative'>  
          <div className='wish-list position-absolute'>
            <Link><img src="/images/wish.svg " alt="" /></Link>
          </div>
          <div className='prd-image'>
            <img src={watch1} className='img-fluid' alt="" />
          </div>
        
          <div className='prd-details'>
            <h6 className='brand'>heavells</h6>
            <h5 className='desc'>Milance Loop Watch brand For 42mm/44mm Apple..</h5>
            <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?
            </p>
            <ReactStars
              classNames="start"
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className='price'>$100</p>
          </div>
          <div className='action-bar position-absolute gap-15'>
            <div className='d-flex flex-column '>
              <Link >
                <img src="/images/prodcompare.svg" alt="" />
              </Link>
              <Link >
                <img src="/images/view.svg" alt="" />
              </Link>
              <Link >
                <img src="/images/add-cart.svg" alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className={`${location.pathname=="/product" ? `gr-${grid}` : "col-3"}`}>
            <div className='prd-card position-relative'>
                  <div className='wish-list position-absolute'>
                     <Link><img  src={wishlist} alt="" /></Link>
                  </div>
                  <div className='prd-image'>
                  <img src={watch} className='img-fluid' alt="" />
                  </div>
                <div className='prd-details'>
                    <h6 className='brand'>heavells</h6>
                    <h5 className='desc'>Milance Loop Watch brand For 42mm/44mm Apple..</h5>
            <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quisquam ea minima itaque enim. Tempora quibusdam, consectetur consequuntur delectus dolore quo nostrum magni et assumenda voluptas molestias. Excepturi, necessitatibus repudiandae?</p>

                    <ReactStars
                        classNames="start"
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>$100</p>
                </div>
                <div className='action-bar position-absolute gap-15'>
                    <div className='d-flex flex-column '>
                    <Link >
                      <img src={prdcompare} alt="" />
                    </Link>
                    <Link >
                      <img src={view}alt="" />
                    </Link>
                    <Link >
                      <img src={addcart} alt="" />
                    </Link>
                    </div>
                </div>
            </div>
        </div> */}


    </>
  )
}

export default ProductsCard