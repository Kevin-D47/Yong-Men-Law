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

const HomepageChinese = () => {
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
              我们是一家提供全方位服务的律师事务所，专注于美国移民和国籍法。我们代表各种规模的公司、大学、非营利组织以及正在进行美国移民程序的个人。
            </div>
            <div className="welcome-message-p2">
              我们的执业重点是商业和专业移民事务，包括各种类型的工作
              签证（E/H/J/L/O/P）、通过劳工证申请永久居民、雇主担保
              第一优先移民签证申请（跨国企业高管、大学教授和
              杰出研究人员）、杰出人才和第二优先国家利益豁免。我们
              在处理各种家庭移民申请和庇护方面也有丰富的经验
              拆除案例。门先生在美国公民及移民服务局（CIS）、
              美国移民和海关执法局 (ICE)、移民法院、移民上诉委员会
              (BIA)、和行政上诉办公室 (AAO)。
            </div>
            <div className="welcome-message-p3">
              在永门律师事务所，我们致力于为雇主和雇员提供最新、最前沿的法律服务。
              最合适的移民策略、高效专业的服务、低廉的服务费用。
              我们以处理复杂的案件、被其他律师拒绝的案件而闻名，
              证据请求 (RFE) 和各种上诉。我们承诺及时回电、处理
              在最短的时间内完成文书工作并跟进每个案件直至完成。不像
              与许多其他移民公司一样，我们免费提供电话和现场咨询。所以
              请随时给我们打电话或给我们发送电子邮件来安排咨询！
            </div>
          </div>
        </div>
        <div className="hompage-services-container">
          <div className="hompage-services-title">我们的服务</div>
          <div className="homepage-service-info-container">
            <img className="atl-cap-pic" src={atlPic} />
            <div className="homepage-services-list">
              <div className="service-info-section">
                <FontAwesomeIcon icon={faFlagUsa} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">美国移民法</div>
                <div className="services-info-inner">
                  <li>Employment Based Applications</li>
                  <li>Family Based Applications</li>
                  <li>Removal Proceedings/Asylum Applications</li>
                  <li>B-1/B-2 Visitors Visa Extensions</li>
                </div>
              </div>
              <div className="service-info-section">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">商务法</div>
                <div className="services-info-inner">
                  <li>Incorporation</li>
                  <li>Business Sales/Lease Negotiation</li>
                  <li>Contract Drafting/Consultation</li>
                </div>
              </div>
              <div className="service-info-section">
                <FontAwesomeIcon icon={faPeopleRoof} style={{ color: "#ffffff", fontSize: "26px" }} />
                <div className="services-info-title">家庭法</div>
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
          <div className="homepage-call-us-p1">您可以询求我们的帮助。</div>
          <div className="homepage-call-us-p2">
            如果您想进一步了解您的法律权益,请主动联系我们,我们将在首次约谈提供免费的法律咨询。
          </div>
          <div className="homepage-call-us-num">(770) 936-3991</div>
          <div className="phone-icon-dec-container">
            <div className="phone-border-dec">__________________________________________________</div>
            <FontAwesomeIcon className='hompage-phone-icon' icon={faPhone} style={{ color: "#c59621" }} />
            <div className="phone-border-dec">__________________________________________________</div>
          </div>
          <Link to="/contact" onClick={scrollToTop} style={{ textDecoration: 'none', }}>
            <div className="contact-bttn">联系我们</div>
          </Link>
        </div>
        <div className="hompage-contact-email-container">
          <div className="contact-email-container-right">
            <div className="hompage-contact-email-message-container">
              <div className="hompage-contact-email-message-title">Don't hesitate to ask</div>
              <div className="hompage-contact-email-message">
                Feel free to ask us anything about you legal situation, send us your questions or comments below.
              </div>
              <div className="hompage-contact-email-message" style={{ color: "white" }}>您可以询求我们的帮助</div>

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

export default HomepageChinese;
