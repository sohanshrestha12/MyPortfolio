import React, { useRef, useState } from "react";
import Wrapper from "../assets/wrappers/Contact";
import contacts from "../utils/Contact";
import FormText from "./FormText";
import emailjs from "@emailjs/browser";
import { FaRegCircleCheck } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ecsrv9",
        "template_7shi4zs",
        form.current,
        "TKxT0L6V1-Fzgoqsb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccessMessage("Form Submitted Successfully.");
  };
  setTimeout(()=>{
    setSuccessMessage("");
  },3000)

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
          {successMessage && (
            <div className="contact-success">
              <FaRegCircleCheck />
              {successMessage}
            </div>
          )}
          <form ref={form} onSubmit={sendEmail}>
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
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
