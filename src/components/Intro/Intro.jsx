import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Linkedin from "../Intro/Contactmodules/Linkedin";
import Gitub from "../Intro/Contactmodules/Github";
import Whatsapp from "../Intro/Contactmodules/Whatsapp";
import Insta from "../Intro/Contactmodules/Instagram"
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Gowthesh Duraisamy</span>
          <span>
        	To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="f-icons">
          <Linkedin color="black" size={"3rem"} />
          <Gitub color="black" size={"3rem"} />
          <Whatsapp color="black" size={"3rem"} phoneNumber={8344842137}/>
          <Insta color="black" size={"3rem"} />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Vector3} alt="" />
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          // initial={{ top: "-29%" }}
          // whileInView={{ top: "-100%" }}
          transition={transition}
          src={boy}
          alt=""
        />

        <motion.div
          initial={{ top: "14rem", left: "44%" }}
          whileInView={{ left: "55%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "14rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Software" text2="Engineer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
