import React from "react";
import "./Footer.css";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p>&copy; 2023 onlinepizza.com</p>
    </div>
  );
};

export default Footer;
