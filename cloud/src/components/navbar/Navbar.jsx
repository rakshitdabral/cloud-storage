import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../navbar/navbar.css";
import { FiArrowRight } from 'react-icons/fi';

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">
                  CLOUD'O
                </a>
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
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Prices
                      </a>
                    </li>
                    <li class="nav-item">
                      <button class="btn btn-outline-success" type="submit">
                        Get Started <FiArrowRight/>
                      </button>
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
