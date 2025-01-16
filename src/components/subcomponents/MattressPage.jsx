import React, { useEffect, useState } from 'react'
import ProductImage, { BedCompatible, LayerInfo, ProductDescription, ProductDetail } from './ProductImage'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  const [productjson,setproductjson] = useState([]);
    function getProductsById(id) {
        return products.filter(product => product.id === id);
    }

    useEffect(()=>{
      const p = getProductsById(id)
  
      setproductjson(p);
      mattresshardness(p[0]);
        
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
   
    </div> ) }
  
    </>
  )
}

export default MattressPage

// {
//   "id": "SKY-df2bb41c",
//   "baseLayer": "Hr Foam",
//   "idealFor": "Adults ",
//   "review": "100",
//   "mattressFeel": "medium",
//   "maincategory": "mattress",
//   "image": "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FmainImage.jpg?alt=media&token=3f4dbfd0-8c2a-46b2-a406-b4c40dd0f302",
//   "warranty": "7",
//   "clothType": "Jaquard with 22MM Quilting",
//   "name": "Dual Comfort Mattress",
//   "detailDesc": "Discover the art of indulgent slumber with our Dual Comfort Mattress, a harmonious symphony of Medium Soft and Medium Firm on opposing sides.\nImmerse yourself in the blissful embrace of a cloud-like Medium Soft sensation, while on the flip side, revel in the embrace of a Medium Firm support, seamlessly accommodating your diverse sleep needs. \nThis duality of comfort ensures every night is a masterpiece of restful serenity.",
//   "about": "Medium Soft & Medium Firm, Yours to Embrace",
//   "topLayer": "Memory Foam",
//   "otherImages": [
//       "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FotherImages%2FBlue-2.jpg?alt=media&token=18d94d19-a9a8-468f-bf0c-7191621e1be6",
//       "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FotherImages%2Fcropped-13.jpg?alt=media&token=bda6703d-a551-46e7-83ca-e68d8f596375",
//       "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FotherImages%2F1.png?alt=media&token=775ff21e-7948-4307-aa4c-fa25db0c248a",
//       "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FotherImages%2F2.png?alt=media&token=437828eb-193c-46ca-a5f7-547ea5440a1f"
//   ],
//   "middleLayer": "Comfort Soft Foam",
//   "unitRate": "302",
//   "mattressFirmness": 5,
//   "sellingPrice": "5607",
//   "category": [
//       "Mattress",
//       "Bestseller Mattress",
//       "Medium Mattress"
//   ],
//   "layerImage": "https://firebasestorage.googleapis.com/v0/b/cryptosleep-furniture.firebasestorage.app/o/products%2FSKY-df2bb41c%2FlayerImage.jpg?alt=media&token=9fe9e165-47b3-4033-b255-bf271b07acfb",
//   "mrp": "7890"
// }