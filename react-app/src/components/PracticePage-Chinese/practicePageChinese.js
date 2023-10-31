import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import practicesBG from "../../images/practices-bg.jpeg";
import usImmigrationPic from "../../images/us-immigration-pic.jpeg";
import familyPic from "../../images/family-law-pic.jpeg";
import businessPic from "../../images/business-law-pic.jpeg";
import mapPic from "../../images/location-map-pic.png";
import amerBarPic from "../../images/american-bar-assoc.png";
import gaBarPic from "../../images/georgia-bar-assoc.png";
import amerImmgLawPic from "../../images/american-immigration-lawyers-assoc.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./practicePage.css";


const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const PracticePageChinese = () => {
  return (
    <div className="practice-page-container">
      <div className="practice-area-title-container">
        <div className="practice-area-title">法律实践</div>
        <img className="practices-title-bg" src={practicesBG} />
      </div>
      <div className="practice-page-wrapper">
        <div className="immigration-law-container">
          <div className="us-immigration-title">美国移民法</div>
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
            <div className="us-immigration-title">商务法</div>
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
            <div className="us-immigration-title">家规</div>
            <img src={familyPic} className="family-law-pic" />
            <div className="business-content-wrapper">
              <div>
                <li>Divorce</li>
                <li>Adoption</li>
              </div>
            </div>
          </div>
        </div>
        <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
        <div className="attorney-call-us-container">
          <div className="attorney-call-us-p1">您可以询求我们的帮助。</div>
          <div className="attorney-call-us-p2">
            如果您想进一步了解您的法律权益,请主动联系我们,我们将在首次约谈提供免费的法律咨询。
          </div>
          <NavLink to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none', }}>
            <div className="attorney-contact-bttn">联系我们</div>
          </NavLink>
        </div>
        <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
        <div className="attorney-membership-pics-container">
          <img src={gaBarPic} className="ga-bar-pic" />
          <img src={amerBarPic} className="amer-bar-pic" />
          <img src={amerImmgLawPic} className="amer-imm-law-pic" />
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-about-us-container">
          <div className="footer-about-us-title">关于我们 </div>
          <div>
            我们是一家提供全方位服务的律师事务所，专注于美国移民和国籍法。我们代表各种规模的公司、大学、非营利组织以及正在进行美国移民程序的个人。
          </div>
        </div>
        <div className="footer-business-overview-container">
          <div className="footer-business-overview-title">商业信息</div>
          <NavLink className='footer-nav-link' to="/attorney">律师</NavLink>
          <NavLink className='footer-nav-link' to="/practice">法律实践</NavLink>
          <NavLink className='footer-nav-link' to="/resources">资源</NavLink>
          <NavLink className='footer-nav-link' to="/contact">联系我们</NavLink>
        </div>
        <div className="footer-contact-info-container">
          <div className="footer-contact-us-title">联系方式</div>
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
        <a
          className="google-maps-links"
          href="https://www.google.com/maps/place/Yong+Men+Law+Office/@33.892122,-84.2987488,17z/data=!3m1!4b1!4m6!3m5!1s0x88f509b40b02743b:0x9a04e4cf0d29dd79!8m2!3d33.892122!4d-84.2961739!16s%2Fg%2F1tfstqkh?entry=ttu"
          target="_blank"
        >
          <img className="footer-map-pic" src={mapPic} />
        </a>
      </div>
    </div>
  );
};

export default PracticePageChinese;
