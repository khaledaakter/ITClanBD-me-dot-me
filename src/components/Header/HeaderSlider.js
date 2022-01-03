import React from "react";
// import { render } from "react-dom";
import Slider from "react-animated-slider";
import "../../assets/css/slider-animations.css";
// import bannerBG from '../../assets/images/banner.jpg';

const content = [
  {
    title: "Love to",
    description: "ASSIST FOR HELP",
    para: "you love, we create",
    // image: "../../assets/images/banner.jpg"
    image: "../assets/images/banner.jpg"
  },
  {
    title: "Love to 2",
    description: "ASSIST FOR HELP2",
    para: "you love, we create",
    image: "../assets/images/banner.jpg"
  },
  {
    title: "Love to 3",
    description: "ASSIST FOR HELP3",
    para: "you love, we create",
    image: "../assets/images/banner.jpg"
  }
];



const HeaderSlider = () => (
    
  <>

    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div key={index} className="slider-content" style={{ backgroundImage: `url('${item.image}')` }}>
          <div className="inner">
            <div className="ic-container">
                <h3>{item.title}</h3>
                <h1>{item.description}</h1>
                <p>{item.para}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>

    
  </>
);

export default HeaderSlider;