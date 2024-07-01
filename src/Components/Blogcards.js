import React from 'react'
import { Link } from 'react-router-dom'

const Blogcards = () => {
    return (
        
            <div className='blog-cards'>
                <img src="/images/blog-1.jpg" className='img-fluid w-100' alt="" />
                <div className='blog-content'>
                    <p className='date'>07 JULY, 2023</p>
                    <h5 className='article-head'>A Beautiful Morning Renalssance</h5>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores veniam in sapiente rerum, est fugiat adipisci debitis </p>
                    <Link className='button' to='/blogs/:id'>READ MORE</Link>
                </div>
            </div>
       
    )
}

export default Blogcards