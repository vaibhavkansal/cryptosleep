import React from 'react'
import { useParams } from 'react-router-dom'
import { Blankspace } from './subcomponents/OtherComponent';
import MattressPage from './subcomponents/MattressPage';
import CurtainPage from './subcomponents/CurtainPage';

const Product = () => {
    const param = useParams();
    const id = param["pid"];
    const maincategory = param["maincategory"];


    function categoryPage(maincategory){
      if (maincategory === 'mattress'){
        return(<MattressPage/>)
      }
      else if (maincategory === 'curtain'){
        return(<CurtainPage/>)

      }
    }
  return (
    <>
      <Blankspace/>
      {categoryPage(maincategory)}

    </>
  )
}

export default Product