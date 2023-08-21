import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import emailjs from "@emailjs/browser";

import phoneIcon from "../../images/phone-icon.avif";
import mapPic from "../../images/location-map-pic.png";
import atlPic from "../../images/atlanta-capital.jpeg"
import welcomePic from "../../images/homepage-pic.png"
import amerFlag from "../../images/amer-flag.jpeg"
import amerBarPic from "../../images/american-bar-assoc.png";
import gaBarPic from "../../images/georgia-bar-assoc.png";
import amerImmgLawPic from "../../images/american-immigration-lawyers-assoc.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";


import "./homepage.css";

// TEST 5

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

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const Homepage = () => {
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
    <div className="homepage-container">
      {/* <div className="homepage-title-container">
        <div className="hompage-title">Welcome To Law Office of Yong Men, P.C</div>
      </div> */}
      <div className="hompage-img-wrapper">
        <img className="welcome-img" src={welcomePic} />
      </div>
      <div className="hompage-wrapper">
        <div className="homepage-welcome-container">
          <div className="welcome-message-container">
            <div className="welcome-message-p1">
              We are a full-service law office with specializations in U.S. immigration and nationality law. We
              represent companies of all sizes, universities, non-profit organizations, as well as individuals
              undergoing the U.S. immigration process.
            </div>
            <div className="welcome-message-p2">
              Our practice emphasize business and professional immigration matters, including various types of work
              visas (E/H/J/L/O/P), permanent resident through Labor Certification applications, employer -sponsored
              First Preference immigrant visa petitions (multinational business executives, college professors and
              outstanding researchers), Extraordinary-Ability Aliens and Second Preference National Interest Waivers. We
              also have extensive experience in handling various family based immigration petitions and asylum and
              removal cases. Mr. Men represents clients before the U.S. Citizenship and Immigration Service (CIS), the
              U.S. Immigration and Customs Enforcement (ICE), the Immigration Courts, the Board of Immigration Appeals
              (BIA), and the Administrative Appeal Office (AAO).
            </div>
            <div className="welcome-message-p3">
              At Law Offices of Yong Men, P.C., we strive to provide employers and employees with the latest and the
              most appropriate immigration strategies, highly efficient and professional services and low service fees.
              We are well-known for handling complicated cases, cases that have been turned away by other lawyers,
              Requests for Evidence (RFEs) and various appeals. We promise to return phone calls promptly, process
              paperwork within the shortest period of time and follow through every case until its completion. Unlike
              many other immigration firms, we provide over-the-phone and in-person consultations free of charge. So
              don't hesitate to give us a call or send us an e-mail to schedule a consultation!
            </div>
          </div>
        </div>
        <div className="hompage-services-container">
          <div className="hompage-services-title">Our Services</div>
          <div className="homepage-service-info-container">
            <img className="atl-cap-pic" src={atlPic} />
            <div className="homepage-services-list">
              <div className="service-info-section">
                <FontAwesomeIcon icon={faFlagUsa} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">U.S. Immigration Law</div>
                <div className="services-info-inner">
                  <li>Employment Based Applications</li>
                  <li>Family Based Applications</li>
                  <li>Removal Proceedings/Asylum Applications</li>
                  <li>B-1/B-2 Visitors Visa Extensions</li>
                </div>
              </div>
              <div className="service-info-section">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">Business Law</div>
                <div className="services-info-inner">
                  <li>Incorporation</li>
                  <li>Business Sales/Lease Negotiation</li>
                  <li>Contract Drafting/Consultation</li>
                </div>
              </div>
              <div className="service-info-section">
                <FontAwesomeIcon icon={faPeopleRoof} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">Family Law</div>
                <div className="services-info-inner">
                  <li>Divorce</li>
                  <li>Adoption</li>
                </div>
              </div>
              <div className="service-button-section">
                <Link to="/practice" onClick={scrollToTop} style={{ textDecoration: 'none' }}>
                  <div className="view-services-bttn">View All Services</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hompage-call-us-container">
          <div className="homepage-call-us-p1">We are here to help.</div>
          <div className="homepage-call-us-p2">
            To learn more about your potential legal options, have questions or to schedule a consultations contact us
            today – it’s free and strictly confidential.
          </div>
          <div className="homepage-call-us-num">(770) 936-3991</div>
          <div className="phone-icon-dec-container">
            <div className="phone-border-dec">__________________________________________________</div>
            <FontAwesomeIcon className='hompage-phone-icon' icon={faPhone} style={{ color: "#c59621" }} />
            <div className="phone-border-dec">__________________________________________________</div>
          </div>
          <Link to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none', }}>
            <div className="contact-bttn">Contact Us</div>
          </Link>
        </div>
        <div className="hompage-contact-email-container">
          <div className="contact-email-container-right">
            <div className="hompage-contact-email-message-container">
              <div className="hompage-contact-email-message-title">Don't hesitate to ask</div>
              <div className="hompage-contact-email-message">
                Feel free to ask us anything about you legal situation, send us your questions or comments below.
              </div>
              <div className="hompage-contact-email-message" style={{ color: "white" }}>Let us help you!</div>

            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-req-mes"> <div style={{ color: "red" }}> * </div> - Required field</div>
              <div className="contact-email-form-wrapper">
                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Client Name:<div style={{ color: "red" }}>*</div></label>
                  <input
                    className="contact-email-input-field"
                    type="text"
                    name="client_name"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Company Name:</label>
                  <input
                    className="contact-email-input-field"
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                  />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Email:<div style={{ color: "red" }}>*</div></label>
                  <input
                    className="contact-email-input-field"
                    type="email"
                    name="client_email"
                    placeholder="Client Email"
                    required
                  />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Phone:<div style={{ color: "red" }}>*</div></label>
                  <input
                    className="contact-email-input-field"
                    type="number"
                    name="client_phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Fax:</label>
                  <input className="contact-email-input-field" type="number" name="client_fax" placeholder="Fax Number" />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">URL:</label>
                  <input className="contact-email-input-field" type="text" name="client_url" placeholder="URL" />
                </div>

                <div className="contact-email-input-container">
                  <label className="contact-email-input-title">Question:<div style={{ color: "red" }}>*</div></label>
                  <select className="contact-email-input-field-select" name="question_type" required>
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
                    className="contact-email-input-field-question"
                    type="text"
                    name="message"
                    placeholder="Write your question here."
                    required
                  />
                </div>

                <button className="email-submit-bttn" type="submit" value="Send">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <img className="amer-flag-pic" src={amerFlag} />
        </div>
        <div className="homepage-membership-pics-container">
          <img src={gaBarPic} className="ga-bar-pic" />
          <img src={amerBarPic} className="amer-bar-pic" />
          <img src={amerImmgLawPic} className="amer-imm-law-pic" />
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
          <NavLink className='footer-nav-link' to="/attorney">Attorney</NavLink>
          <NavLink className='footer-nav-link' to="/practice">Practice</NavLink>
          <NavLink className='footer-nav-link' to="/resources">Resources</NavLink>
          <NavLink className='footer-nav-link' to="/contact">Contact Us</NavLink>
        </div>
        <div className="footer-contact-info-container">
          <div className="footer-contact-us-title">Contact Info</div>
          <div className="footer-address">
            <div>Address:</div>
            <div> 3331 Chamblee Dunwoody Road, Atlanta, GA, 30341</div>
          </div>
          <div className="footer-phone-num">
            <span className="phone-number">
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{ color: "#c59621" }} />
            </span>{" "}
            (770) 936-3991
          </div>
          <div className="footer-fax-num">
            <span className="contact-fax">
              <FontAwesomeIcon icon={faFax} style={{ color: "#c59621" }} />
            </span>
            (770) 936-3994
          </div>
          <div className="footer-email">
            {" "}
            <span className="contact-footer-email">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59621" }} />
            </span>{" "}
            yongmen@yongmenlaw.com
          </div>
        </div>
        <img className="footer-map-pic" src={mapPic} />
      </div>
    </div>
  );
};

export default Homepage;
