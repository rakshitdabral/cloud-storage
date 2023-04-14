import React from "react";
import "./faq.css"

function Faqmain(){
    return(
        <>
        <div className="container row">
            <div className="container col-faq-1">
            <strong id="title">FAQ</strong>
            <p id="heading">Frequently Asked <strong>Questions</strong></p>
            <p id="subtitle">If you have another question contact us <email>xyz@gmail.com</email></p>
            </div>
            <div className="container col-faq-2">
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How fast is our service?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      "Get lightning-fast results with our service - speed that'll leave you amazed!"
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How much our service cost?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      "Don't break the bank - our prices will make your wallet sing!"
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What if we dont like your product?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      "Not satisfied? No problem. Our refund policy has got you covered - hassle-free!"
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Benefit of cloud storage?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The of the main benefits of cloud storage is its accessibility. With cloud storage, you can access your files from anywhere with an internet connection, allowing for easy remote work and file sharing with others. 
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        </>
    )
}

export default Faqmain