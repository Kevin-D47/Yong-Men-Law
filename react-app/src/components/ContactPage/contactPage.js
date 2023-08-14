import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactBG from "../../images/contact-bg.png";
import mapPic from "../../images/location-map-pic.png";
import phoneIcon from "../../images/phone-icon.avif";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./contactPage.css";

const TYPEQUESTIONS = [
  "Employment based immigration",
  "Family based immigration",
  "H-1B Visa",
  "J-1 Waiver",
  "K Visa",
  "L-1 Visa",
  "National Interest Waiver",
  "Naturalization/Citizenship",
  "Other",
];

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_63213wj", "template_30mkjis", form.current, "0wlOLwtJ-4T7IYevf").then(
      (result) => {
        alert("Form has been sent!");
        form.current.reset();
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-page-container">
      <div className="contact-title-container">
        <div className="contact-title">Contact Us</div>
        <img className="contact-title-bg" src={contactBG} />
      </div>
      <div className="contact-page-wrapper">
        <div className="contact-info-container">
          <div className="contact-info-container-left">
            <form className="form-info-container" ref={form} onSubmit={sendEmail}>
              <div className="form-contact-instructions">
                You can contact us via phone call, fax, email, walk-in (appointment preferred) or send us your questions
                or comments in the form below.
              </div>
              <div className="contact-page-form-wrapper">
                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">Client Name:</label>
                  <input className="contact-form-input-field" type="text" name="client_name" placeholder="Full Name" />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">Company Name:</label>
                  <input
                    className="contact-form-input-field"
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">Email:</label>
                  <input
                    className="contact-form-input-field"
                    type="email"
                    name="client_email"
                    placeholder="Client Email"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">
                    <></>
                  </label>
                  <input
                    className="contact-form-input-field"
                    type="number"
                    name="client_phone"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">Fax:</label>
                  <input
                    className="contact-form-input-field"
                    type="number"
                    name="client_fax"
                    placeholder="Fax Number"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">URL:</label>
                  <input className="contact-form-input-field" type="text" name="client_url" placeholder="URL" />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">Question:</label>
                  <select className="contact-form-input-field-select" name="question_type">
                    <option selected disabled value="">
                      What do you have a question about?
                    </option>
                    {TYPEQUESTIONS.map((questionType) => (
                      <option key={questionType} value={questionType}>
                        {questionType}
                      </option>
                    ))}
                  </select>

                  <textarea
                    className="contact-form-input-field-question"
                    type="text"
                    name="message"
                    placeholder="Write your question here."
                  />
                </div>

                <button className="contact-email-submit-bttn" type="submit" value="Send">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info-container-right">
            <img className="contact-map-pic" src={mapPic} />
            <div>
              {" "}
              <span className="location-icon">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c59621" }} />
              </span>
               3331 Chamblee Dunwoody Road, Atlanta, GA, 30341
            </div>
            <div className="contact-us-item">
              <span className="phone-number"> <FontAwesomeIcon icon={faPhone} style={{color: "#c59621",}} /></span>(770) 936-3991
            </div>
            <div className="contact-us-fax">
                <span className="contact-fax"><FontAwesomeIcon icon={faFax} style={{color: "#c59621",}} /></span> (770) 936-3994</div>

            <div className="contact-us-email">
                <span className="contact-email"><FontAwesomeIcon icon={faEnvelope} style={{color: "#c59621",}} /></span> yongmen@yongmenlaw.com</div>
            <div className="business-hours-container">
                <span className="contact-time"><FontAwesomeIcon icon={faClock} style={{color: "#c59621",}} />  Business Hours: </span>
          
              <div className="business-hours-weekdays">
                <div>Monday - Friday</div>
                <div>9:00 am - 6:00pm</div>
              </div>
              <div className="business-hours-weekends">
                <div>Saturday - Sunday</div>
                <div>By Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-about-us-container">
          <div className="footer-about-us-title">About Us</div>
          <div>
            We are a full-service law office with specializations in U.S. immigration and nationality law. We represent
            companies of all sizes, universities, non-profit organizations, as well as individuals undergoing the U.S.
            immigration process.
          </div>
        </div>
        <div className="footer-business-overview-container">
          <div className="footer-business-overview-title">Business Overview</div>
          <NavLink to="/attorney">Attorney</NavLink>
          <NavLink to="/practice">Practice</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="footer-contact-info-container">
          <div className="footer-contact-us-title">Contact Info</div>
          <div className="footer-address">
            <div>Address:</div>
            <div> 3331 Chamblee Dunwoody Road, Atlanta, GA, 30341</div>
          </div>
          <div className="footer-phone-num" ><span className="phone-number"> <FontAwesomeIcon icon={faPhone} style={{color: "#c59621",}} /></span> (770) 936-3991</div>
          <div className="footer-fax-num"><span className="contact-fax"><FontAwesomeIcon icon={faFax} style={{color: "#c59621",}} /></span>(770) 936-3994</div>
          <div className="footer-email"> <span className="contact-footer-email"><FontAwesomeIcon icon={faEnvelope} style={{color: "#c59621",}} /></span> yongmen@yongmenlaw.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
