import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import practicesBG from "../../images/practices-bg.jpeg";
import usImmigrationPic from "../../images/us-immigration-pic.jpeg";
import familyPic from "../../images/family-law-pic.jpeg";
import businessPic from "../../images/business-law-pic.jpeg";
import mapPic from "../../images/location-map-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./practicePage.css";

const PracticePage = () => {
  return (
    <div className="practice-page-container">
      <div className="practice-area-title-container">
        <div className="practice-area-title">Practice Areas</div>
        <img className="practices-title-bg" src={practicesBG} />
      </div>
      <div className="practice-page-wrapper">
        <div className="immigration-law-container">
          <div className="us-immigration-title">U.S. Immigration Law</div>
          <img className="us-immigration-pic" src={usImmigrationPic} />
          <div className="us-immigration-content-wrapper">
            <div className="employ-base-app-container">
              <div className="imm-type-title">Employment Based Applications</div>
              <li>H-1B/H-2B/L/E/TN Nonimmigrant Work Visas</li>
              <li>EB-1/EB-2 Immigrant Visa Petition</li>
              <li className="imm-visa-pet-sub">Alien of Extraordinary Ability</li>
              <li className="imm-visa-pet-sub">Multinational Executives</li>
              <li className="imm-visa-pet-sub">Outstanding Researcher/College Professors</li>
              <li>RIR Labor Certification, Special Handling for College Professors</li>
              <li>Green Card Application for Specialty Workers: Cooks, Jewelers, Tailors, etc.</li>
            </div>
            <div className="employ-base-app-container">
              <div className="imm-type-title">Family Based Applications</div>
              <li>Various Family Based Immigrant Visa Petitions</li>
              <li>Citizenship and Naturalization Applications</li>
              <li>Green Card/Temporary Green Card Interviews</li>
              <li>K-1/K-3, V Visas</li>
            </div>
            <div className="employ-base-app-container">
              <div className="imm-type-title">Removal Proceedings/Asylum Applications</div>
              <li>Asylum Applications/Interviews</li>
              <li>Representation before the Immigration Courts</li>
              <li>BIA Appeals, Motions</li>
            </div>
          </div>
        </div>
        <div className="other-practices-container">
          <div className="business-law-container">
            <div className="us-immigration-title">Business Law</div>
            <img src={businessPic} className="business-law-pic" />
            <div className="business-content-wrapper">
              <div>
                <li>Incorporation</li>
                <li>Business Sales/Lease Negotiation</li>
                <li>Contract Drafting/Consultation</li>
              </div>
            </div>
          </div>
          <div className="family-law-container">
            <div className="us-immigration-title">Family Law</div>
            <img src={familyPic} className="family-law-pic" />
            <div className="business-content-wrapper">
              <div>
                <li>Divorce</li>
                <li>Adoption</li>
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

export default PracticePage;
