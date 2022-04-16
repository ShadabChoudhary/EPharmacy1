import React from "react";
import Header from "../components/Header.js";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import Row from "./Row.js";
import Footer from "./Footer.js";

function Home() {
  return (
    <div className="home-container">
      <div>
        <Header />
      </div>
      <div className="banner-container">
        <Carousel indicators={false} animation="slide">
          <div className="banner">
            <img
              src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1646734407/ePharmacy/banner/img2_fbjuxd.jpg"
              alt="banner"
            />
          </div>
          <div className="banner">
            <img
              src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1646734388/ePharmacy/banner/img1_jhbed6.webp"
              alt="banner"
            />
          </div>
          <div className="banner">
            <img
              src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1646734446/ePharmacy/banner/img4_dwqzdr.jpg"
              alt="banner"
            />
          </div>
          <div className="banner">
            <img
              src="https://res.cloudinary.com/dkrutvoe5/image/upload/v1646734446/ePharmacy/banner/img3_b0ejke.webp"
              alt="banner"
            />
          </div>
        </Carousel>
      </div>
      <div>
        <h1 className="ctg_title">Ayurvedic</h1>
        <Row title="ayurvedic" className="ctg_img" category="ayurvedic" />
      </div>
      <div>
        <h1 className="ctg_title">Covid Essentials</h1>
        <Row className="ctg_img" category="covid essentials" />
      </div>
      <div>
        <h1 className="ctg_title">Mom & Baby</h1>
        <Row className="ctg_img" category="Mom & Baby" />
      </div>
      <div>
        <h1 className="ctg_title">Mama Earth</h1>
        <Row className="ctg_img" category="Mama earth" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
