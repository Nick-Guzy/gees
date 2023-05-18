import {React, useState } from "react";
import { GetDetails } from "./../Products"
import { useParams } from "react-router-dom";



function ProductDetail(){
  let {id, type} = useParams()
 const  [ product, setProduct ] = useState(GetDetails(id, type));
console.log(product)
 

  return (
    <>
      <h1>Product Detail</h1>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.size}</p>
      <hr/>
      <button type="submit">Home</button>
    </>
  );
}

export default ProductDetail;