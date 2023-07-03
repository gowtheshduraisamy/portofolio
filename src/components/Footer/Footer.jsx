import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "../Footer/Contactmodule/Linkedin";
import Gitub from "../Footer/Contactmodule/Github";
import Whatsapp from "../Footer/Contactmodule/Whatsapp";
import Insta from "../Footer/Contactmodule/Instagram"
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" ,top:"3rem" }} />
      <div className="f-content">
        <span>gowthesh.d@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
          <Whatsapp color="white" size={"3rem"} phoneNumber={8344842137} />
          <Linkedin color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
