import React, { useEffect, useState } from 'react'
import ProductImage, { BedCompatible, LayerInfo, ProductDescription, ProductDetail } from './ProductImage'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CurtainPage = () => {
  const param = useParams();
    const id = param["pid"];
    const maincategory = param["maincategory"];
    const products = useSelector((state) => state.products);
    const [productjson,setproductjson] = useState([]);
        function getProductsById(id) {
            return products.filter(product => product.id === id);
        }
    
        useEffect(()=>{
          const p = getProductsById(id)
      
          setproductjson(p);
            
        },[products])
    
  return (
    <>
        {/* first we will create product image carousal  */}
        {productjson.length > 0 && (
          <div>
            <div className="sm:flex">
                <ProductImage product={productjson[0]} className="sm:w-1/2"/>
                <ProductDetail product={productjson[0]} className="sm:w-1/2"/>
                </div>


          </div>
        )}

    
    
    </>
  )
}

export default CurtainPage