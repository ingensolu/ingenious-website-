import React, { useEffect } from 'react';
import {  animated } from 'react-spring';
import footerPatternImg from '../../assets/images/footer_pattern.png';


const ContactPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="pageBanner">
      <img src={footerPatternImg} className="pagebanner-img" alt="" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="pageBannerHead">
              <animated.h2>Contact</animated.h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="contact-page-container">
      <div className="content-container">
        <div className="container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSeD2qeEYlH9qJ0F-r_OUsMtjU7zABKhQkSGmif3uZftXfpg/viewform?embedded=true" 
        title='none'
        width="640" 
        height="1037" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
          Loading…
          </iframe>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default ContactPage;
