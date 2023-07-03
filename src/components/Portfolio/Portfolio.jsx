import React, {useState, useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Legendary from "../../img/legendary.png";
import Ecommerce from "../../img/ecommerce.png";
import portfolio from "../../img/portfolio.png";
import opencv from "../../img/opencv.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const [showDescription1, setShowDescription1] = useState(false);
  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
  };
  const [showDescription2, setShowDescription2] = useState(false);
  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
  };
  const [showDescription3, setShowDescription3] = useState(false);
  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
  };



  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}> Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={70}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Legendary} alt="" onClick={toggleDescription}/>
            {showDescription && (
              <div className="description">
                <br></br>
                <div className="card1">
                <p  style={{ fontSize: 14 }} >
                The preowned cars website is an online platform that facilitates the buying and 
                selling of used cars. It serves as a central hub where individuals and dealers can 
                list their preowned vehicles for sale and connect with potential buyers. The website 
                aims to provide a convenient and efficient marketplace for car enthusiasts and those
                 seeking affordable options for their transportation needs.</p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" onClick={toggleDescription1}/>
          {showDescription1 && (
              <div className="description1">
                <br></br>
                <div className="card1">
                <p style={{fontSize:14}}>Nutrient Pack Ordering is a user-friendly web application designed to provide customers with 
                a seamless shopping experience for nutrient pack products offered by ChoChi LTD. The 
                application allows customers to browse different categories, view product details, and place 
                orders quickly. Customers can also view reviews and ratings submitted by other customers, 
                helping them make informed purchasing decisions.</p>
                </div>
                <br></br>
              </div>
          )}
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="" onClick={toggleDescription2}/>
          {showDescription2 && (
              <div className="description2">
                <br></br>
                <div className="card1">
                <p style={{fontSize:14}}>A portfolio website built using React is a personalized 
                  online platform that showcases an individual's or a professional's 
                  work, skills, and accomplishments. It serves as a digital portfolio or resume, 
                  providing an engaging and interactive way for visitors to explore and learn 
                  more about the owner's expertise and projects.</p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <img src={opencv} alt="" onClick={toggleDescription3}/>
          {showDescription3 && (
              <div className="description3">
                <br></br>
                <div className="card1">
                <p style={{fontSize:14}}>
                  The volume controller using OpenCV is a project that utilizes computer vision 
                  techniques to control the volume of audio or video playback based on hand gestures
                   captured through a camera. This project aims to provide a hands-free and 
                   intuitive way to adjust the volume without the need for physical buttons or 
                   controls.</p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
