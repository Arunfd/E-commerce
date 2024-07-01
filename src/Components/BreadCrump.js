import React from 'react'
import { Link } from 'react-router-dom';

const BreadCramp = (props) => {
    const { title } = props;
    return (
        <div>
            <div className='breadscrumb py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center text-dark'><Link to='/'>Home </Link>/ {title}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BreadCramp