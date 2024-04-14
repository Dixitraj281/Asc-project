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
              <div className={`${styles.dropdown}`} onClick={removeActive}>
                <span className="navlink">All Products</span>
                <div className={`${styles.dropdownContent}`}>
                  <Link to="/Carpenter" className="navlink">
                    CARPENTER TRADE
                  </Link>
                  <hr/>
                  <Link to="/Electrical" className="navlink">
                    ELECTRICAL TRADE
                  </Link>
                  <hr/>
                  <Link to="/Electronic_Mechanic" className="navlink">
                  ELECTRONIC MECHANIC TRADE
                  </Link>
                  <hr/>
                  <Link to="/Fitter_Trade" className="navlink">
                    FITTER TRADE
                  </Link>
                  <hr/>
                  <Link to="/Hydraulic_Trade" className="navlink">
                    HYDRUALIC & PNEUMATIC TRADE
                  </Link>
                  <hr/>
                  <Link to="/Motor_Trade" className="navlink">
                    MOTOR MECHANIC VEHICLE TRADE
                  </Link>
                  <hr/>
                  <Link to="/Refridegration_Trade" className="navlink">
                    REFRIDGERATION & AIR CONDITIONING TRADE
                  </Link>
                  <hr/>
                  <Link to="/Solar_Trade" className="navlink">
                    SOLAR TRADE
                  </Link>
                  <hr/>
                  <Link to="/Welder_Trade" className="navlink">
                    WELDER TRADE
                  </Link>
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
