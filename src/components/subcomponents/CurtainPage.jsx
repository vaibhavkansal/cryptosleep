import React, { useEffect, useState } from 'react'
import ProductImage, { BedCompatible, CurtainDetail, LayerInfo, ProductDescription, ProductDetail } from './ProductImage'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bestseller from './Bestseller';
import { Whychosecurtain } from './OtherComponent';

const CurtainPage = () => {
  const param = useParams();
    const id = param["pid"];
    const maincategory = param["maincategory"];
    const products = useSelector((state) => state.products);
    const [productjson,setproductjson] = useState([]);

    function getProductsByCategory(categoryName) {
      if (products.length >0){
        return products.filter(product => product.category.includes(categoryName));
      }
      else{
        return ([])
      }
    }
    const [mattresslist, setMattressList] = useState([]);
    const [curtainlist, setCurtainList] = useState([]);
    const [blackoutlist, setBlackoutList] = useState([]);
    
    function getProductsById(id) {
            return products.filter(product => product.id === id);
        }
    
        useEffect(()=>{
          const p = getProductsById(id)
      
          setproductjson(p);

        setMattressList(getProductsByCategory("Bestseller Mattress"));
        setCurtainList(getProductsByCategory("Bestseller Curtains"));
        setBlackoutList(getProductsByCategory("Blackout Curtains"));
        
            
        },[products])
    
  return (
    <>
        {/* first we will create product image carousal  */}
        {productjson.length > 0 && (
          <div>
            <div className="sm:flex">
                <ProductImage product={productjson[0]} className="sm:w-1/2"/>
                <CurtainDetail product={productjson[0]} className="sm:w-1/2"/>

              
                </div>
                <Whychosecurtain/>

                <div className="row m-5 py-3">
                <div className="col-12 col-md-5 flex align-middle items-center ">
                    <div>
                    <h2 className='text-2xl md:text-4xl font-extrabold text-gray-800'>Noise Reducing Blackout Curtains</h2>
                    <p className='text-gray-600 my-3'>Cryptosleep Blackout Curtains are sound resistant and designed to enhance your home with their blackout capabilities. Made of high-quality, thermal-insulated fabric, these Cryptosleep curtains also help in regulating room temperature, making them both functional and stylish additions to your home decor.</p>
                   
                    </div>
                    
                </div>
                <div className="col-12 col-md-7 ">
                <div className="row flex justify-center">
                    <img className="img col-5" alt="Blackout Noise reducing curtains | Cryptosleep" src="../asset/thermal1.webp"/>
                    <img className="img col-5" alt="Blackout Noise reducing curtains | Cryptosleep" src="../asset/thermal2.webp"/>
                </div>

                    
                
            </div>
            </div>


          </div>

        )}

        
        
        {blackoutlist.length > 0 ? (
      <Bestseller name="You May Also Like " list={blackoutlist}/>
    ) : (
                <p>No Blackout Curtains available</p>
            )}

        {curtainlist.length > 0 ? (

        <div className='-my-4'><Bestseller name="Choose From Our Bestseller Curtains" list={curtainlist}/></div>
        ) : (
                  <p>No Curtains available</p>
              )}



    
    
    </>
  )
}

export default CurtainPage