import React from "react";
import Wrapper from "../assets/wrappers/Contact";
import contacts from "../utils/Contact";
import FormText from "./FormText";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <h3>Contact</h3>
      <div className="contact-container">
        <div className="contact-left-container">
          <h5>MY CONTACT DETAILS</h5>
          {contacts.map((contact, i) => {
            const { text, icon, detail } = contact;
            return (
              <div className="contact-details" key={i}>
                <div className="contact-details-heading">
                  <i className={icon}></i>
                  <h6>{text}</h6>
                </div>
                <div className="contact-details-info">
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact-right-container">
          <div className="contact-form">
            <FormText name="name" type="text" placeholder="Your Name" />
            <FormText name="email" type="text" placeholder="Your Email" />
          </div>
          <FormText name="subject" type="text" placeholder="Subject" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
