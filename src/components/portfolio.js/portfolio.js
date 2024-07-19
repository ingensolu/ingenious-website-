import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/portfolio/CaratLane-A-Tanishq-Partnership-Best-Store-for-Online-Jewellery-Shopping.jpeg';
import image2 from '../../assets/images/portfolio/Empowering-Data-Driven-Medicine-with-PatientIQ.png';
import image3 from '../../assets/images/portfolio/bokningoschema.png';
import image4 from '../../assets/images/portfolio/procurementexpress.png';
import image5 from '../../assets/images/portfolio/sellerchamp.png';
import image6 from '../../assets/images/portfolio/hungryhub.png';
import image7 from '../../assets/images/portfolio/crystalcommerce.png';

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const portfolioItems = [
    { image: image1, title: 'CaratLane', category: 'WEB DEVELOPMENT' },
    { image: image2, title: 'Patient IQ', category: 'WEB DEVELOPMENT' },
    { image: image3, title: 'Bokningo schema', category: 'WEB DEVELOPMENT' },
    { image: image4, title: 'Procurement express', category: 'WEB DEVELOPMENT' },
    { image: image5, title: 'Sellerchamp', category: 'WEB DEVELOPMENT' },
    { image: image6, title: 'Hungryhub', category: 'WEB DEVELOPMENT' },
    { image: image7, title: 'Crystal commerce', category: 'WEB DEVELOPMENT' },
  ];

  return (
    <section className="cs_portfolio">
      <h2 className="sec-title text-center">Our Portfolio</h2>
      <div id="cs_portfolio">
        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`item ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="portfolio-content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                />
                {hoveredIndex === index && (
                  <div className="hover-text">
                    {item.title}
                    <p>{item.category}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
