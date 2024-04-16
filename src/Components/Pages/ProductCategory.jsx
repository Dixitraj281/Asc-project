import React from 'react';
import './ProductCategory.css'; // Import CSS file for styling
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function ProductCategory({ category, products }) { // Removed 'path' prop as it's not used in the component
  // const [expandedProduct, setExpandedProduct] = useState(null);

  // const handleReadMore = (productId) => {
  //   setExpandedProduct(productId === expandedProduct ? null : productId);
  // };

  return (
    <div className="product-category">
      <h2 className="category-title">{category}</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${category}/${product.id}`}><img src='https://source.unsplash.com/jXd2FSvcRr8' alt={product.title} className="product-image" /></Link> {/* Update image src with product.src */}
            <div className="product-details">
              {product.title.length <= 70 ? (
                <h3 className="product-title">{product.title}</h3>
              ) : (
                <h3 className="product-title">{product.title.slice(0, 70)}...</h3>
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
