import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Some thing we need</p>
              <h4>Houston Texas</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-826354845
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              trip@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            deleniti sit temporibus molestias autem quas dignissimos asperiores
            debitis eos voluptas.
          </p>
          <div className="social">
              <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaTwitter size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
              <FaLinkedin size={20} style={{color: '#ffffff', marginRight: '1rem'}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
