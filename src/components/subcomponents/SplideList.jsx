import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';



export const MainImageSplide = (props) => {
    const imgPath = props.imgPath;
    const linkpath = props.linkpath;
  return (
    <div>
        <Splide
      options={{
        type: 'loop',
        perPage: 1,
        autoplay: true,
        arrows:false,
      }}
      aria-label="BannerImage"
    >  
    {imgPath.map((path,index)=>(
      <SplideSlide key={index}>     
       <Link to={`/${linkpath[index]}`}>
          <img src={path} className="w-full h-full object-cover"/>
        </Link>
</SplideSlide>

    ))}      
    </Splide>
    </div>
  )
}

export const WhychoseUs = ()=>{
    return(
        <>
        <div className='bg-gray-50'>
        <div className="container  my-4 py-2">
          <h3 className='text-5xl my-5 text-gray-700 text-center'>Why Choose Cryptosleep Mattress?</h3>
          <p className='text-gray-600  md:mx-14 mb-16'>A brand name that has sustained the test of time, we are regarded as the best bed company in India. Cryptosleep has always reinvented itself by introducing cutting-edge technology in its designs and products, to match the needs of its customers. Cryptosleep is the largest selling hospitality mattress brand globally. At Cryptosleep, we want to make sure you receive a good night's sleep.</p>
              <Splide
              options={{
                type: 'loop',
                perPage: 6, // Show 6 slides on large screens
                autoplay: false, // Disable autoplay on large screens
                breakpoints: {
                  768: { // For screens <= 768px
                    perPage: 3, // Show 3 slides
                    autoplay: true, // Enable autoplay on small screens
                  },
                },
                gap: '1rem', // Add space between slides
                pagination: false, // Hide pagination
                arrows: false, // Hide arrows
              }}
              aria-label="Why Choose Us"
            >
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-1.png" alt="icons" />
                  <p>Pressure Mapping</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-2.png" alt="icons" />
                  <p>Sleep Tracker</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-3.png" alt="icons" />
                  <p>Body Discomfort</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-4.png" alt="icons" />
                  <p>Posture Analysis</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-5.png" alt="icons" />
                  <p>Spinal Alignment</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="box-icon text-center">
                  <img className="img-fluid mb-4" src="../icons/why-choose-icon-1.png" alt="icons" />
                  <p>Body Composition</p>
                </div>
              </SplideSlide>
              </Splide>
          </div>
        </div>
          
        
        </>
        
    )
}

