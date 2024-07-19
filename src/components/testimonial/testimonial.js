import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';
import UserImg from "../../assets/images/userIcon.png"

const Testimonial = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0%)' : 'translateY(100%)',
    config: { duration: 1100 },
  });

  const fadeInLeft = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 800 },
  });

  const fadeInRight = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 500 },
  });

  return (
    <section className="testimonial">
      <div className="testi-sec-inner">
        <div className="container">
          <h2 className="sec-title text-center" style={fadeInUp}>
            <span>Clients</span> Review
          </h2>
          <Carousel interval={2000} indicators={false}>
            <Carousel.Item>
              <animated.div className="testi-content" style={fadeInLeft}>
                <img
                  className="rounded-circle shadow-1-strong"
                  src={UserImg}
                  alt="Mario-ThinkNow-Research"
                  style={fadeInUp}
                />
                <div className="row d-flex">
                
                  <animated.p className="caption-text" style={fadeInRight}>
                  We have worked with them for 1 year. They are responsive and communicative. They deliver the project exactly the way you want. They use best practices and respond timely.
Highly Recommend!
                  </animated.p>
                  <animated.p className="captioner" style={fadeInRight}>
                    <span>Charlie J.</span>
                  </animated.p>
                </div>
              </animated.div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testi-content justify-content-center col-md-9 m-auto">
                <img
                  className="rounded-circle shadow-1-strong"
                  src={UserImg}
                  alt="Mario-ThinkNow-Research"
                  style={fadeInUp}
                />
                <div className="row d-flex">
                  <p className="caption-text">
                  <p className="caption-text">As a growing startup, we needed an IT partner that could adapt to our changing needs and help us to scale efficiently. They are laser-focused on challenges like mine was. From the moment we engaged with the team they showed professionalism and expertise in handling our needs.</p>
                  </p>
                  <p class="captioner"><span>  RAUL E.</span></p>
                 
                </div>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item for additional reviews */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
