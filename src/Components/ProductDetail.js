import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  const { product } = props; 

  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.quantity}</p>
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