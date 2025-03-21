import React, { useEffect, useState } from 'react'
import { AddressModal, Blankspace, CurtainSizeModal, MattressSizeModal } from './subcomponents/OtherComponent'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removeItem } from '../utils/cartSlice';

const CartSection = () => {

  const cart = useSelector((state) => state.cart);
  const [items,setitems] = useState([]);
  const [mrptoal,setmrptoal] = useState(0);
  const [savetotal,setsavetotal] = useState(0);
  const [carttotal,setcarttotal] = useState(0);
  const dispatch = useDispatch();


  useEffect(()=>{
    setitems(cart['items']);
    var t = 0;
    var m =0;
    var save =0;
    cart['items'].map((it)=>{
      
        m= m + (it.mrp * it.cartQuantity);
        t= t + (it.sellingPrice * it.cartQuantity);
  
    })
    setmrptoal(m);
    setsavetotal(m-t);
    setcarttotal(t);

  },[cart])



  useEffect(() => { 
        // Dynamically load Razorpay script

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      console.log("Razorpay script loaded successfully!");
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
    };
    document.body.appendChild(script);
  }, []);


  return (
    <div>
          <Blankspace/>
          <div className='bg-gray-50'>
            
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
    <h3 className="text-center py-4 font-bold">
        CART SECTION
    </h3>
</div>            <div className="container- p-1 p-md-5" style={{"min-height":"70vh"}}>
              <div className="grid grid-cols-3 gap-4">

                <div className="col-span-3 md:col-span-2"> 
                  
                  {items && items.map((cartitem, index) => (
                    <div className="card my-3 shadow-2xl" key={index}>
                      <div className="card-body">

                        <div className="grid grid-cols-3">

                          <div className="col-span-3 md:col-span-1">
                          <img src={cartitem.image} alt={cartitem.name} className=" card-img-top p-3" />
                          </div>
                          <div className="col-span-3 md:col-span-2">
                          <h5 className="card-title">{cartitem.name}</h5>
                          <h5 className="text-base text-gray-600">{cartitem.about}</h5>
                          <div className="product-pricing">
                              <span className="price">₹{cartitem.sellingPrice * cartitem.cartQuantity}</span>
                              <span className="mrp">₹{cartitem.mrp * cartitem.cartQuantity}</span>
                              <span className="discount text-nowrap">
                                Save ₹{(cartitem.mrp * cartitem.cartQuantity - cartitem.sellingPrice * cartitem.cartQuantity)}
                              </span>
                              <span className="mx-3 text-gray-400">(Incl of all taxes)</span>
                            </div>    

                          <p className="card-text text-xl"><strong>Size:</strong> {cartitem.OrderSize}</p>

                          {cartitem.stichingType && (<p className="card-text text-xl"><strong>Stiching Type :</strong> {cartitem.stichingType}</p>)}


                          <div className=''>

                          <div className="card-text flex  text-xl"><strong className='py-1'>Quatity:</strong>  
                              <div className=" flex mx-2 max-w-[8rem]">
                                  <button type="button" onClick={()=>(dispatch(removeItem(cartitem)))} className="bg-gray-100  hover:bg-gray-200 border border-gray-300  rounded-s-lg p-1 md:p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none">
                                      <svg className="w-4 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                      </svg>
                                  </button>
                                  <p className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5  px-3">{cartitem.cartQuantity}</p>
                                  <button type="button" onClick={()=>(dispatch(addtoCart(cartitem)))} className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 md:p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                      <svg className="w-5 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                      </svg>
                                  </button>
                              </div>
                              <strong className='py-1'>PCS</strong>  
                              </div>
                          </div>
                          
                          <p className="card-text text-xl"><strong>Warranty:</strong> {cartitem.warranty} years</p>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  

                </div>
                <div className="col-span-3 md:col-span-1">
                  {/* total List */}
                  
                  <div className="card mx-auto my-3">
                    <div className="card-body">
                
                    <div>
                      <p className='text-xl text-gray-500 font-semibold'>Order Summary</p>
                      <div className="grid grid-cols-2">
                        <p className='text-xl text-gray-500 font-semibold'>Total Mrp</p>
                        <p className='text-xl font-semibold text-green-400 text-end'>{mrptoal}</p>
                      </div>
                      <div className="grid grid-cols-2">
                        <p className='text-xl text-gray-500 font-semibold'>Total Save</p>
                        <p className='text-xl font-semibold text-red-500 text-end' >- {savetotal}</p>
                      </div>
                      <hr></hr>
                      <div className="grid grid-cols-2">
                        <p className='text-xl text-gray-500 font-semibold'>Total</p>
                        <p className='text-xl font-semibold text-green-700 text-end'>{carttotal}</p>
                      </div>

                        <AddressModal cartimtems={items} total={carttotal}/>
                      
                      <button id="SizeModal" data-bs-toggle="modal" data-bs-target="#SizeModal" className=" text-center justify-between border-4 w-full h-12 rounded-lg bg-violet-800 text-white">PROCEED TO CHECKOUT</button>

                    </div>
                    
                    
                 
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      
    </div>
  )
}

export default CartSection