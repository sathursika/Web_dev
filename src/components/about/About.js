import React from 'react';
import "./index.css";
import pic from "../assets/image3.jpg"

function About() {
  return (
    <div>
        <div id="intro" className="pt-6" />
        <section className="hero has-background-danger-light block py-6 custom-font">
          <div className="hero-body">
            <div className="column is-4 mx-auto">
              <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                <span className="icon">
                  <i className="fas fa-info" />
                </span>
                About me !
              </h2>
              <div className="title-underline" />
            </div>
            <div className="columns mx-0 ">
              <div className="column is-5 m-auto p-6">
                <p data-aos="fade-up">
                </p><h2 className="title is-4 ml-6 has-text-black">Undergraduate at the University of Colombo 
                  studying Information Systems with career interests in
                  UX &amp; UI design</h2><br />
                Name: Sathursika Manokararajah<br />
                Birthday: 12th November 2001<br />
                Age: 21 y/o<br />
                Address: Vavuniya, Sri Lanka<br />
                University: University of Colombo<br />
                Email: sathursikame@gmail.com<br />
                <p />
              </div>
              <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                <img className="is-rounded" width={480} height={480} src={pic} alt="logo" />
              </figure>
            </div>
          </div>
        </section>
      </div>
  );
}

export default About