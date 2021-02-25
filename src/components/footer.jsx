import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer d-flex justify-content-center">
        <h1>
          {" "}
          <a
            href="https://web.facebook.com/victor.y.sara"
            className="socialMedia"
          >
            {" "}
            <FaFacebook />
          </a>{" "}
        </h1>
        <h1>
          {" "}
          <a href="https://twitter.com/VictorYohanna" className="socialMedia">
            {" "}
            <FaTwitter />
          </a>{" "}
        </h1>
        <h1>
          {" "}
          <a
            href="https://www.linkedin.com/in/victor-yohanna"
            className="socialMedia"
          >
            {" "}
            <FaLinkedin />
          </a>{" "}
        </h1>
        <h1>
          {" "}
          <a
            href="https://github.com/victoryohanna"
            className="socialMedia"
          >
            {" "}
            <FaGithub />
          </a>{" "}
        </h1>
      </div>
    );
  }
}
export default Footer;
