import React from "react";
import { useState } from "react";
import Subscribe from "../../Subscribe/Subscribe";
import ContuctUs from "./ContuctUs";
import Faq from "./Faq";
import OutletStores from "./OutletStores";
import "./_contacts.scss";

const Contacts = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="c-contacts">
        <div className="c-contacts__wrapper">
          <div className="c-contacts__container">
            <div className="c-contacts__block-tabs">
              <button
                className={
                  toggleState === 1
                    ? "c-contacts__active-tabs"
                    : "c-contacts__tabs "
                }
                onClick={() => toggleTab(1)}
              >
                Contact Us
              </button>
              <button
                className={
                  toggleState === 2
                    ? "c-contacts__active-tabs"
                    : "c-contacts__tabs "
                }
                onClick={() => toggleTab(2)}
              >
                Outlet Stores
              </button>
              <button
                className={
                  toggleState === 3
                    ? "c-contacts__active-tabs"
                    : "c-contacts__tabs "
                }
                onClick={() => toggleTab(3)}
              >
                FAQ
              </button>
            </div>
            <div className="c-contacts__content-tabs">
              <div
                className={
                  toggleState === 1
                    ? "c-contacts__active-content"
                    : "c-contacts__content"
                }
              >
                <ContuctUs />
              </div>
              <div
                className={
                  toggleState === 2
                    ? "c-contacts__active-content"
                    : "c-contacts__content"
                }
              >
                <OutletStores />
              </div>
              <div
                className={
                  toggleState === 3
                    ? "c-contacts__active-content"
                    : "c-contacts__content"
                }
              >
                <Faq />
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  );
};
export default Contacts;
