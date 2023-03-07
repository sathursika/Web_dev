import React from 'react';
import "./index.css";
import pic from "../assets/image3.jpg"

function Edu() {
  return (
    <div>
        <div id="edu" className="pt-6" />
        <section className="hero has-background-danger-light block py-6 custom-font">
          <div className="hero-body">
            <div className="column is-4 mx-auto">
              <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                <span className="icon">
                  <i className="fas fa-book" />
                </span>
                Educational Background
              </h2>
              <div className="title-underline" />
            </div>
            <div className="columns mx-0 ">
              <div className="column is-5 m-auto p-6">
                <p data-aos="fade-up">
                </p><ul>
                  BSC in Information Systems [1st year]<br />
                  University of Colombo School of Computing<br /><br />
                  G.C.E(A/L)-2020<br />
                  B C S in Physical Science Stream(Tamil medium)<br /><br />
                  G.C.E(O/L)-2017<br />
                  7A B C (English Medium)<br /><br />
                </ul>
                <p />
              </div>
              <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
                <img className="is-rounded" width={480} height={480} src={pic} alt="" />
              </figure>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Edu