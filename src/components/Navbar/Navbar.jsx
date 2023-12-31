import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <Link to="Intro" smooth={true} spy={true}>
          <div className="n-name" style={{cursor:"pointer"}}>GOWTHESH</div>
        </Link>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="qualification" spy={true} smooth={true}>
                Qualification
              </Link>
            </li>
            <li>
              <Link to="Skill" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;
