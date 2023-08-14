import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import resourcesBG from "../../images/resources-bg.jpeg";
import mapPic from "../../images/location-map-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./resourcesPage.css";

const ResourcesPage = () => {
  return (
    <div className="resources-page-container">
      <div className="resources-title-container">
        <div className="contact-title">Resources</div>
        <img className="contact-title-bg" src={resourcesBG} />
      </div>
      <div className="resources-page-wrapper">
        <div className="resources-links-container">
          <a
            className="resources-links"
            href="https://travel.state.gov/content/travel/en/us-visas.html"
            target="_blank"
          >
            Visa Services
          </a>

          <a className="resources-links" href="https://www.uscis.gov/citizenship" target="_blank">
            USCIS Citizenship Resource Center
          </a>

          <a className="resources-links" href="https://www.uscis.gov/green-card" target="_blank">
            USCIS Green Card
          </a>

          <a className="resources-links" href="https://www.uscis.gov/forms/forms" target="_blank">
            USCIS Forms
          </a>

          <a className="resources-links" href="https://egov.uscis.gov/" target="_blank">
            Check USCIS Online Case Status
          </a>

          <a className="resources-links" href="https://egov.uscis.gov/processing-times/" target="_blank">
            Check USCIS Online Case Processing Times
          </a>

          <a className="resources-links" href="https://www.dol.gov/agencies/eta/foreign-labor" target="_blank">
            Foreign Labor Certification
          </a>

          <a className="resources-links" href="https://www.aila.org/" target="_blank">
            American Immigration Lawyers Association (AILA)
          </a>
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

export default ResourcesPage;
