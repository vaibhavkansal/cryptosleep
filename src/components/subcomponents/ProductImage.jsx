import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CurtainSizeModal, MattressSizeModal } from "./OtherComponent";
import { addtoCart,addCurtaintoCart } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import  '@splidejs/splide/css';

const ProductImage = ({ product }) => {
  const mainRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [allimages, setallimages] = useState([]);


  useEffect(() => {
    if (mainRef.current && thumbnailRef.current) {
      const mainSplide = mainRef.current.splide;
      const thumbnailSplide = thumbnailRef.current.splide;
      setallimages([image, layerImage, ...otherImages]);

      if (mainSplide && thumbnailSplide) {
        mainSplide.sync(thumbnailSplide);
      }
    }
  }, []);

  const {
    id,  
    name,    
    image,   
    category,
    detailDesc,
    layerImage,
    otherImages,
    layerInfo,
    idealFor,
    mattressFeel,
    warranty,
    sellingPrice,
    mrp,
    review,
    about,
    clothType,
  } = product;

  return (
    <>
      <div className="sm:w-1/2 m-4">
        <div className="m-2 mb-4">
          <Splide
            ref={mainRef}
            options={{
              type: "fade",
              pagination: false,
              autoplay: true,
              rewind: true,
              arrows: false,
            }}
            id="main-slider"
          >
            {allimages.map((img, index) => (
              <SplideSlide key={index} data-splide-interval="2000">
                <img
                  src={img}
                  alt={"Slide " + index}
                  style={{ objectFit: "contain" }}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="bg-gray-50">
  <Splide
    ref={thumbnailRef}
    options={{
      rewind: true,
      isNavigation: true,
      gap: 10,
      focus: "center",
      arrows: false,
      pagination: false,
      perPage: 5, // Default perPage option

      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          perPage: 3, // Adjusted perPage for smaller screens
        },
      },
    }}
    id="thumbnail-slider"
  >
    {allimages.map((img, index) => (
      <SplideSlide key={index}>
        <img src={img} alt={"Slide " + index} />
      </SplideSlide>
    ))}
  </Splide>
</div>
      </div>
    </>
  );
};

export default ProductImage;


export const ProductDetail = (props) => {
  const product1 = props.product;
  const [pincode, setpincode] = useState("");
  const [product,setproduct] = useState({...product1,"OrderSize":"Choose Size"});
  var [devdate,setdevdate] = useState("");
  // var [choosenSize,setchoosenSize] = useState("Choose Size");
  const dispatch = useDispatch();

  const pincodeInput = useRef(null);
  const navigate = useNavigate();
  function checkPincode(){
    const v = pincodeInput.current.value;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();
    setdevdate(`${day}-${month}-${year}`);
  }
  function addcart(){
    if (product.OrderSize === "Choose Size"){
      alert("Size Not Selected Properly");
    }
    else{
      dispatch(addtoCart(product));
      navigate("/cart");
    }
    
  }


  return (
    <>
      <div className="m-4 sm:w-1/2">
        <p className="text-3xl mb-2">{product.name}</p>
        <p className="text-xl text-gray-600 font-serif">{product.about}</p>
        <div className="flex flex-col sm:flex-row  gap-4">
          <div
            class="  flex w-max items-center gap-1 rounded-[8px] mb-0 border border-[#E6E7E8] p-2 text-base shadow-sm md:text-xs"
            id="product_rating"
          >
            <p class="font-extrabold m-0">4.4</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className=" text-[#05A585]"
            >
              <path
                stroke="none"
                d="m234.5 114.38-45.1 39.36 13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15 23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
              ></path>
            </svg>
            <p class="text-[#909090] m-0">| {product.review} </p>
          </div>
          <div
            id="social_proofing"
            class="flex  items-center gap-2 bg-[#EAF4F2] px-4 py-1.5 text-base md:w-max md:rounded-[8px] md:border md:border-[#E6E7E8] md:bg-white md:shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 20 21"
              class="h-[14px] w-[14px] text-[#575757] md:h-[18px] md:w-[18px] md:text-black"
            >
              <mask
                id="a"
                width="21"
                height="21"
                x="-1"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M-.004.406h20v20h-20z"></path>
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#1C1B1F"
                  d="M5.958 18.367q-.608 0-1.033-.425a1.4 1.4 0 0 1-.426-1.033q0-.608.426-1.033a1.4 1.4 0 0 1 1.033-.426q.608 0 1.032.426.426.426.426 1.033t-.426 1.033a1.4 1.4 0 0 1-1.032.425m8.076 0q-.607 0-1.032-.425a1.4 1.4 0 0 1-.426-1.033q0-.608.426-1.033a1.4 1.4 0 0 1 1.032-.426q.608 0 1.033.426.426.426.426 1.033t-.426 1.033a1.4 1.4 0 0 1-1.033.425M5.01 5.194 7.12 9.617h5.681q.072 0 .128-.036a.3.3 0 0 0 .097-.1l2.235-4.063q.048-.087.008-.156-.04-.068-.136-.068zm-.6-1.25H15.98q.511 0 .773.435t.025.889l-2.67 4.836q-.204.36-.542.562a1.4 1.4 0 0 1-.74.201h-6.08l-.965 1.763q-.063.096-.004.208.06.112.18.112h9.536v1.25H5.958q-.833 0-1.253-.718-.42-.72-.03-1.435l1.19-2.138-3.032-6.382H1.246v-1.25h2.372z"
                ></path>
              </g>
            </svg>
            <p class="text-[11px] font-normal text-[#575757] m-0 md:text-xs md:text-black">
              <span class="font-semibold">70+</span> added to the cart past week
            </p>
          </div>
        </div>
        ̉
        <div class="grid auto-cols-max grid-flow-col grid-cols-[auto_auto_1fr] items-center md:mt-5 md:grid-cols-[auto_auto_auto_1fr] 3xl:mt-5 4xl:mt-10">
          <div class="flex h-full items-center bg-[#E7E0FC] py-1 pl-4 pr-4 md:rounded-l-[6px] 3xl:pr-3 4xl:pr-4">
            <div class="h-6 w-6 3xl:h-7 3xl:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 573 573"
                width="573"
                height="573"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_445">
                    <rect width="573" height="573" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_445)">
                  <g
                    style={{ display: "block" }}
                    transform="matrix(0.4146932363510132,0.9099612832069397,-0.9099612832069397,0.4146932363510132,414.1416015625,-62.029327392578125)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,263.5559997558594,265.2359924316406)"
                    >
                      <path
                        fill="rgb(227,129,128)"
                        fill-opacity="1"
                        d=" M-113.69300079345703,-228.32899475097656 C-108.91200256347656,-242.67999267578125 -92.63200378417969,-249.59100341796875 -78.98799896240234,-243.06100463867188 C-78.98799896240234,-243.06100463867188 -35.909000396728516,-222.44500732421875 -35.909000396728516,-222.44500732421875 C-27.177000045776367,-218.26600646972656 -16.822999954223633,-219.4709930419922 -9.284000396728516,-225.54200744628906 C-9.284000396728516,-225.54200744628906 27.909000396728516,-255.4980010986328 27.909000396728516,-255.4980010986328 C39.689998626708984,-264.9859924316406 57.12200164794922,-261.99798583984375 65.06999969482422,-249.1280059814453 C65.06999969482422,-249.1280059814453 90.16500091552734,-208.49400329589844 90.16500091552734,-208.49400329589844 C95.25,-200.25900268554688 104.61199951171875,-195.6739959716797 114.23600006103516,-196.70700073242188 C114.23600006103516,-196.70700073242188 161.7209930419922,-201.79800415039062 161.7209930419922,-201.79800415039062 C176.76100158691406,-203.41099548339844 189.80999755859375,-191.47300720214844 189.53799438476562,-176.34800720214844 C189.53799438476562,-176.34800720214844 188.68099975585938,-128.5989990234375 188.68099975585938,-128.5989990234375 C188.50799560546875,-118.9209976196289 193.9040069580078,-110.00299835205078 202.5590057373047,-105.66799926757812 C202.5590057373047,-105.66799926757812 245.25799560546875,-84.27999877929688 245.25799560546875,-84.27999877929688 C258.7829895019531,-77.50399780273438 263.3059997558594,-60.40700149536133 254.9010009765625,-47.83000183105469 C254.9010009765625,-47.83000183105469 228.36500549316406,-8.12399959564209 228.36500549316406,-8.12399959564209 C222.98599243164062,-0.07500000298023224 222.70399475097656,10.343999862670898 227.64100646972656,18.66900062561035 C227.64100646972656,18.66900062561035 251.99899291992188,59.74800109863281 251.99899291992188,59.74800109863281 C259.7139892578125,72.76000213623047 254.2740020751953,89.58999633789062 240.40499877929688,95.6240005493164 C240.40499877929688,95.6240005493164 196.61300659179688,114.68099975585938 196.61300659179688,114.68099975585938 C187.73899841308594,118.54199981689453 181.86900329589844,127.15599822998047 181.5189971923828,136.8300018310547 C181.5189971923828,136.8300018310547 179.802001953125,184.5570068359375 179.802001953125,184.5570068359375 C179.2570037841797,199.6739959716797 165.58299255371094,210.89100646972656 150.6510009765625,208.46800231933594 C150.6510009765625,208.46800231933594 103.51100158691406,200.8249969482422 103.51100158691406,200.8249969482422 C93.95500183105469,199.27499389648438 84.36100006103516,203.34800720214844 78.83799743652344,211.29800415039062 C78.83799743652344,211.29800415039062 51.59000015258789,250.5189971923828 51.59000015258789,250.5189971923828 C42.95899963378906,262.9429931640625 25.392000198364258,264.9859924316406 14.137999534606934,254.87600708007812 C14.137999534606934,254.87600708007812 -21.385000228881836,222.95899963378906 -21.385000228881836,222.95899963378906 C-28.586999893188477,216.48899841308594 -38.86000061035156,214.72900390625 -47.803001403808594,218.4290008544922 C-47.803001403808594,218.4290008544922 -91.93099975585938,236.6929931640625 -91.93099975585938,236.6929931640625 C-105.90799713134766,242.47900390625 -121.79100036621094,234.69900512695312 -125.79199981689453,220.11199951171875 C-125.79199981689453,220.11199951171875 -138.42100524902344,174.05299377441406 -138.42100524902344,174.05299377441406 C-140.9810028076172,164.72000122070312 -148.6719970703125,157.6840057373047 -158.19700622558594,155.96200561523438 C-158.19700622558594,155.96200561523438 -205.1929931640625,147.468994140625 -205.1929931640625,147.468994140625 C-220.07899475097656,144.77999877929688 -229.23599243164062,129.64700317382812 -224.71400451660156,115.21299743652344 C-224.71400451660156,115.21299743652344 -210.43800354003906,69.63899993896484 -210.43800354003906,69.63899993896484 C-207.5449981689453,60.40299987792969 -210.21099853515625,50.32600021362305 -217.29299926757812,43.72700119018555 C-217.29299926757812,43.72700119018555 -252.23699951171875,11.173999786376953 -252.23699951171875,11.173999786376953 C-263.3059997558594,0.8640000224113464 -262.8290100097656,-16.815000534057617 -251.2209930419922,-26.514999389648438 C-251.2209930419922,-26.514999389648438 -214.57200622558594,-57.1349983215332 -214.57200622558594,-57.1349983215332 C-207.1439971923828,-63.34199905395508 -203.93899536132812,-73.26100158691406 -206.3300018310547,-82.63999938964844 C-206.3300018310547,-82.63999938964844 -218.1280059814453,-128.91700744628906 -218.1280059814453,-128.91700744628906 C-221.86399841308594,-143.5749969482422 -211.90499877929688,-158.1909942626953 -196.89500427246094,-160.07400512695312 C-196.89500427246094,-160.07400512695312 -149.50999450683594,-166.02000427246094 -149.50999450683594,-166.02000427246094 C-139.906005859375,-167.22500610351562 -131.8470001220703,-173.83700561523438 -128.78700256347656,-183.02000427246094 C-128.78700256347656,-183.02000427246094 -113.69300079345703,-228.32899475097656 -113.69300079345703,-228.32899475097656z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,184.31399536132812,188.8489990234375)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,37.96200180053711,37.96200180053711)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M37.71200180053711,0 C37.71200180053711,20.827999114990234 20.827999114990234,37.71200180053711 0,37.71200180053711 C-20.82900047302246,37.71200180053711 -37.71200180053711,20.827999114990234 -37.71200180053711,0 C-37.71200180053711,-20.827999114990234 -20.82900047302246,-37.71200180053711 0,-37.71200180053711 C20.827999114990234,-37.71200180053711 37.71200180053711,-20.827999114990234 37.71200180053711,0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,309.3009948730469,311.593994140625)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,37.96200180053711,37.9630012512207)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M37.7130012512207,0.0010000000474974513 C37.7130012512207,20.82900047302246 20.825000762939453,37.7130012512207 -0.0010000000474974513,37.7130012512207 C-20.82900047302246,37.7130012512207 -37.7130012512207,20.82900047302246 -37.7130012512207,0.0010000000474974513 C-37.7130012512207,-20.82699966430664 -20.82900047302246,-37.7130012512207 -0.0010000000474974513,-37.7130012512207 C20.825000762939453,-37.7130012512207 37.7130012512207,-20.82699966430664 37.7130012512207,0.0010000000474974513z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,44.170013427734375,49.05499267578125)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,241.86099243164062,241.86099243164062)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="10"
                        stroke="rgb(255,255,255)"
                        stroke-opacity="1"
                        stroke-width="38"
                        d="M0 0"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,255,255)"
                        stroke-opacity="1"
                        stroke-width="38"
                        d=" M-89,90 C-89,90 84,-83 84,-83"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  ></g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  ></g>
                </g>
              </svg>
            </div>
          </div>
          <div class="h-0 w-0 border-b-[16px] border-r-[16px] border-t-[16px] border-b-[#E7E0FC] border-r-[#F7F5FD] border-t-[#E7E0FC] md:border-b-[16px] md:border-r-[16px] md:border-t-[16px] 3xl:border-b-[18px] 3xl:border-r-[18px] 3xl:border-t-[18px] 4xl:border-b-[20px] 4xl:border-r-[20px] 4xl:border-t-[20px]"></div>
          <div class="flex h-full items-center gap-2 bg-[#F7F5FD] pl-2 pr-2 text-xs md:rounded-r-[6px] md:pr-9 md:text-xs 3xl:text-sm">
            <p class="font-bold text-[#5A31DD] my-0" id="sale_coupon">
              HAPPY2025 SALE
            </p>
            <p class="font-normal my-0 text-[#5A31DD]">ENDS IN</p>
          </div>
          <div class="hidden h-1 w-auto bg-[#F4F4F4] md:block"></div>
        </div>
        <div className="product-pricing">
          <span className="price">₹{product.sellingPrice}</span>
          <span className="mrp">₹{product.mrp}</span>
          <span className="discount text-nowrap">
            Save ₹{(product.mrp - product.sellingPrice).toFixed(2)}
          </span>
          <span className="mx-3 text-gray-400">(Incl of all taxes)</span>
        </div>




        <div className="flex  gap-5">
          <div className="hidden sm:block sm:basis-1/2 sm:mt-4 ">
          <div className="font-bold">Get it by : <span className="text-green-800">{devdate}</span></div>
          <div className="flex  border-4 border-violet-800  h-12 ps-3 rounded-lg">
          <input className="focus:outline-none " type="text" ref={pincodeInput} placeholder="Pincode"/>
          <button className="px-2 text-violet-800" onClick={checkPincode}>CHECK</button>
          </div>
          </div>
          <div className="basis-8/12 sm:basis-1/2 sm:mt-4">
          <div className="font-bold">Choose Size</div>
          <MattressSizeModal product={product} setproduct={setproduct}/>

          <button id="SizeModal" data-bs-toggle="modal" data-bs-target="#SizeModal" className="flex justify-between border-4 w-full h-12 rounded-lg text-violet-800 px-3 border-violet-800">
          <p className="my-auto">{product.OrderSize}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 320 512" className=" my-auto  rotate-90 rounded-xl bg-black fill-white py-1 pr-[2px] text-white md:px-0.5"><path stroke="none" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
          </button>


          </div>

        </div>

        <div className="w-full">
        <button onClick={addcart} className=" w-full rounded-lg mt-3 bg-violet-700 text-white text-2xl py-2 px-4 rounded-lg hover:bg-violet-700 focus:bg-violet-900 focus:outline-none transition-all duration-200">
            Add To Cart
          </button>
        </div>

        <div>
          <p className="mt-4 text-gray-700 font-serif text-lg">Ideal for</p>

          <div className="border border-solid py-3 text-gray-700 shadow-md text-xl px-3 font-mono rounded-lg">{product.idealFor}</div>
        </div>        
      </div>
    </>
  );
};

export const ProductDescription = ({product}) =>{

  return(
  <>
  <div className="container-1g w-full  md:flex md:flex-row-reverse">
  <div className="md:w-1/2 m-4 flex items-center justify-center">
    <img src={product.image} className="object-contain h-full rounded-3xl" alt={"Slide"} />
  </div>
  <div className="md:w-1/2 m-5">
    <p className="font-sans text-gray-700">{product.detailDesc}</p>
    <div className="">
      <div className="border-b-4 w-full flex ">
        <div className="basis-1/2 p-4 text-xl text-gray-600 font-semibold">Mattress Feel</div>
        <div className="basis-1/2 p-4 text-xl text-gray-700 font-semibold">{product.mattressFeel}</div>
      </div>
    </div>
    <div className="">
      <div className="border-b-4 w-full flex ">
        <div className="basis-1/2 p-4 text-xl text-gray-600 font-semibold">Cloth Material</div>
        <div className="basis-1/2 p-4 text-xl text-gray-700 font-semibold">{product.clothType}</div>
      </div>
    </div>
    <div className="">
      <div className="border-b-4 w-full flex ">
        <div className="basis-1/2 p-4 text-xl text-gray-600 font-semibold">Thickness</div>
        <div className="basis-1/2 p-4 text-xl text-gray-700 font-semibold">5", 6", 7" & 8"</div>
      </div>
    </div>
    <div className="">
      <div className="border-b-4 w-full flex ">
        <div className="basis-1/2 p-4 text-xl text-gray-600 font-semibold">Mattress Warranty</div>
        <div className="basis-1/2 p-4 text-xl text-gray-700 font-semibold">{product.warranty} Years</div>
      </div>
    </div>
    <div className="">
      <div className="border-b-4 w-full flex ">
        <div className="basis-1/2 p-4 text-xl text-gray-600 font-semibold">Shipping & Return Policy</div>
        <div className="basis-1/2 p-4 text-xl text-gray-700 font-semibold">Free Shipping And Free Returns</div>
      </div>
    </div>


  </div>
</div>
  </>)}

export const BedCompatible = () =>{

  return(
  <>
  <div className="bg-gray-100 my-5 py-4">
  <div className="text-center text-xl   font-semibold">Compatible Beds Frame</div>
  <div className="grid grid-cols-2 m-3 md:grid-cols-4 items-center">
      <img src="../../asset/Flat-Platform.avif" alt="" />
      <img src="../../asset/Slatted-Bed.png" alt="" />
      <img src="../../asset/Boxspring.avif" alt="" />
      <img src="../../asset/Adjustable-Bed.avif" alt="" />
  </div>
  </div>
  
  
  
  </>
  )

}

export const LayerInfo = ({product}) =>{

  const layerDetail = {"Pu Foam":"Cryptosleep P.U. foam resilience lends itself to better flexibility, thus offering pressure point comfort. It has a medium-firm feel and gives optimal body support and a comfortable bounce.","Hr Foam":"HR foam is renowned for its superior bounce and elasticity. It adapts quickly to body movements, providing optimal support and comfort. This type of foam is highly durable, making it a preferred choice for premium mattresses and seating.","Comfort Soft Foam":"A softer, snug, superior PU foam that has undergone rigorous testing. Resilience and softness blended together for the right feel.","Memory Foam":"Cryptosleep Memory foam is celebrated for its unique ability to contour to the body, relieving pressure points and enhancing comfort. It retains shape after use, ensuring consistent support. Ideal for those seeking a customized sleep experience, memory foam is a hallmark of luxurious mattresses.","Bonded Foam":"Rebonded foam is made by compressing and bonding shredded pieces of foam under high pressure. It is known for its exceptional density and firmness, offering robust support and durability. Commonly used in orthopedic mattresses and seating solutions, rebonded foam provides excellent support for the back and body."}

  return(
    <>
    <div className="md:grid md:grid-cols-2 gap-4 m-3">

      <div className="">
      <img src={product.layerImage} className="rounded-2xl"/>
      </div>
      <div className="flex flex-col  justify-center">
      <div className="">
      <div className="border-b-4 ">
        <div className=" px-4 pt-4 text-xl text-gray-700 font-semibold">Top Layer : {product.topLayer}</div>
        <p className="px-4 pt-2 pb-4 text-lg text-gray-500 font-semibold">{layerDetail[product.topLayer]}</p>
        </div>
      </div>

    {product.middleLayer !== "NO" &&
        <div className="">
        <div className="border-b-4   ">
          <div className=" px-4 pt-4 text-xl text-gray-600 font-semibold">Middle Layer : {product.middleLayer}</div>
          <div className=" px-4 pt-2 pb-4 text-lg text-gray-500 font-semibold">{layerDetail[product.middleLayer]}</div>
        </div>
      </div>
    }
  
    <div className="">
      <div className="border-b-4  ">
        <div className="px-4 pt-4 text-xl text-gray-600 font-semibold">Base Layer : {product.baseLayer}</div>
        <div className="px-4 pt-2 pb-4 text-lg text-gray-500 font-semibold">{layerDetail[product.baseLayer]}</div>
      </div>
    </div>

      </div>
    </div>
    
    
    </>
  )
}

export const CurtainDetail = (props) => {
  const product1 = props.product;
  const [pincode, setpincode] = useState("");
  const [product,setproduct] = useState({...product1,"OrderSize":"Choose Size"});
  const [devdate,setdevdate] = useState("");
  const [selectedType,setselectedType] = useState("Eyelet (Rod)");
  // var [choosenSize,setchoosenSize] = useState("Choose Size");
  const dispatch = useDispatch();

  const pincodeInput = useRef(null);
  const navigate = useNavigate();
  function checkPincode(){
    const v = pincodeInput.current.value;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();
    setdevdate(`${day}-${month}-${year}`);
  }
  function addcart(){
    if (product.OrderSize === "Choose Size"){
      alert("Size Not Selected Properly");
    }
    else{
      dispatch(addCurtaintoCart({...product,"stichingType":selectedType}));
      navigate("/cart");
    }
  }


  return (
    <>
      <div className="m-4 sm:w-1/2">
        <p className="text-3xl mb-2">{product.name}</p>
        <p className="text-xl text-gray-600 font-serif">{product.about}</p>
        <div className="flex flex-col sm:flex-row  gap-4">
          <div
            class="  flex w-max items-center gap-1 rounded-[8px] mb-0 border border-[#E6E7E8] p-2 text-base shadow-sm md:text-xs"
            id="product_rating"
          >
            <p class="font-extrabold m-0">4.4</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              className=" text-[#05A585]"
            >
              <path
                stroke="none"
                d="m234.5 114.38-45.1 39.36 13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15 23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
              ></path>
            </svg>
            <p class="text-[#909090] m-0">| {product.review} </p>
          </div>
          <div
            id="social_proofing"
            class="flex  items-center gap-2 bg-[#EAF4F2] px-4 py-1.5 text-base md:w-max md:rounded-[8px] md:border md:border-[#E6E7E8] md:bg-white md:shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 20 21"
              class="h-[14px] w-[14px] text-[#575757] md:h-[18px] md:w-[18px] md:text-black"
            >
              <mask
                id="a"
                width="21"
                height="21"
                x="-1"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#D9D9D9" d="M-.004.406h20v20h-20z"></path>
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#1C1B1F"
                  d="M5.958 18.367q-.608 0-1.033-.425a1.4 1.4 0 0 1-.426-1.033q0-.608.426-1.033a1.4 1.4 0 0 1 1.033-.426q.608 0 1.032.426.426.426.426 1.033t-.426 1.033a1.4 1.4 0 0 1-1.032.425m8.076 0q-.607 0-1.032-.425a1.4 1.4 0 0 1-.426-1.033q0-.608.426-1.033a1.4 1.4 0 0 1 1.032-.426q.608 0 1.033.426.426.426.426 1.033t-.426 1.033a1.4 1.4 0 0 1-1.033.425M5.01 5.194 7.12 9.617h5.681q.072 0 .128-.036a.3.3 0 0 0 .097-.1l2.235-4.063q.048-.087.008-.156-.04-.068-.136-.068zm-.6-1.25H15.98q.511 0 .773.435t.025.889l-2.67 4.836q-.204.36-.542.562a1.4 1.4 0 0 1-.74.201h-6.08l-.965 1.763q-.063.096-.004.208.06.112.18.112h9.536v1.25H5.958q-.833 0-1.253-.718-.42-.72-.03-1.435l1.19-2.138-3.032-6.382H1.246v-1.25h2.372z"
                ></path>
              </g>
            </svg>
            <p class="text-[11px] font-normal text-[#575757] m-0 md:text-xs md:text-black">
              <span class="font-semibold">70+</span> added to the cart past week
            </p>
          </div>
        </div>
        ̉
        <div class="grid auto-cols-max grid-flow-col grid-cols-[auto_auto_1fr] items-center md:mt-5 md:grid-cols-[auto_auto_auto_1fr] 3xl:mt-5 4xl:mt-10">
          <div class="flex h-full items-center bg-[#E7E0FC] py-1 pl-4 pr-4 md:rounded-l-[6px] 3xl:pr-3 4xl:pr-4">
            <div class="h-6 w-6 3xl:h-7 3xl:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 573 573"
                width="573"
                height="573"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                  contentVisibility: "visible",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_445">
                    <rect width="573" height="573" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_445)">
                  <g
                    style={{ display: "block" }}
                    transform="matrix(0.4146932363510132,0.9099612832069397,-0.9099612832069397,0.4146932363510132,414.1416015625,-62.029327392578125)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,263.5559997558594,265.2359924316406)"
                    >
                      <path
                        fill="rgb(227,129,128)"
                        fill-opacity="1"
                        d=" M-113.69300079345703,-228.32899475097656 C-108.91200256347656,-242.67999267578125 -92.63200378417969,-249.59100341796875 -78.98799896240234,-243.06100463867188 C-78.98799896240234,-243.06100463867188 -35.909000396728516,-222.44500732421875 -35.909000396728516,-222.44500732421875 C-27.177000045776367,-218.26600646972656 -16.822999954223633,-219.4709930419922 -9.284000396728516,-225.54200744628906 C-9.284000396728516,-225.54200744628906 27.909000396728516,-255.4980010986328 27.909000396728516,-255.4980010986328 C39.689998626708984,-264.9859924316406 57.12200164794922,-261.99798583984375 65.06999969482422,-249.1280059814453 C65.06999969482422,-249.1280059814453 90.16500091552734,-208.49400329589844 90.16500091552734,-208.49400329589844 C95.25,-200.25900268554688 104.61199951171875,-195.6739959716797 114.23600006103516,-196.70700073242188 C114.23600006103516,-196.70700073242188 161.7209930419922,-201.79800415039062 161.7209930419922,-201.79800415039062 C176.76100158691406,-203.41099548339844 189.80999755859375,-191.47300720214844 189.53799438476562,-176.34800720214844 C189.53799438476562,-176.34800720214844 188.68099975585938,-128.5989990234375 188.68099975585938,-128.5989990234375 C188.50799560546875,-118.9209976196289 193.9040069580078,-110.00299835205078 202.5590057373047,-105.66799926757812 C202.5590057373047,-105.66799926757812 245.25799560546875,-84.27999877929688 245.25799560546875,-84.27999877929688 C258.7829895019531,-77.50399780273438 263.3059997558594,-60.40700149536133 254.9010009765625,-47.83000183105469 C254.9010009765625,-47.83000183105469 228.36500549316406,-8.12399959564209 228.36500549316406,-8.12399959564209 C222.98599243164062,-0.07500000298023224 222.70399475097656,10.343999862670898 227.64100646972656,18.66900062561035 C227.64100646972656,18.66900062561035 251.99899291992188,59.74800109863281 251.99899291992188,59.74800109863281 C259.7139892578125,72.76000213623047 254.2740020751953,89.58999633789062 240.40499877929688,95.6240005493164 C240.40499877929688,95.6240005493164 196.61300659179688,114.68099975585938 196.61300659179688,114.68099975585938 C187.73899841308594,118.54199981689453 181.86900329589844,127.15599822998047 181.5189971923828,136.8300018310547 C181.5189971923828,136.8300018310547 179.802001953125,184.5570068359375 179.802001953125,184.5570068359375 C179.2570037841797,199.6739959716797 165.58299255371094,210.89100646972656 150.6510009765625,208.46800231933594 C150.6510009765625,208.46800231933594 103.51100158691406,200.8249969482422 103.51100158691406,200.8249969482422 C93.95500183105469,199.27499389648438 84.36100006103516,203.34800720214844 78.83799743652344,211.29800415039062 C78.83799743652344,211.29800415039062 51.59000015258789,250.5189971923828 51.59000015258789,250.5189971923828 C42.95899963378906,262.9429931640625 25.392000198364258,264.9859924316406 14.137999534606934,254.87600708007812 C14.137999534606934,254.87600708007812 -21.385000228881836,222.95899963378906 -21.385000228881836,222.95899963378906 C-28.586999893188477,216.48899841308594 -38.86000061035156,214.72900390625 -47.803001403808594,218.4290008544922 C-47.803001403808594,218.4290008544922 -91.93099975585938,236.6929931640625 -91.93099975585938,236.6929931640625 C-105.90799713134766,242.47900390625 -121.79100036621094,234.69900512695312 -125.79199981689453,220.11199951171875 C-125.79199981689453,220.11199951171875 -138.42100524902344,174.05299377441406 -138.42100524902344,174.05299377441406 C-140.9810028076172,164.72000122070312 -148.6719970703125,157.6840057373047 -158.19700622558594,155.96200561523438 C-158.19700622558594,155.96200561523438 -205.1929931640625,147.468994140625 -205.1929931640625,147.468994140625 C-220.07899475097656,144.77999877929688 -229.23599243164062,129.64700317382812 -224.71400451660156,115.21299743652344 C-224.71400451660156,115.21299743652344 -210.43800354003906,69.63899993896484 -210.43800354003906,69.63899993896484 C-207.5449981689453,60.40299987792969 -210.21099853515625,50.32600021362305 -217.29299926757812,43.72700119018555 C-217.29299926757812,43.72700119018555 -252.23699951171875,11.173999786376953 -252.23699951171875,11.173999786376953 C-263.3059997558594,0.8640000224113464 -262.8290100097656,-16.815000534057617 -251.2209930419922,-26.514999389648438 C-251.2209930419922,-26.514999389648438 -214.57200622558594,-57.1349983215332 -214.57200622558594,-57.1349983215332 C-207.1439971923828,-63.34199905395508 -203.93899536132812,-73.26100158691406 -206.3300018310547,-82.63999938964844 C-206.3300018310547,-82.63999938964844 -218.1280059814453,-128.91700744628906 -218.1280059814453,-128.91700744628906 C-221.86399841308594,-143.5749969482422 -211.90499877929688,-158.1909942626953 -196.89500427246094,-160.07400512695312 C-196.89500427246094,-160.07400512695312 -149.50999450683594,-166.02000427246094 -149.50999450683594,-166.02000427246094 C-139.906005859375,-167.22500610351562 -131.8470001220703,-173.83700561523438 -128.78700256347656,-183.02000427246094 C-128.78700256347656,-183.02000427246094 -113.69300079345703,-228.32899475097656 -113.69300079345703,-228.32899475097656z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,184.31399536132812,188.8489990234375)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,37.96200180053711,37.96200180053711)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M37.71200180053711,0 C37.71200180053711,20.827999114990234 20.827999114990234,37.71200180053711 0,37.71200180053711 C-20.82900047302246,37.71200180053711 -37.71200180053711,20.827999114990234 -37.71200180053711,0 C-37.71200180053711,-20.827999114990234 -20.82900047302246,-37.71200180053711 0,-37.71200180053711 C20.827999114990234,-37.71200180053711 37.71200180053711,-20.827999114990234 37.71200180053711,0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,309.3009948730469,311.593994140625)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,37.96200180053711,37.9630012512207)"
                    >
                      <path
                        fill="rgb(255,255,255)"
                        fill-opacity="1"
                        d=" M37.7130012512207,0.0010000000474974513 C37.7130012512207,20.82900047302246 20.825000762939453,37.7130012512207 -0.0010000000474974513,37.7130012512207 C-20.82900047302246,37.7130012512207 -37.7130012512207,20.82900047302246 -37.7130012512207,0.0010000000474974513 C-37.7130012512207,-20.82699966430664 -20.82900047302246,-37.7130012512207 -0.0010000000474974513,-37.7130012512207 C20.825000762939453,-37.7130012512207 37.7130012512207,-20.82699966430664 37.7130012512207,0.0010000000474974513z"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,44.170013427734375,49.05499267578125)"
                    opacity="1"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,241.86099243164062,241.86099243164062)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="10"
                        stroke="rgb(255,255,255)"
                        stroke-opacity="1"
                        stroke-width="38"
                        d="M0 0"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(255,255,255)"
                        stroke-opacity="1"
                        stroke-width="38"
                        d=" M-89,90 C-89,90 84,-83 84,-83"
                      ></path>
                    </g>
                  </g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  ></g>
                  <g
                    style={{ display: "block" }}
                    transform="matrix(1,0,0,1,286.5,286.5)"
                    opacity="1"
                  ></g>
                </g>
              </svg>
            </div>
          </div>
          <div class="h-0 w-0 border-b-[16px] border-r-[16px] border-t-[16px] border-b-[#E7E0FC] border-r-[#F7F5FD] border-t-[#E7E0FC] md:border-b-[16px] md:border-r-[16px] md:border-t-[16px] 3xl:border-b-[18px] 3xl:border-r-[18px] 3xl:border-t-[18px] 4xl:border-b-[20px] 4xl:border-r-[20px] 4xl:border-t-[20px]"></div>
          <div class="flex h-full items-center gap-2 bg-[#F7F5FD] pl-2 pr-2 text-xs md:rounded-r-[6px] md:pr-9 md:text-xs 3xl:text-sm">
            <p class="font-bold text-[#5A31DD] my-0" id="sale_coupon">
              HAPPY2025 SALE
            </p>
            <p class="font-normal my-0 text-[#5A31DD]">ENDS IN</p>
          </div>
          <div class="hidden h-1 w-auto bg-[#F4F4F4] md:block"></div>
        </div>
        <div className="product-pricing">
          <span className="price">₹{product.sellingPrice}</span>
          <span className="mrp">₹{product.mrp}</span>
          <span className="discount text-nowrap">
            Save ₹{(product.mrp - product.sellingPrice).toFixed(2)}
          </span>
          <span className="mx-3 text-gray-400">(Incl of all taxes)</span>
        </div>




        <div className="flex  gap-5">
          <div className="hidden sm:block sm:basis-1/2 sm:mt-4 ">
          <div className="font-bold">Get it by : <span className="text-green-800">{devdate}</span></div>
          <div className="flex  border-4 border-violet-800  h-12 ps-3 rounded-lg">
          <input className="focus:outline-none " type="text" ref={pincodeInput} placeholder="Pincode"/>
          <button className="px-2 text-violet-800" onClick={checkPincode}>CHECK</button>
          </div>
          </div>
          <div className="basis-8/12 sm:basis-1/2 sm:mt-4">
          <div className="font-bold">Choose Size</div>
          <CurtainSizeModal product={product} setproduct={setproduct}/>

          <button id="SizeModal" data-bs-toggle="modal" data-bs-target="#SizeModal" className="flex justify-between border-4 w-full h-12 rounded-lg text-violet-800 px-3 border-violet-800">
          <p className="my-auto">{product.OrderSize}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 320 512" className=" my-auto  rotate-90 rounded-xl bg-black fill-white py-1 pr-[2px] text-white md:px-0.5"><path stroke="none" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
          </button>


          </div>

        </div>
        <div className="font-bold my-4">
          Header Style
        </div>
          <div className="flex justify-evenly gap-5">
          <div onClick={()=>(setselectedType('Eyelet (Rod)'))}>
                
                <img 
                  src="../../asset/Header_styles_eyelet-aco-upload.webp" 
                  alt="Image of curtain rod"
                  className={`w-36 h-36 ${selectedType === 'Eyelet (Rod)' ? 'border-4 border-violet-800':'c'}`}  // or set specific width and height if you prefer
                />
                <p className="text-center my-2">Eyelet (Rod)</p>

              </div>

              <div onClick={()=>(setselectedType('Pleated (Track)'))}>
                <img src="../../asset/Pleated-aco-upload.webp" 
                  alt="Image of curtain Channel"
                  className={`w-36 h-36 ${selectedType === 'Pleated (Track)' ? 'border-4 border-violet-800':'c'}`}  // or set specific width and height if you prefer
                />
                 <p className="text-center my-2">Pleated (Track)</p>

              </div>
          </div>

        <div className="w-full">
        <button onClick={addcart} className=" w-full rounded-lg mt-3 bg-violet-700 text-white text-2xl py-2 px-4 rounded-lg hover:bg-violet-700 focus:bg-violet-900 focus:outline-none transition-all duration-200">
            Add To Cart
          </button>
        </div>

        <div>
          <p className="mt-4 text-gray-700 font-serif text-lg">Ideal for</p>

          <div className="border border-solid py-3 text-gray-700 shadow-md text-xl px-3 font-mono rounded-lg">{product.idealFor}</div>
        </div>        
      </div>
      
    </>
  );
};

