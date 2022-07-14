import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            We aim to provide a high class service to our customers to deliver
            high quality products with super quick and friendly customer service
            to ensure no one is left disappointed.
          </p>
        </div>
        <div className="quick-links">
          <h3>Follow Us</h3>
          <div className="social">
            <InstagramIcon />
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="foot-note">
        'WADHII THRIFT' and the 'WADHII THRIFT' logo are trade marks of WADHII
        THRIFT KE Limited. <br />© Copyright 2022 WADHII THRIFT KE Limited. All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;
