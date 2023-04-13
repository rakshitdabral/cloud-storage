import React from "react";
import image_home from "./images/Top.svg";
import image_ellipse from "./images/Ellipse.svg";
import image_pdf from "./images/PDF.png";
import image_jpg from "./images/JPG.png";
import image_gif from "./images/GIF.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../home/home.css";
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  return (
    <>
      <div class="container-fluid container-home">
      <div className="welcome container-lg">
        <p className="main-title">Welcome to <strong><bold>CLOUD'O</bold></strong></p>
        <p className="subtitle">A free cloud storage solution</p>
        <button class="btn btn-outline-success" type="submit">
                        Get Started <FiArrowRight/>
                      </button>
      </div>
      
        <img  className="lines" src={image_home} alt="lines" />
        
      </div>
      <hr></hr>

      <section className="services">
        <div className="container row">
          <div className="col1 container">
              <img  className="ellipse" src={image_ellipse} alt="ellipse"></img>
              <img  className="pdf card" src={image_pdf} alt="pdf"></img>
              <img  className="jpg card" src={image_jpg} alt="jpg"></img>
              <img  className="gif card" src={image_gif} alt="gif"></img>
          </div>
          <div className="col2 container">

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
