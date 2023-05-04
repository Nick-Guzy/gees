import React from "react";
import PropTypes from "prop-types";

function Product(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
      <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <p>{props.quantity}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,  
  price: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
}

export default Product;