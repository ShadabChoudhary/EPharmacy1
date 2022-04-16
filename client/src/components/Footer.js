import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaSnapchat } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_title">EPharmacy</div>
      <div className="footer_content">
        <div className="left_content">
          <div className="about_container">
            <h3 className="about">About the company</h3>
            <p>
              EPharmacy is a website where you can buy any medicine without
              going anywhere from your phone or laptop directly to your door
              step.
            </p>
          </div>
          <div className="social_links">
            <BsInstagram className="social_icons"></BsInstagram>
            <FiTwitter className="social_icons"></FiTwitter>
            <BsFacebook className="social_icons"></BsFacebook>
            <FaSnapchat className="social_icons"></FaSnapchat>
          </div>
        </div>
        <div className="middle_content">
          <div className="query">
            <IoCallOutline className="contact_icons" />
            <p>7021083381</p>
          </div>
          <div className="query">
            <HiOutlineMail className="contact_icons" />
            <p>shaddychoudhary21@gmail.com</p>
          </div>
        </div>
        <div className="right_content">
          <img
            src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1649990803/ePharmacy/Logo/logo3-removebg-preview_nz6s7y.png"
            alt="Logo"
          />
          <p>Bringing the medicine at your door</p>
          {/* <img src="#" alt="Move to top" /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
