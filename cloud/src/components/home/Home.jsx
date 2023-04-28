import React from "react";
import Navbar from '../navbar/Navbar'
import {Link} from "react-router-dom";
import Footer from "../footer/Footer"
import image_home from "./images/bg.png";
import image_ellipse from "./images/Ellipse.svg";
import image_pdf from "./images/PDF.png";
import image_jpg from "./images/JPG.png";
import image_txt from "./images/TXT.png";
import image_gif from "./images/GIF.png";
import image_mp4 from "./images/MP4.png";
import image_line2 from "./images/Lines2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../home/home.css";
import { FiArrowRight } from 'react-icons/fi';
import Faqmain from "../faq/Faqmain"

function Home() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid container-home">
      <div className="welcome container-lg">
        <p className="main-title">Welcome to <strong><bold>CLOUD'O</bold></strong></p>
        <p className="subtitle">A free cloud storage solution</p>
        <Link to="/getstarted">
        <button class="btn btn-outline-success" type="submit">
                        Get Started <FiArrowRight/>
                      </button>
                      </Link>
      </div>
      
        <img  className="lines" src={image_home} alt="lines" />
        
      </div>
      <hr></hr>

      <section className="services">
        <div className="container-fluid row-one">
          <div className="col1 container">
              <img  className="ellipse" src={image_ellipse} alt="ellipse"></img>
              <img  className="pdf card" src={image_pdf} alt="pdf"></img>
              <img  className="jpg card" src={image_jpg} alt="jpg"></img>
              <img  className="gif card" src={image_gif} alt="gif"></img>
              <img  className="mp4 card" src={image_mp4} alt="mp4"></img>
              <img  className="txt card" src={image_txt} alt="txt"></img>
          </div>
          <div className="col2 container">
            <p>"Securely store your world in the clouds with our seamless storage solution"</p>
          </div>
        </div>
      </section>
      
      <section>
          <div className="outer container">
              <div className="inner container">
                <img  className="linetwo" src={image_line2} alt="line-bg"></img>
                <div className="container small-box">
                    <p className="title-2"><strong>Try me out, risk free!</strong></p>
                    <p className="subtitle-2">If you are not happy with my performance, you can ask for refund</p>
                </div>
                <div className="container side-box">
                <button class="btn btn-outline-success price-button" type="submit">
                        Prices <FiArrowRight/>
                      </button>
                </div>
              </div>
          </div>
      </section>
      <section className="faq">
        <div className="container row-faq">
              <Faqmain/>
            </div>
      </section>
      <footer id="footer">
          <div className="container-flud">
              <Footer/>
          </div>
      </footer>
    </>
  );
}

export default Home;
