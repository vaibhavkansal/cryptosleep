import React, { useEffect, useState } from 'react'
import ProductImage, { BedCompatible, LayerInfo, ProductDescription, ProductDetail } from './ProductImage'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Bestseller from './Bestseller';

const MattressPage = () => {
  const param = useParams();
  const id = param["pid"];
  const maincategory = param["maincategory"];
  const products = useSelector((state) => state.products);
  const [hardnesimg,sethardnesimg] = useState("");




  function mattresshardness(l){
    var firm = "10";
    try{
       firm = l.mattressFirmness;

    }
    catch{
      firm = "10";

    }
    
    const level = parseInt(firm);
    console.log("defvgfv",level);
    if(level <= 4 ){
      sethardnesimg("../../asset/3-4.webp")
    }
    else if(level > 4 && level <= 6){
      sethardnesimg("../../asset/5-6.webp")
    }
    else if(level > 6 && level <= 8){
      sethardnesimg("../../asset/7-8.webp")
    }
    else {
      sethardnesimg("../../asset/9-10.webp")
    }
  }
  function getProductsByCategory(categoryName) {
    if (products.length >0){
      return products.filter(product => product.category.includes(categoryName));
    }
    else{
      return ([])
    }
  }
  const [productjson,setproductjson] = useState([]);
    function getProductsById(id) {
        return products.filter(product => product.id === id);
    }


    const [mattresslist, setMattressList] = useState([]);
    const [curtainlist, setCurtainList] = useState([]);
    const [blackoutlist, setBlackoutList] = useState([]);
    
    
    useEffect(()=>{
      const p = getProductsById(id)
  
      setproductjson(p);
      mattresshardness(p[0]);
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
    <ProductDetail product={productjson[0]} className="sm:w-1/2"/>
    </div>
      {/* mattress banner for computer site */}
    <div class="hidden grid-cols-4 gap-3 overflow-x-auto bg-[#f4f4f4] p-4 lg:grid 3xl:gap-6"><div class="grid w-full flex-none cursor-default grid-cols-2 items-center rounded-xl border border-[#e7e0fc] bg-white pr-4" role="button" tabIndex="0"><div class="flex"><div class="flex h-20 items-center justify-center rounded-l-xl bg-[#e7e0fc] 3xl:w-[120px]"><img alt="badges" fetchpriority="high" width="90" height="90" decoding="async" data-nimg="1" class="h-20  p-2" src="../../icons/100.svg" style={{"color": "transparent"}}/></div><div class="h-0 w-0 border-r-[40px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#e7e0fc]"></div></div><div class="flex flex-col gap-1 text-center"><span class="text-sm font-bold leading-snug text-[#7d7e7f] 4xl:text-base">Try for 100 Days</span><span class="text-xs font-medium leading-snug text-[#7d7e7f]">Not satisfied? Get your money back</span></div></div><div class="grid w-full flex-none cursor-default grid-cols-2 items-center rounded-xl border border-[#e7e0fc] bg-white pr-4" role="button" tabindex="0"><div class="flex"><div class="flex h-20 items-center justify-center rounded-l-xl bg-[#e7e0fc] 3xl:w-[120px]"><img alt="badges" fetchpriority="high" width="90" height="90" decoding="async" data-nimg="1" class="h-20  p-2"  src="../../icons/deliver.svg" style={{"color": "transparent"}}/></div><div class="h-0 w-0 border-r-[40px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#e7e0fc]"></div></div><div class="flex flex-col gap-1 text-center"><span class="text-sm font-bold leading-snug text-[#7d7e7f] 4xl:text-base">Free Shipping</span><span class="text-xs font-medium leading-snug text-[#7d7e7f]"></span></div></div><div class="grid w-full flex-none cursor-default grid-cols-2 items-center rounded-xl border border-[#e7e0fc] bg-white pr-4" role="button" tabindex="0"><div class="flex"><div class="flex h-20 items-center justify-center rounded-l-xl bg-[#e7e0fc] 3xl:w-[120px]"><img alt="badges" fetchpriority="high" width="90" height="90" decoding="async" data-nimg="1" class="h-20  p-2" src="../../icons/quality.svg" style={{"color": "transparent"}}/></div><div class="h-0 w-0 border-r-[40px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#e7e0fc]"></div></div><div class="flex flex-col gap-1 text-center"><span class="text-sm font-bold leading-snug text-[#7d7e7f] 4xl:text-base">10 years manufacturer warranty</span><span class="text-xs font-medium leading-snug text-[#7d7e7f]"></span></div></div><div class="grid w-full flex-none cursor-default grid-cols-2 items-center rounded-xl border border-[#e7e0fc] bg-white pr-4" role="button" tabindex="0"><div class="flex"><div class="flex h-20 items-center justify-center rounded-l-xl bg-[#e7e0fc] 3xl:w-[120px]"><img alt="badges" fetchpriority="high" width="90" height="90" decoding="async" data-nimg="1" class="h-20  p-2" src="../../icons/measure.svg" style={{"color": "transparent"}} /></div><div class="h-0 w-0 border-r-[40px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#e7e0fc]"></div></div><div class="flex flex-col gap-1 text-center"><span class="text-sm font-bold leading-snug text-[#7d7e7f] 4xl:text-base">Need a Size not Shown?</span><span class="text-xs font-medium leading-snug text-[#7d7e7f]">Order with custom options</span></div></div></div>
    <ProductDescription product={productjson[0]}/>
      <BedCompatible/>
      <LayerInfo product={productjson[0]}/>

      <div className=' md:flex md:justify-between m-5 text-center'>
        <p className='text-center items-center m-auto text-3xl text-gray-600'>Mattress Hardness Meter :</p>
        <img src={hardnesimg} className='mt-5 md:mt-0'  alt="image for mattress firmness" />
      </div>

      {mattresslist.length > 0 ? (
      <Bestseller name="You May Also Like" list={mattresslist}/>
    ) : (
                <p>No products available</p>
            )}

    {curtainlist.length > 0 ? (

      <div className='-my-4'><Bestseller name="Choose From Our Bestseller Curtains" list={curtainlist}/></div>
    ) : (
                <p>No Curtains available</p>
            )}
  
    </div> ) }
  
    </>
  )
}

export default MattressPage

