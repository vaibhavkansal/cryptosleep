import React, { useEffect, useState } from 'react'
import { Blankspace } from './subcomponents/OtherComponent'
import { useSelector } from 'react-redux';

const CartSection = () => {

  const cart = useSelector((state) => state.cart);
  const [items,setitems] = useState([]);
  const [carttoal,setcarttotal] = useState(0);

  useEffect(()=>{
    setitems(cart['items']);
    var t = 0;
    cart['items'].map((it)=>(
      t =t + it.ssellingPrice * it.cartQuantity
    ))
    setcarttotal(t);

  },[cart])


  return (
    <div>
          <Blankspace/>
          <div className='bg-gray-50'>
            <div className="container-lg p-5" style={{"min-height":"70vh"}}>
              <div className="grid grid-cols-3 gap-4">

                <div className="col-span-2"> 
                  {/* item list */}
                  {console.log(items)}
                  {console.log('Type of items:', typeof items)}
                  {console.log('Is items an array?', Array.isArray(items))}

                  {items && items.map((cartitem, index) => (
                    <div className="card" key={index}>
                      <div className="card-body">

                        <div className="grid grid-cols-3">

                          <div className="">
                          <img src={cartitem.image} alt={cartitem.name} className="card-img-top p-3" />
                          </div>
                          <div className="col-span-2">
                          <h5 className="card-title">{cartitem.name}</h5>
                          <div className="product-pricing">
                              <span className="price">₹{cartitem.sellingPrice}</span>
                              <span className="mrp">₹{cartitem.mrp}</span>
                              <span className="discount text-nowrap">
                                Save ₹{(cartitem.mrp - cartitem.sellingPrice).toFixed(2)}
                              </span>
                              <span className="mx-3 text-gray-400">(Incl of all taxes)</span>
                            </div>    

                          <p className="card-text text-xl"><strong>Size:</strong> {cartitem.OrderSize}</p>
                          <p className="card-text text-xl"><strong>Quatity:</strong> {cartitem.cartQuantity} Pcs</p>
                          <p className="card-text text-xl"><strong>Warranty:</strong> {cartitem.warranty} years</p>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  

                </div>
                <div className="col-span-1">
                  {/* total List */}
                  
                  <div className="card">
                    <div className="card-body">
                    {items && items.map((cartitem, index) => (
                    <>
                    <div>
                      <p className='text-xl text-gray-500 font-semibold'>Order Summary</p>
                      <div className="grid grid-cols-2">
                        <p className='text-xl text-gray-500 font-semibold'>Total</p>
                        <p className='text-xl font-semibold'>{carttoal}</p>
                      </div>
                      <button className='btn btn-primary w-full'> Proceed To Checkout</button>

                    </div>
                    
                    
                    </>
                  ))}
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