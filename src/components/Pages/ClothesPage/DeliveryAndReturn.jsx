import React from "react";
import { useState } from "react";
import "./_generalInfo.scss";
import "./_deliveryAndReturn.scss";

function Rows(props) {
  return (
    <>
      <div className="c-delivery__row">
        {Array.from({ length: 3 }).map((el, index) => (
          <>
            <p
              className="c-delivery__row--text"
              key={"c-delivery__row" + index}
            >
              {props.rowName[`${index}`]}{" "}
            </p>
          </>
        ))}
      </div>
      <div className="c-delivery__divider"></div>
    </>
  );
}

const Delivery = () => {
  const titles = ["TYPE", "HOW LONG", "HOW MUCH"];

  const row1 = ["Standard delivery", "1-4 business days", "$4.50"];
  const row2 = ["Express delivery", "1 business day", "$10.00"];
  const row3 = ["Pick up in store", "1-3 business days", "Free"];
  return (
    <>
      <div className="c-delivery">
        <p className="c-delivery__text">
          Free standard shipping on orders{" "}
          <span className="c-delivery__text--bold">over $35</span> before tax,
          plus free returns.
        </p>
        <div className="c-delivery__wrapper">
          <div className="c-delivery__titles">
            {Array.from({ length: 3 }).map((el, index) => (
              <p
                className="c-delivery__title"
                key={"c-delivery__title" + index}
              >
                {titles[`${index}`]}
              </p>
            ))}
          </div>
          <div className="c-delivery__divider"></div>
          <Rows rowName={row1} />
          <Rows rowName={row2} />
          <Rows rowName={row3} />
        </div>
      </div>
    </>
  );
};
const Return = () => {
  const listItem = [
    "Free store return",
    "Free returns via USPS Dropoff Service",
  ];
  return (
    <>
      <div className="c-return">
        <p className="c-return__text">
          You have <span className="c-return__text--bold">60 days</span> to
          return the item(s) using any of the following methods:
        </p>
        <ul className="c-return__list">
          {Array.from({ length: 2 }).map((el, index) => (
            <li
              className="c-return__list-item"
              key={"c-return__list-item" + index}
            >
              {listItem[`${index}`]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const DeliveryAndReturn = () => {
  const [toggleState, setToggleState] = useState(true);
  const toggleTab = () => {
    setToggleState(!toggleState);
  };
  const [toggleState1, setToggleState1] = useState(true);
  const toggleTab1 = () => {
    setToggleState1(!toggleState1);
  };

  return (
    <>
      <div className="c-general-info__delivery-return">
        <div className="c-general-info__delivery">
          <p className="c-general-info__delivery--text">Delivery</p>
          <div
            className={
              toggleState === false
                ? "c-general-info__delivery-show"
                : "c-general-info__delivery-hide"
            }
            onClick={() => toggleTab()}
          ></div>
        </div>

        <div
          className={
            toggleState === false
              ? "c-general-info__delivery-content"
              : "c-general-info__delivery-content-hide"
          }
        >
          <Delivery />
        </div>
        <div className="c-general-info__divider"></div>
        <div className="c-general-info__return">
          <p className="c-general-info__return--text">Return</p>
          <div
            className={
              toggleState1 === false
                ? "c-general-info__return-show"
                : "c-general-info__return-hide"
            }
            onClick={() => toggleTab1()}
          ></div>
        </div>
        <div
          className={
            toggleState1 === false
              ? "c-general-info__return-content"
              : "c-general-info__return-content-hide"
          }
        >
          <Return />
        </div>
        <div className="c-general-info__divider"></div>
      </div>
    </>
  );
};
export default DeliveryAndReturn;
