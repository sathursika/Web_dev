import React from 'react';
import "./index.css";
import profile from "../assets/image1.jpg";

function Home() {
  return (
    <section className="hero has-background-danger-light block py-6 custom-font">
        <div className="hero-body">
          <div className="column is-4 mx-auto">
            <div className="title-underline" />
          </div>
          <div className="columns mx-0">
            <figure data-aos="fade-down" className="image p-6 m-auto column is-5">
              <img className="is-rounded" width={480} height={480} src={profile} alt="" />
            </figure>
            <div className="column is-5 m-auto p-6 ">
              <p data-aos="fade-up">
              </p><h1 className="title is-1 ml-6 has-text-danger">Hi ! </h1>
              <h2 className="title is-1 ml-6 has-text-danger"> I'm Sathursika Manokararajah</h2>
              <h2 className="title is-4 ml-6 has-text-black">Hardworking university student 
                &amp; very organized person who likes to learn new things 
                and very eager to learn new ideas as well as work well in a
                team. </h2>
              <p />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home