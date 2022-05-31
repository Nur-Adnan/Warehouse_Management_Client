import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsPinterest, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
        <hr />
        <div className="social-media">
          <Link to="#" className="btn"><BsFacebook></BsFacebook></Link>
          <Link to="#" className="btn"><BsTwitter></BsTwitter></Link>
          <Link to="#" className="btn"><BsInstagram></BsInstagram></Link>
          <Link to="#" className="btn"><BsPinterest></BsPinterest></Link>
          <Link to="#" className="btn"><BsLinkedin></BsLinkedin></Link>
        </div>
        <h1 className="Owner">
          Copyright@ | All Rights Reserved! @2022
        </h1>
      </section>
    );
};

export default Footer;