/* global $ */ 
import React, {useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  INGENIOUS from '../../assets/images/Ingenlous-logo-without-tagline.svg'


const Navbar = () => {
  const navigate = useNavigate();
   
  useEffect(() => {
   
    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $('.mainNav').addClass('sticky-header');
      } else {
        $('.mainNav').removeClass('sticky-header');
      }
    });
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 1000);
    navigate('/#about-us');
  };
  const handleHome = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/');
  };
  

  return (
    <div className="mainNav">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand"  to="/" >
        <img  src={INGENIOUS} alt="Logo" width = "200px" height = '80px'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" to="/" onClick={handleHome}>
              Home
            </Link>

            </li>
            <li className="nav-item">
            <a className="nav-link" href="#about-us" onClick={handleAboutClick}>
            About
              </a>
            </li>
            <li className="nav-item">
      <Link to="/LifeofCode" className="nav-link">
        Life at Ingenious Solution
      </Link>
    </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
                {/* <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7762 1.8871L6.45694 7.32258C6.39362 7.3871 6.32502 7.43269 6.25114 7.45935C6.17726 7.48645 6.0981 7.5 6.01367 7.5C5.92924 7.5 5.85008 7.48645 5.7762 7.45935C5.70233 7.43269 5.63372 7.3871 5.5704 7.32258L0.235307 1.8871C0.0875502 1.73656 0.0136716 1.54839 0.0136716 1.32258C0.0136716 1.09677 0.0928273 0.903226 0.251139 0.741935C0.40945 0.580645 0.594146 0.5 0.805228 0.5C1.01631 0.5 1.20101 0.580645 1.35932 0.741935L6.01367 5.48387L10.668 0.741935C10.8158 0.591397 10.9977 0.516128 11.2139 0.516128C11.4305 0.516128 11.6179 0.596774 11.7762 0.758064C11.9345 0.919354 12.0137 1.10753 12.0137 1.32258C12.0137 1.53763 11.9345 1.72581 11.7762 1.8871Z" fill="#652EAB"/>
            </svg> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactPage">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar