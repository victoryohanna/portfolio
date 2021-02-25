import React, { Component } from "react";

class Blogs extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="blog">
          <div className="title">
            <h2>Introduction to Test-driven Development</h2>
          </div>
          <div className="description">
            <p>
              Test-driven development (TDD) is a software development approach
              in which test cases are developed using software requirements to
              specify and validate what the code will do before the software is
              fully developed. In another word, test-case for each functionality
              is created and tested first before actual development of the
              application.
            </p>
          </div>
          <div className="read-blog">
            <a
              href="https://victoryohanna.medium.com/introduction-to-test-driven-development-9dda03d544bc"
              className="displaybtn"
            >
              Read More...
            </a>
          </div>
        </div>
        <div className="blog ">
          <div className="title ">
            <h2>How to perform Automated Test</h2>
          </div>
          <div className="description">
            <p>
              This article highlights some advantages of Test-driven Development
              and gives practical example of Test-driven Development
            </p>
          </div>
          <div className="read-blog">
            <a
              href="https://victoryohanna.medium.com/how-to-perform-test-driven-development-37d6a081d1fa"
              className="displaybtn"
            >
              Read More...
            </a>
          </div>
        </div>
        <div className="blog ">
          <div className="title ">
            <h2>Be Inspired</h2>
          </div>
          <div className="description">
            <p>
              This is an inpirational article written to encourage and point out
              the need for being proactive.
            </p>
          </div>
          <div className="read-blog">
            <a
              href="https://victoryohanna.medium.com/dont-give-up-5eb1bafd8e88"
              className="displaybtn"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
