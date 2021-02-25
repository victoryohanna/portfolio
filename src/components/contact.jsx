import React, { Component } from "react";
import axios from "axios";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  //  componentDidMount(){
  //    console.log(this.props)
  //  }
  handleSubmit = (e) => {
    e.preventDefault();

    let msg = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios.post("http://localhost:4000/contact", msg).then((data) => {
      if (data) {
        this.setState({
          name: "",
          email: "",
          message: "",
        });
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <div className="container-main">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-details">
              <p className="animate">
                {" "}
                <b>Email:</b> victoryohanna@gmail.com
              </p>
              <p className="animate">
                {" "}
                <b>Phone Number:</b> +2348131595178, +2347084378509
              </p>
              <p className="animate">
                {" "}
                <b>Address:</b> N0 20 Abc Street off DW Road Wuse 2 Abuja,
                Nigeria
              </p>
            </div>
            <h3 className="caption animate d-flex justify-content-center">
              SOCIAL MEDIA
            </h3>
            <div className="social animate d-flex justify-content-center">
              <h1>
                {" "}
                <a
                  href="https://web.facebook.com/victor.y.sara"
                  className="social-links"
                >
                  {" "}
                  <FaFacebook />
                </a>{" "}
              </h1>
              <h1>
                {" "}
                <a
                  href="https://twitter.com/VictorYohanna"
                  className="social-links"
                >
                  {" "}
                  <FaTwitter />
                </a>{" "}
              </h1>
              <h1>
                {" "}
                <a
                  href="https://www.linkedin.com/in/victor-yohanna"
                  className="social-links"
                >
                  {" "}
                  <FaLinkedin />
                </a>{" "}
              </h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-contact mx-auto">
              <div className="card-header contact-header">Send Message</div>
              <div className="card-body contact-body">
                <form type="form" className="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mx-auto">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          type="textarea"
                          rows="7"
                          cols=""
                          className="form-control"
                          id="message"
                          value={this.state.message}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
