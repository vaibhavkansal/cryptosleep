import React, { useEffect,useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { MainImageSplide, WhychoseUs } from './subcomponents/splideList';
import Bestseller from './subcomponents/Bestseller';
import { ProductContentCurtains, ProductContentMattress } from './subcomponents/ProductContent';
import { Blankspace, Whychosecurtain } from './subcomponents/OtherComponent';
import { useSelector } from 'react-redux';

const HomeSection = () => {
  const products = useSelector((state) => state.products);

  function getProductsByCategory(categoryName) {
    if (products.length >0){
      return products.filter(product => product.category.includes(categoryName));
    }
    else{
      return ([])
    }
  }

  const imgPath = ["../asset/banner2.png","../asset/banner4.png","../asset/banner3.png","../asset/banner5.png"] // banner image paths
  
  const [mattresslist, setMattressList] = useState([]);
  const [curtainlist, setCurtainList] = useState([]);
  const [blackoutlist, setBlackoutList] = useState([]);
  useEffect(()=>{
    setMattressList(getProductsByCategory("Bestseller Mattress"));
    setCurtainList(getProductsByCategory("Bestseller Curtains"));
    setBlackoutList(getProductsByCategory("Blackout Curtains"));

  },[products])




  
  return (
    <div>
      <Blankspace/>

      <div className=''>
      <MainImageSplide imgPath={imgPath} className=""/>
      </div>

      <h2 className='text-2xl m-7  md:text-4xl text-center leading-relaxed md:m-10 text-gray-600 font-serif md:leading-loose'>Redefining Comfort, Style,<br/> and Luxury for Your Home.</h2>
      

        
      {mattresslist.length > 0 ? (
      <Bestseller name="BestSeller Mattress" list={mattresslist}/>
    ) : (
                <p>No products available</p>
            )}


      <ProductContentMattress/>
      <WhychoseUs/>
      <h2 className='text-2xl m-7  md:text-4xl text-center leading-relaxed md:m-10 text-gray-600 font-serif md:leading-loose'>Perfect Curtains for Every Home.</h2>
      
      {curtainlist.length > 0 ? (
      <Bestseller name="BestSeller Curtains" list={curtainlist}/>
    ) : (
                <p>No Curtains available</p>
            )}

      
      <ProductContentCurtains/>

      {blackoutlist.length > 0 ? (
      <Bestseller name="Blackout Curtains" list={blackoutlist}/>
    ) : (
                <p>No Blackout Curtains available</p>
            )}
      <Whychosecurtain/>
   




    
      
    </div>
  )
}

export default HomeSection
