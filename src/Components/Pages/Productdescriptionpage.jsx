import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Productdescriptionpage.css";
import productslist from './productslist'; // Correct import statement
// import Footer from '../Footer/Footer'

const Productdescription = () => {
  const { category, productId } = useParams(); // Assuming you also have category in the URL params
  const productCategory = productslist[category]; // Get the array of products for the specified category
  const product = productCategory.find((product) => product.id === parseInt(productId)); // Find the product within the category array
  const { title, description, note } = product;
  
  return (
    <main className="container-desc-page">
      <div className="left-column">
      <img data-image="black" src='https://source.unsplash.com/jXd2FSvcRr8' alt={product.title} className="product-image" />
      </div>
      <div className="right-column">
        <div className="product-description">
        <div className="desc-heading">{category}</div>
          <h1>{title}</h1>
          <p><span> Description: </span>{description}</p>
          <p><span>Note:</span>{note}</p>
          <Link to={`/${category}`} className="back-link">Back to product section</Link>
        </div>
      </div>
    </main>
  );
}

export default Productdescription;
