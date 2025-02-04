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
    

    function DescForBlackout(){
      return(
        <div className="row m-2 m-md-5 py-3">
                <div className="col-12 col-md-5 flex align-middle items-center ">
                    <div>
                    <h2 className='text-2xl md:text-4xl font-extrabold text-gray-800'>Noise Reducing Blackout Curtains</h2>
                    <p className='text-gray-600 my-3'>Cryptosleep Blackout Curtains are sound resistant and designed to enhance your home with their blackout capabilities. Made of high-quality, thermal-insulated fabric, these Cryptosleep curtains also help in regulating room temperature, making them both functional and stylish additions to your home decor.</p>
                   
                    </div>
                    
                </div>
                <div className="col-12 col-md-7 ">
                <div className="row flex justify-center">
                    <img className="img col-6" alt="Blackout Noise reducing curtains | Cryptosleep" src="../asset/thermal1.webp"/>
                    <img className="img col-6" alt="Blackout Noise reducing curtains | Cryptosleep" src="../asset/thermal2.webp"/>
                </div>

                    
                
                </div>


                <div className="col-12 col-md-5 flex align-middle items-center my-5 ">
                <img className="img rounded-2xl" alt="Blackout curtains | Cryptosleep" src="https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/website%2F4.jpg?alt=media&token=6e1045a5-1899-44cd-aae3-55f750c34846"/>
                </div>

                <div className="col-12 col-md-7 my-md-5">

                  <div class="bg-white p-6 md:p-8 lg:p-10 rounded-lg">
                    <h1 class="text-3xl font-bold text-gray-800 mb-4">Cryptosleep Blackout Curtains</h1>
                    <p class="text-gray-700 text-lg leading-relaxed mb-4">
                      Cryptosleep Blackout Curtains are designed to provide the perfect combination of elegance, comfort, and functionality. Made with high-quality, dense fabric, these curtains effectively block out sunlight, ensuring a dark and peaceful ambiance for restful sleep or a cozy home theater experience.
                    </p>

                    <h2 class="text-2xl font-semibold text-gray-800 mb-3">Key Features:</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <span class="font-semibold text-gray-900">100% Light Blocking:</span> Designed with multiple layers and advanced weaving technology, these curtains can block up to 100% of sunlight and UV rays, making them perfect for bedrooms, nurseries, and home offices.
                      </li>
                      <li>
                        <span class="font-semibold text-gray-900">Thermal Insulation:</span> The thick fabric helps regulate indoor temperature by keeping heat out during summers and retaining warmth in winters, leading to energy savings.
                      </li>
                      <li>
                        <span class="font-semibold text-gray-900">Noise Reduction:</span> The dense material significantly reduces outside noise, creating a quiet and serene environment.
                      </li>
                      <li>
                        <span class="font-semibold text-gray-900">Premium Fabric & Aesthetic Appeal:</span> Available in a variety of colors and textures, these curtains complement modern and traditional interiors alike, adding a touch of luxury to any room.
                      </li>
                      <li>
                        <span class="font-semibold text-gray-900">Easy Maintenance:</span> Made from wrinkle-resistant, durable fabric, Cryptosleep Blackout Curtains are machine washable and easy to maintain.
                      </li>
                    </ul>

                    <p class="text-gray-700 text-lg leading-relaxed mt-4">
                      Whether you need complete darkness for better sleep, enhanced privacy, or an energy-efficient solution for your home, Cryptosleep Blackout Curtains offer the perfect solution. Available in various sizes and designs, they bring both style and functionality to your living space.
                    </p>
                  </div>

                    
                  

                  
                </div>
                

                </div>
      )
    }


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

                {productjson[0].category.includes("Blackout Curtains") && DescForBlackout()}


      
            <Whychosecurtain/>



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