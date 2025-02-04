import React from 'react'
import { Link } from 'react-router-dom';
import Star from './Star';

const Cards = (props  ) => {

  const id = props.info.id;
  const image = props.info.image;
  const name = props.info.name;
  const about = props.info.about;
  const review = props.info.review;
  const mrp = props.info.mrp;
  const sellingPrice = props.info.sellingPrice;
  const maincategory = props.info.maincategory;

  return (
    <div className=''>
      <Link to={`/${maincategory}/${id}`} className='no-underline'>
      <div className="card group overflow-hidden max-w-72 mx-auto relative bg-white">
      <div className="overflow-hidden">
        <img 
          src={image} 
          className="card-img-top p-2 rounded-xl transform transition-transform duration-300 group-hover:scale-110" 
          alt="Mattress Photo"
        />
      </div>   
       <div className="card-body mx-2">
          <h5 className="card-title">{name}</h5>
          <Star review={review}/>

          <p className="card-text">{about}</p>
          <div className='flex flex-col justify-between'>
              <div className='flex'>
              <div className="product-pricing">
                    <span className="price">₹{sellingPrice}</span>
                    <span className="mrp">₹{mrp}</span>
                    <span className="discount text-nowrap">
                        Save ₹{(mrp - sellingPrice).toFixed(0)}
                    </span>
                </div>
              </div>
              
              <button type="button" className="text-red-700 w-full rounded-full group-hover:text-white border border-red-700 group-hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm w-12 h-12 flex items-center justify-center  dark:border-red-500 dark:text-red-500 dark:group-hover:text-white dark:group-hover:bg-red-600 dark:focus:ring-red-900">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>

          </div>
        </div>
      </div>
      </Link>
     
      
    </div>
  )
}

export default Cards