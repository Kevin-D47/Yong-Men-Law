import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

import contactBG from "../../images/contact-bg.png";
import mapPic from "../../images/location-map-pic.png";
import contactMapPic from "../../images/contact-map-pic.png";
import officePic from "../../images/office-pic.png";
import amerBarPic from "../../images/american-bar-assoc.png";
import gaBarPic from "../../images/georgia-bar-assoc.png";
import amerImmgLawPic from "../../images/american-immigration-lawyers-assoc.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
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

const ContactPageChinese = () => {
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
        <div className="contact-title">联系我们</div>
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
              <div className="contact-form-req-mes"> <div style={{ color: "red" }}> * </div> - Required field</div>
              <div className="contact-page-form-wrapper">
                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">客户名称:<div style={{ color: "red" }}>*</div></label>
                  <input className="contact-form-input-field"
                    type="text"
                    name="client_name"
                    placeholder="全名"
                    required
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">公司名称:</label>
                  <input
                    className="contact-form-input-field"
                    type="text"
                    name="company_name"
                    placeholder="公司名称"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">电子邮件:<div style={{ color: "red" }}>*</div></label>
                  <input
                    className="contact-form-input-field"
                    type="email"
                    name="client_email"
                    placeholder="电子邮件"
                    required
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">电话号码:<div style={{ color: "red" }}>*</div></label>
                  <input
                    className="contact-form-input-field"
                    type="number"
                    name="client_phone"
                    placeholder="电话号码"
                    required
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">传真号:</label>
                  <input
                    className="contact-form-input-field"
                    type="number"
                    name="client_fax"
                    placeholder="传真号"
                  />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">URL:</label>
                  <input className="contact-form-input-field" type="text" name="client_url" placeholder="URL" />
                </div>

                <div className="contact-form-input-container">
                  <label className="contact-form-input-title">问题:<div style={{ color: "red" }}>*</div></label>
                  <select className="contact-form-input-field-select" name="question_type" required>
                    <option selected disabled value="">
                      您有什么疑问？
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
                    placeholder="在这里写下您的问题"
                    required
                  />
                </div>
                <div className="contact-form-button-container">
                  <button className="contact-email-submit-bttn" type="submit" value="Send">
                    提交
                  </button>
                </div>


              </div>
            </form>
          </div>
          <div className="contact-info-container-right">
            <img className="office-pic" src={officePic} />
            <div>
              {" "}
              <span className="location-icon">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#c59621" }} />
              </span>
              3331 Chamblee Dunwoody Road, Atlanta, GA, 30341
            </div>
            <div className="contact-us-item">
              <span className="phone-number"> <FontAwesomeIcon icon={faPhone} style={{ color: "#c59621", }} /></span>(770) 936-3991
            </div>
            <div className="contact-us-fax">
              <span className="contact-fax"><FontAwesomeIcon icon={faFax} style={{ color: "#c59621", }} /></span> (770) 936-3994</div>

            <div className="contact-us-email">
              <span className="contact-email"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59621", }} /></span> yongmen@yongmenlaw.com</div>
            <div className="business-hours-container">
              <span className="contact-time"><FontAwesomeIcon icon={faClock} style={{ color: "#c59621", }} />  营业时间: </span>

              <div className="business-hours-weekdays">
                <div>周一 - 星期五</div>
                <div>9:00 am - 6:00pm</div>
              </div>
              <div className="business-hours-weekends">
                <div>周六 - 星期日</div>
                <div>预约</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map-container">
        <a
          className="google-maps-links"
          href="https://www.google.com/maps/place/Yong+Men+Law+Office/@33.892122,-84.2987488,17z/data=!3m1!4b1!4m6!3m5!1s0x88f509b40b02743b:0x9a04e4cf0d29dd79!8m2!3d33.892122!4d-84.2961739!16s%2Fg%2F1tfstqkh?entry=ttu"
          target="_blank"
        >
          单击此处查看 Google 地图上的路线
        </a>

        <img className="contact-map-pic" src={contactMapPic} />
      </div>

      <div className="contact-membership-pics-container">
        <img src={gaBarPic} className="ga-bar-pic" />
        <img src={amerBarPic} className="amer-bar-pic" />
        <img src={amerImmgLawPic} className="amer-imm-law-pic" />
      </div>

      <div className="footer-container">
        <div className="footer-about-us-container">
          <div className="footer-about-us-title">关于我们</div>
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
          <div className="footer-phone-num" ><span className="phone-number"> <FontAwesomeIcon icon={faPhone} style={{ color: "#c59621", }} /></span> (770) 936-3991</div>
          <div className="footer-fax-num"><span className="contact-fax"><FontAwesomeIcon icon={faFax} style={{ color: "#c59621", }} /></span>(770) 936-3994</div>
          <div className="footer-email"> <span className="contact-footer-email"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#c59621", }} /></span> yongmen@yongmenlaw.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageChinese;
