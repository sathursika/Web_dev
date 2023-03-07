import React from 'react';
import "./index.css";
import pic from "../assets/image3.jpg"

function Skill() {
  return (
    <div>
        <div id="skills" className="pt-6" />
        <section className="hero has-background-danger-light block py-6 custom-font">
          <div className="hero-body">
            <div className="column is-4 mx-auto">
              <h2 data-aos="fade-out" className="title has-text-centered is-uppercase">
                <span className="icon">
                  <i className="fas fa-chart-pie" />
                </span>
                Skills
              </h2>
              <div className="title-underline" />
            </div>
            <div className="columns mx-0 ">
              <div className="column is-5 m-auto p-6">
                <p data-aos="fade-up">
                </p><ul>
                  Critical thinking skills<br />
                  Teamwork skills<br />
                  Project management skills<br />
                  Interpersonal skills<br />
                  Decision making skills<br />
                  Communication skills<br />
                  Leadership skills<br /><br />
                </ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Photoshop</li>
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

export default Skill