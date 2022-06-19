import React from "react";
import tel from "../../../assets/phone.svg";
import email from "../../../assets/poshta.svg";
import messenger from "../../../assets/messenger.svg";
import tweet from "../../../assets/tweet.svg";
import "./_contactUs.scss";

const ContuctUs = () => {
  const icons = [tel, email, messenger, tweet];
  const contacts = [
    "(405) 555-0128",
    "Send us an email",
    "Connect on Messenger",
    "Tweet us",
  ];

  const contactsHref = [
    "tel:(405) 555-0128",
    "mailto:hello@createx.com",
    "https://t.me/createxone",
    "https://twitter.com/?lang=ru",
  ];
  const socials = Array.from({ length: 4 }).map((el, index) => (
    <div className="c-our-contacts" key={"c-our-contacts" + Math.random()}>
      <img
        className="c-our-contacts__img"
        alt="contacts"
        src={icons[`${index}`]}
      ></img>
      <a className="c-our-contacts__link" href={contactsHref[`${index}`]}>
        {contacts[`${index}`]}
      </a>
    </div>
  ));
  return (
    <>
      <div className="c-contact-us">
        <div className="c-contact-us__wrapper">
          <div className="c-contact-us__contacts">
            <div className="c-contact-us__paragraph">
              <p className="c-contact-us__text">
                If you have any questions, concerns or comments, we would love
                to hear from you! Submit your query using any of the methods
                below:
              </p>
            </div>
            <div className="c-contact-us__our-contacts">{socials}</div>
          </div>
          <form className="c-contact-us__form">
            <div className="c-contact-us__paragraph">
              <p className="c-contact-us__text">
                Or get in touch with us by completing the below form:
              </p>
            </div>
            <div className="c-contact-us__form-grid">
              <div className="c-contact-us__form-item">
                <label className="c-contact-us__label">Full Name*</label>
                <input
                  className="c-contact-us__input"
                  type="text"
                  placeholder="Your full name"
                />
              </div>
              <div className="c-contact-us__form-item">
                <label className="c-contact-us__label">Email*</label>
                <input
                  className="c-contact-us__input"
                  type="email"
                  placeholder="Your working email"
                />
              </div>
              <div className="c-contact-us__form-item">
                <label className="c-contact-us__label">Phone</label>
                <input
                  className="c-contact-us__input"
                  type="tel"
                  placeholder="Your phone number"
                />
              </div>
              <div className="c-contact-us__form-item">
                <label className="c-contact-us__label">Subject</label>
                <input
                  className="c-contact-us__input"
                  type="text"
                  placeholder="Title your message"
                />
              </div>
              <div className="c-contact-us__form-item-textarea">
                <label className="c-contact-us__label">Message*</label>
                <textarea
                  className="c-contact-us__textarea"
                  type="text"
                  placeholder="Write your message here"
                />
              </div>
            </div>
            <button className="c-contact-us__btn">Send message</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContuctUs;
