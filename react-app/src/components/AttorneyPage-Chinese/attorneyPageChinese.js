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

const AttorneyPageChinese = () => {


    return (
        <div className="attorney-page-container">
            <div className="attorney-title-container">
                <img className='attorney-title-bg' src={attornyBG} />
                <div className="attorney-title-info-container">
                    <div className="attorney-title-left">
                        <div className="attorney-title-name">门勇</div>
                        <div className="attorney-title-description">职业于亚特兰大的专业移民律师。</div>
                        <div className="attorney-title-description">门勇律师事务所的创始人。</div>
                    </div>
                </div>
            </div>
            <div className="attorney-page-wrapper">
                <div className="attorney-quote-container">
                    <div className="attorney-quote">"您的移民故事,我的专业守护。"</div>
                    <div className="attorney-quote-name">门勇</div>
                </div>
                <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
                <div className="attorney-profile-container">
                    <div className="attorney-profile-wrapper-left">
                        <img src={profilePic} className="attorney-profile-pic" />
                    </div>
                    <div className="attorney-profile-wrapper-right">
                        <div className="attorney-profile-title">门勇</div>
                        <div className="attorney-profile-desc-container">
                            <div className="attorney-profile-p1">
                                门勇律师出生于中国，拥有中国人民大学国际关系专业学士学位。 1993年赴美攻读，后考入埃默
                                里大学的法学院。1999年门律师顺利毕业并获得法学博士学位，此后门律师又通过了佐治亚州律
                                师资格考试并开始从事法律业务。
                            </div>
                            <div className="attorney-profile-p2">
                                数十年来门律师专业从事移民和国籍法的相关工作，专注就业和家庭移民。在他的代理和帮助下
                                ，众多上市公司的总裁、高净值人士、国际连锁餐厅的经理、国际知名的教授和研究人员乃至各
                                行各业的专业人士成功获批绿卡申请。此外门先生还定期出庭并代理当事人接受美国公民及移民
                                服务局 (CIS)、美国移民及海关执法局 (ICE)、移民法院、移民上诉委员会 (BIA) 和行政上诉办公室
                                (AAO) 的案件诉讼和审理。
                            </div>
                            <div className="attorney-profile-p3">
                                <div>门勇律师</div>
                                <div>佐治亚州律师资格</div>
                            </div>
                        </div>
                        <div className="attorney-experience-container">
                            <div className="attorney-education-container">
                                <div className="attorney-education-title">教育:</div>
                                <div>埃默里大学法学院法学博士 (1999)</div>
                                <div>中国人民大学国际关系学学士(1993)</div>
                            </div>
                            <div className="attorney-membership-container">
                                <div className="attorney-membership-title">成员:</div>
                                <div>美国移民律师协会</div>
                                <div>美国律师协会</div>
                                <div>佐治亚州律师协会</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attorney-border-dec">________________________________________________________________________________________________________________________</div>
                <div className="attorney-call-us-container">
                    <div className="attorney-call-us-p1">您可以询求我们的帮助</div>
                    <div className="attorney-call-us-p2">
                        如果您想进一步了解您的法律权益,请主动联系我们,我们将在首次约谈提供免费的法律咨询.
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

export default AttorneyPageChinese;
