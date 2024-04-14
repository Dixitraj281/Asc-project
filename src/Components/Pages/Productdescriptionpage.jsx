import React from 'react'
import "./Productdescriptionpage.css"
import { getProductById } from '../productutils.js';
const productdescription = ({ match }) => {
  // Retrieve the product ID from URL parameter
  const { productId } = match.params;

  // Here you can use the product ID to fetch the product details from the products list
  // For demonstration purposes, I'm assuming you have a function to get the product details
  // You can replace this with your actual data fetching logic
  const product = getProductById(productId);
  return (
    <>
      <main className="container-desc-page">
 
 {/* <!-- Left Column / product Image --> */}
 <div className="left-column">
 <img data-image="black" src={product.image} alt={product.title} />
 </div>
 {/* <!-- Right Column --> */}
 <div className="right-column">

   {/* <!-- Product Description --> */}
   <div className="product-description">
    <span>{product.category}</span>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
   </div>
 </div>
</main>
    </>
  )
}

export default productdescription