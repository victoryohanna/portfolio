import React, { Component } from "react";
// import {Link} from "react-router-dom";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container striped">
          <div className="row">
            <div className="col-md-4 content-left d-flex justify-content-center">
              <img src={"./profile3.png"} className="" alt="Victor Yohanna" />
            </div>
            <div className="col-md-8 content-right">
              <div className="content-caption ">
                <h4 className="">Victor Yohanna</h4>
                <span>Software Developer</span>
              </div>
              <div className="content-main animate">
                <p>
                  I'm a tech Enthusiast, looking for opportunities to expose
                  myself to different aspects of learning and creativity. My
                  interest is in the field of Data science, web, and mobile
                  application development. I pay obsessive attention to details
                  while pursuing proficiency. I am absolutely focused on
                  achieving my goals, and easily adaptable to new environments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
