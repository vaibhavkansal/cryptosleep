import React from 'react'
import Cards from './Cards'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Bestseller = (props) => {

  const headername = props.name;
  const  list= props.list;
  
  return (
    <div className='bg-gray-100'>
        <div className="container pb-5 mb-3">
            <p className='text-4xl px-3 py-6 text-gray-600'>{headername}</p>
            

            <Splide
        options={{
          type: 'loop',
          perPage: 4, // Show 6 slides on large screens
          autoplay: true, // Disable autoplay on large screens
          breakpoints: {
            992: { // For screens <= 768px
              perPage: 2, // Show 3 slides
              autoplay: true, // Enable autoplay on small screens
            },
            576:{
              perPage: 1, // Show 3 slides
              autoplay: true, // Enable autoplay on small screens
            }
          },
          gap: '1rem', // Add space between slides
          pagination: false, // Hide pagination
          arrows: true, // Hide arrows
        }}
        aria-label="Why Choose Us"
      >
        {/* for loop lagakar yaha process processkardo */}
        {list.map((info,index) =>(
          <SplideSlide key={index}><Cards info = {info}/></SplideSlide>
        ))}
        
        </Splide>
        
        </div>

    </div>
  )
}

export default Bestseller