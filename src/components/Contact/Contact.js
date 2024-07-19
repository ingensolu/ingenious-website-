import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import footerPatternImg from '../../assets/images/footer_pattern.png';
import 'font-awesome/css/font-awesome.min.css';
import { Button } from "@mui/material";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApply = (formLink) => {
    window.open(formLink, "_blank"); 
  };

  return (
    <>
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
        <div className="row">
          <div className="col-md-6">
            <div className="content-container">
              <h1 style={{ marginTop: '20px', fontWeight: '300' }}>
                Want to Get in Touch ?
              </h1>
              <p style={{ marginTop: '20px', fontWeight: '300' }}>
                Let us know if there is anything we can do for you.
                We understand the importance of your work and time,
                and hence we make sure to reply to you within two business days.
              </p>
              <div>
                <Button
                  style={{ padding: '10px', marginBottom: '20px' }}
                  variant="contained"
                  color="primary"
                  fullWidth="true"
                  onClick={() =>
                    handleApply(
                      "https://docs.google.com/forms/d/e/1FAIpQLSeSeD2qeEYlH9qJ0F-r_OUsMtjU7zABKhQkSGmif3uZftXfpg/viewform?usp=sf_link"
                    )
                  }
                >
                  To Get in touch please fill your detail by just one click
                </Button>
              </div>
              <i className="fa fa-map-marker" style={{ marginRight: '10px' }} />
              <span style={{ fontWeight: '200', fontSize: '14px' }}>
                4th Floor Office No. 203, Nihal palace,
                31, Kanadia Rd, opposite digamber jain temple,
                <p style={{ marginLeft: '20px', fontSize: '14px' }}>
                  Goyal Nagar, Sanvid Nagar, Indore, Madhya Pradesh 452018
                </p>
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="content-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7193923567293!2d75.89539392305124!3d22.72330330710546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd33617b4777%3A0x75f0acb49a09d39!2sIngenious%20Solution!5e0!3m2!1sen!2sin!4v1721372277542!5m2!1sen!2sin"
                width="100%"
                title='location'
                height="600"
                style={{ border:'1px solid blue',marginTop:'10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
