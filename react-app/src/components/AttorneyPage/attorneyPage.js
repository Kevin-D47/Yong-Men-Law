import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import profilePic from "../../images/yong-men-profile-pic.png";
import amerBarPic from "../../images/american-bar-assoc.png";
import gaBarPic from "../../images/georgia-bar-assoc.png";
import amerImmgLawPic from "../../images/american-immigration-lawyers-assoc.png";
import mapPic from "../../images/location-map-pic.png";
import attornyBG from '../../images/lawyer-office-bg.jpeg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./attorneyPage.css";


const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const AttorneyPage = () => {


    return (
        <div className="attorney-page-container">
            <div className="attorney-title-container">
                <img className='attorney-title-bg' src={attornyBG} />
                <div className="attorney-title-info-container">
                    <div className="attorney-title-left">
                        <div className="attorney-title-name">Yong Men</div>
                        <div className="attorney-title-description">Atlanta Lawyer with specialization in immigration law.</div>
                        <div className="attorney-title-description">The founder and attorney at Law Office of Yong Men</div>
                    </div>
                </div>
            </div>
            <div className="attorney-page-wrapper">
                <div className="attorney-quote-container">
                    <div className="attorney-quote">"Your Immigration Story, My Legal Expertise."</div>
                    <div className="attorney-quote-name">Yong Men</div>
                </div>
                <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
                <div className="attorney-profile-container">
                    <div className="attorney-profile-wrapper-left">
                        <img src={profilePic} className="attorney-profile-pic" />
                    </div>
                    <div className="attorney-profile-wrapper-right">
                        <div className="attorney-profile-title">Yong Men</div>
                        <div className="attorney-profile-desc-container">
                            <div className="attorney-profile-p1">
                                Born in Changchun, China, Mr. Men obtained his Bachelor’s degree in International
                                Relations from Renmin University, China. He came to the United States in 1993 to
                                pursue a Ph.D. degree in International Relations. In 1999, after graduating from Emory
                                Law School with a Juris Doctor degree, Mr. Men passed the Georgia Bar and started an
                                immigration practice.
                            </div>
                            <div className="attorney-profile-p2">
                                Mr. Men practices exclusively in the area of immigration and nationality law with
                                emphasis in employment and family based immigration. He represents numerous
                                publicly-traded corporations, technology companies, national-chain restaurants,
                                outstanding professors and researchers and persons in a wide variety of occupations. Mr.
                                Men regularly appears before the U.S. Citizenship and Immigration Service (USCIS), the
                                U.S. Immigration and Customs Enforcement (ICE), the Immigration Courts, the Board of
                                Immigration Appeals (BIA), and the Administrative Appeal Office (AAO).
                            </div>
                            <div className="attorney-profile-p3">
                                <div>Yong Men, Esq.</div>
                                <div>Admitted to Georgia Bar</div>
                            </div>
                        </div>
                        <div className="attorney-experience-container">
                            <div className="attorney-education-container">
                                <div className="attorney-education-title">Education:</div>
                                <div>J.D., Emory University School of Law (1999)</div>
                                <div>B.A. Renmin University, Beijing, China (1993)</div>
                            </div>
                            <div className="attorney-membership-container">
                                <div className="attorney-membership-title">Professional Membership:</div>
                                <div>Georgia Bar Association</div>
                                <div>American Bar Association</div>
                                <div>American Immigration Lawyers Association (AILA)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
                <div className="attorney-call-us-container">
                    <div className="attorney-call-us-p1">I'm are here to help.</div>
                    <div className="attorney-call-us-p2">
                        To learn more about your potential legal options, have questions or to schedule a consultations contact us
                        today – it’s free and strictly confidential.
                    </div>
                    <NavLink to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none', }}>
                        <div className="attorney-contact-bttn">Contact Us</div>
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

export default AttorneyPage;
