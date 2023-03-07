
import React from 'react';
import "./index.css";
import pic from "../assets/image3.jpg"

function Contact() {
  return (
    <div><div>
    <div id="contact" className="pt-6" />
    <section className="hero has-background-danger-light block py-6 custom-font">
      <div className="hero-body">
        <div className="column is-4 mx-auto">
          <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            Contact
          </h2>
          <div className="title-underline" />
        </div>
        <div className="columns mx-0 ">
          <div className="column is-5 m-auto p-6">
            <p data-aos="fade-up">
            </p><ul>
              <span className="icon">
                <i className="fas fa-phone" />
              </span>  720 244 551-2<br /><br />
              <span className="icon">
                <i className="fab fa-linkedin" />
              </span>
              https://www.linkedin.com/in/sathursika-660565213/<br /><br />
              <span className="icon">
                <i className="fas fa-envelope-square" />
              </span>          
              sathusikame@gmail.com
            </ul>
            <p />
          </div>
          <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
            <img className="is-rounded" width={480} height={480} src={pic} alt="" />
          </figure>
        </div>
      </div>
    </section>
  </div></div>
  )
}

export default Contact