import React, { useState } from 'react';
import './ProductCategory.css'; // Import CSS file for styling
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom'

function ProductCategory({ category, products }) {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleReadMore = (productId) => {
    setExpandedProduct(productId === expandedProduct ? null : productId);
  };

  return (
    <div className="product-category">
      <h2 className="category-title">{category}</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product-description/${product.id}`}><img src="https://source.unsplash.com/jXd2FSvcRr8" alt={product.title} className="product-image" /></Link>
            <div className="product-details">
              {product.title.length <= 70 ? (
                <h3 className="product-title">{product.title}</h3>
              ) : (
                <h3 className="product-title">{product.title.slice(0, 70)}...</h3>
              )}
              <p className="product-description">
                {expandedProduct === product.id ? product.description : `${product.description.slice(0, 50)}...`}
              </p>
              <p className="product-note">
                {expandedProduct === product.id ? product.note : `${product.note.slice(0, 50)}...`}
              </p>
              {(product.description.length > 50 || product.note.length > 50) && (
                <button className="read-more-button" onClick={() => handleReadMore(product.id)}>
                  {expandedProduct === product.id ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='Foot'>
        <Footer/>
      </div>
    </div>
  );
}

export default ProductCategory;
