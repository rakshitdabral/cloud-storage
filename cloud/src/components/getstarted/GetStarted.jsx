import React from "react";
import "./getstarted.css";
import { FcGoogle } from "react-icons/fc";


function GetStarted() {
  return (
    <>
        <section className="form-group">
            <div className="container-fluid form-ui">
                    <div className="container  form-col1">  
                    <button type="button" class="btn btn-light btn-lg btn-outline-info button-login"><FcGoogle/>    Login with Google</button>
                    </div>
            </div>
        </section>
    </>
  );
}

export default GetStarted;
