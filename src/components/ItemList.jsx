import React, { useEffect, useState } from 'react'
import { Blankspace } from './subcomponents/OtherComponent'
import { useSelector } from 'react-redux';
import ProductImage from './subcomponents/ProductImage';

const ItemList = () => {

    const oldpro = useSelector((state) => state.products);
    const [products,setproducts] = useState([]);

    useEffect(()=>{
        setproducts(oldpro);
    },[oldpro])



    

  return (

    <>

    
    <Blankspace/>
    <div>ItemList</div>
    {console.log("product",products)}
    {products.length > 0 ? (
                <ProductImage product={products[0]} />
            ) : (
                <p>No products available</p>
            )}
    </>

  )
}

export default ItemList