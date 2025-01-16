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
    return products.filter(product => product.category.includes(categoryName));
}

  const imgPath = ["../asset/banner2.png","../asset/banner4.png","../asset/banner3.png","../asset/banner5.png"] // banner image paths
  // var mattresslist = [{
  //   "id":"qasdw3e2swx",
  //   "image":"https://kurlon.com/cdn/shop/files/631979207-spine-ortho-1.jpg?v=1727336168",
  //   "name":"Soft Eco Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"sdwfet4fecd",
  //   "image":"https://www.dreamsonlinestore.in/wp-content/uploads/2023/12/Smart-Cozy-Mattress-400x400.jpg",
  //   "name":"Smart Soft Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasde2swx",
  //   "image":"https://www.dreamsonlinestore.in/wp-content/uploads/2023/12/Dr.-Ortho-Spine-Care-Mattress-400x400.jpg",
  //   "name":"comport pro Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasdw3e2swx",
  //   "image":"https://kurlon.com/cdn/shop/files/MG_7242_496acc24-9db6-4d23-bcbe-5c76c3dd9818.jpg?v=1726647027",
  //   "name":"Comfort Plus Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // }]
  // const curtainlist = [{
  //   "id":"qasdw3e2swx",
  //   "image":"./asset/curtain1.jpg",
  //   "name":"Soft Eco Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"sdwfet4fecd",
  //   "image":"./asset/blackout1.jpg",
  //   "name":"Smart Soft Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasde2swx",
  //   "image":"./asset/curtain2.jpg",
  //   "name":"comport pro Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasdw3e2swx",
  //   "image":"./asset/curtain3.jpg",
  //   "name":"Comfort Plus Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // }]
  // const blackoutlist = [{
  //   "id":"qasdw3e2swx",
  //   "image":"./asset/blackout1.jpg",
  //   "name":"Soft Eco Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"sdwfet4fecd",
  //   "image":"./asset/blackout2.jpg",
  //   "name":"Smart Soft Mattress",
  //   "about":"Soft Mattress which is for adults",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasde2swx",
  //   "image":"./asset/blackout3.jpg",
  //   "name":"comport pro Mattress",
  //   "about":"Blackout Curtain heat block",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // },
  // {
  //   "id":"qasdw3e2swx",
  //   "image":"./asset/blackout4.jpg",
  //   "name":"Comfort Plus Mattress",
  //   "about":"Blackout Curtain heat block",
  //   "mrp": "9876",
  //   "sellingPrice": "6223",
  //   "review":"130"
  // }]
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
