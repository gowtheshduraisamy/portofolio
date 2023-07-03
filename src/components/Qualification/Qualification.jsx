import React from "react";
import "./Qualification.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import qual1 from "../../img/qual1.jpg";
import qual2 from "../../img/qual2.jpg";
import qual3 from "../../img/qual3.jpg";

const Qualification = () => {
  const clients = [
    {
      img: qual1,
      review:[
          "Name of the course:SSLC(State Board)","School Name:Kongu National Matriculation Higher Secondary School,",	"Year of passing:2018"	,"Percentage:89.8%"]
    },
    {
      img: qual2,
      review:
         [ "Name of the course:HSC(State Board)","School Name:Green Garden Higher Secondary School","Year of passing:2020","Percentage:81%"]
    },
    {
      img: qual3,
      review:
          ["Name of the course:B.E(Computer Science and Engineering)","College Name:Kongu Engineering College","Year of passing:2024","CGPA:9.05"]
    },
    
  ];

  return (
    <div className="q-wrapper" id="qualification">
      <div className="q-heading">
        <span>Educational </span>
        <span> Qualification...</span>
      {/* <div className="blur q-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur q-blur2" style={{ background: "skyblue" }}></div> */}

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="qualification">
                <img src={client.img} alt="" />
                {client.review.map((r) => {
                  return (
                  <span>{r}</span>)
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Qualification;
