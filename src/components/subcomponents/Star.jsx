import React from 'react'

const Star = (props) => {
    const reviewCount = props.review;
  return (
    <div className='flex'>
        <div className='flex mt-1'>
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#FFD700" 
  viewBox="0 0 24 24" 
  stroke="#FFD700" 
  strokeWidth="2" 
  className="w-4 h-4"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  />
</svg>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#FFD700" 
  viewBox="0 0 24 24" 
  stroke="#FFD700" 
  strokeWidth="2" 
  className="w-4 h-4"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  />
</svg>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#FFD700" 
  viewBox="0 0 24 24" 
  stroke="#FFD700" 
  strokeWidth="2" 
  className="w-4 h-4"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  />
</svg>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#FFD700" 
  viewBox="0 0 24 24" 
  stroke="#FFD700" 
  strokeWidth="2" 
  className="w-4 h-4"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  />
</svg>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#FFD700" 
  viewBox="0 0 24 24" 
  stroke="#FFD700" 
  strokeWidth="2" 
  className="w-4 h-4"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  />
</svg>
        </div>
 
<p className='ms-1'>  ({reviewCount})</p>
    </div>
  )
}

export default Star