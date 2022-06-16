import React from "react";
import "./contact.css";
import Nav from "../nav/Nav";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qrakuyk",
        "template_emnxi7f",
        form.current,
        "8lHELknGqMKqnW4zC"
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
  };

  return (
    <section id="contact">
      <Nav />
      <h5>Email for Inquries</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="First and Last Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name=""
            id="message"
            rows="10"
            placeholder="What do you want to talk about?"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
