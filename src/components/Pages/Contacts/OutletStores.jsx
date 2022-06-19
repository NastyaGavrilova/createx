import React from "react";

import address1 from "../../../assets/address1.png";
import address2 from "../../../assets/address2.png";
import address3 from "../../../assets/address3.png";
import address4 from "../../../assets/address4.png";
import tel from "../../../assets/phone.svg";
import email from "../../../assets/poshta.svg";
import clock from "../../../assets/clock.svg";
import addressMarker from "../../../assets/address-marker.svg";
import "./_stores.scss";

const OutletStores = () => {
  const icons = [tel, email, clock, addressMarker];
  const imgAddress = [address1, address2, address3, address4];
  const titleAddress = [
    "New York, USA",
    "Delaware, USA",
    "New Jersey, USA",
    "Maine, USA",
  ];

  const telephones = [
    "(405) 555-0128",
    "(808) 555-0111",
    "(702) 555-0122",
    "(219) 555-0114",
  ];
  const emails = [
    "hello@createx.com",
    "delaware@createx.com",
    "newjersey@createx.com",
    "maine@createx.com",
  ];
  const dateTime = [
    "Daily from 9 am to 9 pm",
    "Daily from 8 am to 9 pm",
    "Daily from 9 am to 8 pm",
    "Daily from 9 am to 9 pm",
  ];
  const addresses = [
    "20 W 29th Street New York, NY 10001",
    "6391 Elgin St. Celina, Delaware 10299",
    "2464 Royal Ln. Mesa, New Jersey 45463",
    "8502 Preston Rd. Inglewood, Maine 98380",
  ];
  const telHref = [
    "tel:(405) 555-0128",
    "tel:(808) 555-0111",
    "tel:(702) 555-0122",
    "tel:(219) 555-0114",
  ];
  const emailHref = [
    "mailto:hello@createx.com",
    "mailto:delaware@createx.com",
    "mailto:newjersey@createx.com",
    "maine@createx.com",
  ];

  const addressHref = [
    "https://www.google.com/maps/place/20+W+29th+St,+New+York,+NY+10001,+%D0%A1%D0%A8%D0%90/@40.7456939,-73.990385,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a604b713f9:0x4970605d21db7138!8m2!3d40.7456899!4d-73.9881963",
    "https://www.google.com/maps/search/6391+Elgin+St.+Celina,+Delaware+10299/@39.1420098,-76.5080356,8z/data=!3m1!4b1",
    "https://www.google.com/maps/search/2464+Royal+Ln.+Mesa,+New+Jersey+45463/@40.0555951,-76.9685122,7z/data=!3m1!4b1",
    "https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+Maine+98380/@39.3023005,-110.6893228,4z/data=!3m1!4b1",
  ];

  const imagesIcons = Array.from({ length: 4 }).map((el, index) => (
    <img
      className="c-stores-card__icon"
      key={"c-stores-card__icon" + Math.random()}
      alt="icon"
      src={icons[`${index}`]}
    ></img>
  ));

  const cards = Array.from({ length: 4 }).map((el, index) => (
    <div className="c-stores-card" key={"c-stores-card" + Math.random()}>
      <div className="c-stores-card__wrapper">
        <div className="c-stores-card__img">
          <img
            className="e-stores-card__img"
            alt="address"
            src={imgAddress[`${index}`]}
          ></img>
        </div>
        <div className="c-stores-card__contacts">
          <div className="c-stores-card__title">
            <p className="e-stores-card__title">{titleAddress[`${index}`]}</p>
          </div>
          <div className="c-stores-card__links">
            <div className="c-stores-card__icons">{imagesIcons}</div>
            <div className="c-stores-card__links-items">
              <a className="c-stores-card__link" href={telHref[`${index}`]}>
                {telephones[`${index}`]}
              </a>
              <a className="c-stores-card__link" href={emailHref[`${index}`]}>
                {emails[`${index}`]}
              </a>
              <p className="c-stores-card__hours-text">
                {dateTime[`${index}`]}
              </p>
              <a
                className="c-stores-card__link c-stores-card__link-address"
                href={addressHref[`${index}`]}
                // ref="no-reffer"
              >
                {addresses[`${index}`]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-stores">
        <div className="c-stores__wrapper">
          <div className="c-stores__cards">{cards}</div>
        </div>
      </div>
    </>
  );
};
export default OutletStores;
