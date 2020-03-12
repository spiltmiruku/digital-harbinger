import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  render() {
      
    const {
        name,
        email,
        message
      } = this.state;
      
    return (
      <div>
        <h1>CONTACT US</h1>
        <h2>We'd love to hear from you!</h2>

        <input 
        className="contact-input" 
        type="text" 
        placeholder='name'
        value={name}
        />
        <input 
        className="contact-input" 
        type="email" 
        placeholder='email'
        value={email}
        />
        <input 
        className="contact-input" 
        type="text" 
        placeholder='message...'
        value={message}
        />
      </div>
    );
  }
}

export default Contact;
