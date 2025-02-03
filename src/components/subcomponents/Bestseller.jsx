import React, { useRef } from 'react';
import Cards from './Cards';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Bestseller = (props) => {
  const headername = props.name;
  const list = props.list;

  // References for Splide instance
  const splideRef = useRef(null);

  return (
    <div className="bg-gray-100 relative">
      <div className="container pb-5 mb-3">
        <p className="text-4xl px-3 py-6 text-gray-600">{headername}</p>

        <Splide
          ref={splideRef}
          options={{
            type: 'loop',
            perPage: 4,
            autoplay: true,
            breakpoints: {
              992: { perPage: 2, autoplay: true },
              576: { perPage: 1, autoplay: true },
            },
            gap: '1rem',
            pagination: false,
            arrows: false, // Disable default arrows
          }}
          aria-label="Bestsellers"
        >
          {list.map((info, index) => (
            <SplideSlide key={index}>
              <Cards info={info} />
            </SplideSlide>
          ))}
        </Splide>

        {/* Custom Navigation Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-200 transition"
          onClick={() => splideRef.current?.splide.go('<')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-200 transition"
          onClick={() => splideRef.current?.splide.go('>')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Bestseller;