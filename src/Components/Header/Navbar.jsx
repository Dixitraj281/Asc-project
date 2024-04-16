import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>
            ASC
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/" className="navlink">
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className="navlink">
                About Us
              </Link>
            </li>
            <li>
              <div className={`${styles.dropdown}`}>
                <span className="navlink">All Products</span>
                <div className={`${styles.dropdownContent}`} >
                  <Link to="/Carpenter" className="navlink"  onClick={removeActive}>Carpenter Trade</Link>
                  <Link to="/Electrical" className="navlink" onClick={removeActive}>Electrical Trade</Link>
                  <Link to="/Electronic_Mechanic" className="navlink" onClick={removeActive}>Electronic Mechanic Trade</Link>
                  <Link to="/Fitter_Trade" className="navlink" onClick={removeActive}>Fitter Trade</Link>
                  <Link to="/Hydraulic_Trade" className="navlink" onClick={removeActive}>Hydraulic & Pneumatic Trade</Link>
                  <Link to="/Motor_Trade" className="navlink" onClick={removeActive}>Motor Mechanic Vehicle Trade</Link>
                  <Link to="/Refridegration_Trade" className="navlink" onClick={removeActive}>Refrigeration & Air Conditioning Trade</Link>
                  <Link to="/Solar_Trade" className="navlink" onClick={removeActive}>Solar Trade</Link>
                  <Link to="/Welder_Trade" className="navlink" onClick={removeActive}>Welder Trade</Link>
                </div>
              </div>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className="navlink">
                Contact Us
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
