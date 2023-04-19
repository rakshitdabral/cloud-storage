import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../navbar/navbar.css";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <Link class="nav-link active" aria-current="page" to="/" >CLOUD'O</Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/prices">
                        Prices
                      </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/getstarted">
                      <button class="btn btn-outline-success" type="submit">
                        Get Started <FiArrowRight/>
                      </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Navbar;
