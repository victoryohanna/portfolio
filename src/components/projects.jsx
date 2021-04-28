import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="main">
        <div className="project">
          <div className="projectName ">
            <h2>AgroConnect</h2>
          </div>
          <div className="description">
            <p>
              This platform gives consumers direct access to farmers in order to
              buy farm produce at a cheaper price. It helps reduce the
              activities of middle men that cause high inflation rate.
            </p>
          </div>
          <div className="view">
            <a href="https://agroconnects.herokuapp.com" className="displaybtn">
              View Project
            </a>
          </div>
        </div>
        <div className="project">
          <div className="projectName ">
            <h2>eazSME</h2>
          </div>
          <div className="description">
            <p>
              eaZSME is a web application built to provide a platform for SME
              businesses to access funds for their business in a simple and
              transparent manner This project seeks to proffer solution to the
              SDG Goal 9 on Industry, Innovation and Infrastructure.
            </p>
          </div>
          <div className="view">
            <a href="https://eazsme.netlify.app/" className="displaybtn">
              View Project
            </a>
          </div>
        </div>
        <div className="project">
          <div className="projectName ">
            <h2>Disposify</h2>
          </div>
          <div className="description">    
            <p>
              Disposify is a conversational interface that provide Simple
              information on how to segregate and compost at home, how to
              Properly dispose waste and make it easy to connect to nearest
              Waste Management agency.
            </p>
          </div>
          <div className="view">
            <a href="home" className="displaybtn">
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
