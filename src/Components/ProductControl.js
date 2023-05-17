import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { db } from './../firebase.js';
import { collection, onSnapshot } from "firebase/firestore";

function ProductControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainProductList, setMainProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
//   // const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const unSubscribe = onSnapshot(
      collection(db, "products"), 
      (collectionSnapshot) => {
        const products = [];
        collectionSnapshot.forEach((doc) => {
            products.push({
              name: doc.data().name, 
              price: doc.data().price, 
              description: doc.data().description,
              quantity: doc.data().quantity,
              id: doc.id
            });
        });
        setMainProductList(products);
      }, 
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);


  const handleClick = () => {
    if (selectedProduct != null) {
      setFormVisibleOnPage(false);
      setSelectedProduct(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleChangingSelectedProduct = (id) => {
    const selection = mainProductList.filter(product => product.id === id)[0];
    setSelectedProduct(selection);
  }

  
//   if (auth.currentUser == null) {
//     return (
//       <React.Fragment>
//         <h1>You must be signed in to access the queue.</h1>
//       </React.Fragment>
//     )
//   } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (selectedProduct != null) {
    currentlyVisibleState = <ProductDetail 
      product={selectedProduct} />
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList 
      onProductSelection={handleChangingSelectedProduct} 
      productList={mainProductList} />;
      buttonText = "Add Product"; 
    }
      
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>} 
      </React.Fragment>
    );
  }


export default ProductControl;