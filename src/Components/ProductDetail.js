import {React, useState } from "react";
import PropTypes from "prop-types";
import { GetDetails } from "./../Products"
import { useParams } from "react-router-dom";



function ProductDetail(){
  let {id, type} = useParams()
 const  [ product, setProduct ] = useState(GetDetails(id, type));

 

  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.size}</p>
      <hr/>
      <button type="submit">Home</button>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ProductDetail;