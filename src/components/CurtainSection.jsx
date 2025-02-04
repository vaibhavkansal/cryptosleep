import React, { useState } from 'react';
import { CurtainFilterCards } from './subcomponents/FilterCards';

const categories = ['All', 'Blackout Curtains', 'Designer Curtains', 'Jacquard Curtains','Sheer Curtains'];

const MattressSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Add filtering logic here if needed
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '50vh' }}>
        <img src="./asset/curtains.webp" alt="Cryptosleep Curtain" className="absolute w-full h-full object-cover opacity-45" />
        <h1 className="text-5xl font-bold z-10 text-purple-800">CURTAINS</h1>
      </div>

      {/* Pill-Shaped Button Group */}
      <div className="flex justify-center space-x-3 my-5">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2 rounded-full border transition duration-300 ${
              activeCategory === category
                ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Cards Section */}
      <div className="m-5">
        <CurtainFilterCards category={activeCategory} />
      </div>
    </div>
  );
};

export default MattressSection;
