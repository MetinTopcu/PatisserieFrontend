import React from "react";
import { useFormik, Form, Formik } from "formik";
import "../styles/Contact.css";
import { basicSchema } from "./schemas/ContactForm";
import "bootstrap-icons/font/bootstrap-icons.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Contact() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      //issubmitting işlem bitene kadar butona bidaha basımlasın diye
      initialValues: {
        username: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit, //useFormik in onSubmiti aslında handleSubmit aynı şey
    });

  return (
    <div className="container">
      <div className="contact-contents">
        <div className="contact-details">
          <div className="contact-title">Contact Details</div>
          <div className="contact-address">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.3469056887566!2d32.881388484740306!3d40.00069809804884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34d688d7bf67f%3A0xfc6564ef32bbc8c4!2sMor%20Salk%C4%B1m%20Pastanesi!5e0!3m2!1str!2str!4v1703974884666!5m2!1str!2str"
                width="500"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
            <div className="contact-infromation">
              <ul className="contact-lists">
                <li className="contact-list">
                  <span className="bi bi-geo-alt"></span>
                  Aktepe Mahallesi 5. Cadde, Keçiören/Ankara
                </li>
                <li className="contact-list">
                  <span className="bi bi-telephone"></span>
                  (012)345-6789
                </li>
                <li className="contact-list">
                  <span className="bi bi-telephone"></span>
                  555-567 3422
                </li>
                <li className="contact-list">
                  <span className="bi bi-envelope"></span>
                  info@croissant-contact.com
                </li>
                <li className="contact-list">
                  <span className="bi bi-envelope"></span>
                  sales@croissant.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-title">Form</div>
          <form onSubmit={handleSubmit}>
            <div className="form-user">
              <input
                className={
                  errors.username ? "input-error form-input" : "form-input"
                }
                type="text"
                value={values.username}
                onChange={handleChange}
                id="username"
                placeholder="Enter your username"
              />
              {errors.username && <p className="error">{errors.username}</p>}
              <input
                className={
                  errors.email ? "input-error form-input" : "form-input"
                }
                type="email"
                value={values.email}
                onChange={handleChange}
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                className={
                  errors.subject ? "input-error form-input" : "form-input"
                }
                type="text"
                value={values.subject}
                onChange={handleChange}
                id="subject"
                placeholder="Enter your Subject"
              />
              {errors.subject && <p className="error">{errors.subject}</p>}
              <textarea
                className={
                  errors.message ? "input-error form-textarea" : "form-textarea"
                }
                type="text"
                value={values.message}
                onChange={handleChange}
                id="message"
                placeholder="Enter your Message"
                cols="30"
                rows="2"
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="form-button">
              <button disabled={isSubmitting} type="submit">
                Gönderr
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
