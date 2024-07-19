import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Image1 from "../../assets/images/footer_pattern.png";
import cspic1 from "../../assets/images/office-img/cspic1.jpg";
import cspic2 from "../../assets/images/office-img/cspic2.jpg";
import cspic3 from "../../assets/images/office-img/cspic3.jpg";
import cspic4 from "../../assets/images/office-img/cspic4.jpg";
import cspic5 from "../../assets/images/office-img/cspic5.jpg";
import cspic6 from "../../assets/images/office-img/cspic6.jpg";
import cspic7 from "../../assets/images/office-img/pic-1.jpg";
import cspic8 from "../../assets/images/office-img/pic-2.jpg";
import cspic9 from "../../assets/images/office-img/WhatsApp Image 2023-10-24 at 11.51.13 AM.jpeg"
import cspic10 from "../../assets/images/office-img/WhatsApp Image 2023-10-24 at 11.51.37 AM.jpeg"

const LifeofCode = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  
    window.scrollTo(0, 0);

    setAnimate(true);
  }, []);

  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1000 },
  });

  const fadeInLeft = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 800 },
  });

  const fadeInRight = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 800 },
  });

  return (
    <div>
      <animated.div style={fadeInUp}>
        <div className="pageBanner">
          <img src={Image1} className="pagebanner-img" alt="" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="pageBannerHead">
                  <h2>Life at Ingenious Solution</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
      <div className="lifeAt-cs" style={{ padding: '50px 0' }}>
  <section className="whyChoose">
    <div className="container">
      <div className="row align-items-center">
        <animated.div className="col-12" style={{ ...fadeInUp, marginBottom: '30px' }}>
          <div className="cs-about-details">
            <h2 className="sec-title">Why US?</h2>
          </div>
        </animated.div>
      </div>

      <div className="row">
        <animated.div className="col-md-4 mb-4" style={{ ...fadeInLeft, marginBottom: '30px' }}>
          <div className="card p-4">
            <img src={""} className="onlyLogo" alt="cs-logo" />
            <img src={''} className="textLogo" alt="cs-text" />
            <h4>Innovative Culture</h4>
            <p style={{ padding: '10px', margin: '10px 0' }}>Join a workplace where creativity and innovation are not just encouraged but celebrated. Your ideas matter, and your innovative spirit will find a home here.</p>
          </div>
        </animated.div>
        <animated.div className="col-md-4 mb-4" style={{ ...fadeInUp, marginBottom: '30px' }}>
          <div className="card p-4">
            <img src={""} className="onlyLogo" alt="cs-logo" />
            <img src={''} className="textLogo" alt="cs-text" />
            <h4>Collaborative Environment</h4>
            <p style={{ padding: '10px', margin: '10px 0' }}>We thrive on collaboration. Our diverse team brings together individuals with unique perspectives and skill sets, fostering an environment where teamwork and knowledge-sharing are the keys to success.</p>
          </div>
        </animated.div>
        <animated.div className="col-md-4 mb-4" style={{ ...fadeInRight, marginBottom: '30px' }}>
          <div className="card p-4">
            <img src={""} className="onlyLogo" alt="cs-logo" />
            <img src={''} className="textLogo" alt="cs-text" />
            <h4>Professional Growth</h4>
            <p style={{ padding: '10px', margin: '10px 0' }}>Your career path is important to us. We invest in our employees' growth through continuous learning opportunities, mentorship programs, and a supportive environment that encourages you to excel in your field.</p>
          </div>
        </animated.div>
        <animated.div className="col-md-4 mb-4" style={{ ...fadeInRight, marginBottom: '30px' }}>
          <div className="card p-4">
            <img src={""} className="onlyLogo" alt="cs-logo" />
            <img src={''}className="textLogo" alt="cs-text" />
            <h4>Client Impact</h4>
            <p style={{ padding: '10px', margin: '10px 0' }}>Your work will make a difference. Join a company that is dedicated to delivering solutions that positively impact our clients. Your contributions will be valued, and you'll play a crucial role in helping our clients achieve their business objectives.</p>
          </div>
        </animated.div>
        <animated.div className="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="2000" style={{ marginBottom: '30px' }}>
          <div className="card p-4">
            <img src={""}className="onlyLogo" alt="cs-logo" />
            <img src={""}className="textLogo" alt="cs-text" />
            <h4>Team Culture</h4>
            <p style={{ padding: '10px', margin: '10px 0' }}>A team of diverse individuals with innovative ideas.</p>
          </div>
        </animated.div>
      </div>
    </div>
  </section>



        <section className="teams">
          <div className="container">
            <animated.h2 className="sec-title" style={fadeInUp}>The Team Ingenious Solution</animated.h2>
            <div className="row">
              <animated.div className="col-md-4" style={fadeInLeft}>
                <img src={cspic1} className="officeImg" alt="office-img" />
              </animated.div>
            
              <animated.div className="col-md-4" style={fadeInRight}>
                <img src={cspic3} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInLeft}>
                <img src={cspic4} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInUp}>
                <img src={cspic5} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInRight}>
                <img src={cspic6} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInLeft}>
                <img src={cspic7} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInUp}>
                <img src={cspic8} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInUp}>
                <img src={cspic9} className="officeImg" alt="office-img" />
              </animated.div>
              <animated.div className="col-md-4" style={fadeInUp}>
                <img src={cspic10} className="officeImg" alt="office-img" />
              </animated.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifeofCode;
