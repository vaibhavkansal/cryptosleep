import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cards from './Cards';


export const MattressFilterCards = (props) => {
    const subcategory = props.category;
    const products = useSelector((state) => state.products);
      const [list, setList] = useState([]);
    
    function getProductsByMainCategory(categoryName) {
        if (products.length > 0) {return products.filter(product => product.maincategory === categoryName);}
        else {return [];}
      }
      function getProductsByCategory(categoryName,subcategory) {
        if (products.length > 0) {return products.filter(product => product.maincategory === categoryName && product.category.includes(subcategory));}
        else {return [];}
      }
    useEffect(()=>{
      if(subcategory==="All")
        {
        setList(getProductsByMainCategory("mattress"));  
      }
      else{
        setList(getProductsByCategory("mattress",subcategory));  

      }
      },[products,subcategory])
    

      
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {list.map((info)=>(
            <Cards  info={info} className="shadow-md"/> 
        ))}
        </div>
    </div>


  )
}

export const CurtainFilterCards = (props) => {
  const subcategory = props.category;
  const products = useSelector((state) => state.products);
    const [list, setList] = useState([]);
  
  function getProductsByMainCategory(categoryName) {
      if (products.length > 0) {return products.filter(product => product.maincategory === categoryName);}
      else {return [];}
    }
    function getProductsByCategory(categoryName,subcategory) {
      if (products.length > 0) {return products.filter(product => product.maincategory === categoryName && product.category.includes(subcategory));}
      else {return [];}
    }
  useEffect(()=>{
    if(subcategory==="All")
      {
      setList(getProductsByMainCategory("curtain"));  
    }
    else{
      setList(getProductsByCategory("curtain",subcategory));  

    }
    },[products,subcategory])
  

    
return (
  <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {list.map((info)=>(
          <Cards  info={info} className="shadow-md"/> 
      ))}
      </div>
  </div>


)
}


