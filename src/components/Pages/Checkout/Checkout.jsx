import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./_checkout.scss";

const ShippingForm = (props) => {
  const labelName = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Country",
    "City",
    "Address",
    "ZIP Code",
  ];
  const placeholders = [
    "Your first name",
    "Your last name",
    "Your working email",
    "Your phone number",
    "Your country",
    "Your city",
    "Your address",
    "Your ZIP code",
  ];
  const typeInput = [
    "text",
    "text",
    "email",
    "tel",
    "text",
    "text",
    "text",
    "number",
  ];
  return (
    <>
      <form className="c-checkout__shipping-form">
        {Array.from({ length: 8 }).map((el, index) => (
          <label
            className="c-checkout__shipping-label"
            key={"c-checkout__shipping-label" + index}
          >
            {labelName[`${index}`]}
            <input
              className="c-checkout__shipping-input"
              type={typeInput[`${index}`]}
              placeholder={placeholders[`${index}`]}
            ></input>
          </label>
        ))}
      </form>
    </>
  );
};
const Checkout = (props) => {
  const { checkoutItems, onAdd, onRemove, onDelete, active, setActive, count } =
    props;
  const itemsPrice = checkoutItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.035;
  const shipingPrice = itemsPrice > 2000 ? 0 : 25;
  const totalPrice = itemsPrice + taxPrice + shipingPrice;
  return (
    <>
      <div className="c-checkout">
        <div className="c-checkout__wrapper">
          <div className="c-checkout__info">
            <div className="c-checkout__title">
              <h3 className="c-checkout__title--text">Checkout</h3>
              <Link to="/clothes" className="c-checkout__link">
                Back to shopping
              </Link>
            </div>
            <div className="c-checkout__divider"></div>
            <h4 className="c-checkout__item-review">1. Item review</h4>
            <div
              className={
                checkoutItems.length === 0
                  ? "c-checkout__none"
                  : "c-checkout__items"
              }
            >
              {checkoutItems.map((item) => (
                <>
                  <div
                    className="c-checkout__item"
                    key={"c-checkout__item" + item.id}
                  >
                    <img
                      className="c-checkout__img"
                      alt="item"
                      src={item.image}
                    ></img>
                    <div className={"c-checkout__item-info"}>
                      <p className="c-checkout__item-name">{item.title}</p>
                      <div className="c-checkout__item-color">
                        <p className="c-checkout__color">Color: </p>
                        <p className="c-checkout__color-product">
                          {item.color}
                        </p>
                      </div>
                      <div className="c-checkout__item-size">
                        <p className="c-checkout__size">Size: </p>
                        <p className="c-checkout__size-product">{item.size}</p>
                      </div>
                    </div>
                    <div
                      сlassName="c-checkout__counter"
                      style={{
                        maxWidth: "72px",
                        width: "100%",
                        border: "1px solid #D7DADD",
                        borderRadius: "4px",
                        padding: "10px 12px",
                        display: "flex",
                        justifyContent: "space-between",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "150%",
                        color: "#424551",
                      }}
                    >
                      {item.qty}
                      <div>
                        <div
                          сlassName="c-checkout__add"
                          onClick={() => onAdd(item)}
                          style={{
                            width: "0",
                            height: "0",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderBottom: "8px solid  #1E212C",
                            marginBottom: "2px",
                          }}
                        ></div>
                        <div
                          сlassName="c-checkout__remove"
                          onClick={() => onRemove(item)}
                          style={{
                            width: "0",
                            height: "0",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "8px solid  #1E212C",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="c-checkout__price">
                      <p className="c-checkout__price--text">
                        {"$" + item.qty * item.price}
                      </p>
                    </div>
                    <div
                      className="c-checkout__delete"
                      onClick={() => onDelete(item)}
                    >
                      <span className="c-checkout__remove">Delete </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="c-checkout__divider"></div>
            <div className="c-checkout__shipping">
              <h3 className="c-checkout__item-review">
                2. Shipping & Billing Address
              </h3>
              <ShippingForm />
            </div>
            <div className="c-checkout__divider"></div>
          </div>
          <div className="c-checkout__total">
            <form className="c-checkout__promo-form">
              <label className="c-checkout__promo-label">
                Apply a promo code
                <input
                  className="c-checkout__promo-input"
                  placeholder="Enter promo code"
                />
              </label>
              <button className="c-checkout__promo-btn">Apply</button>
            </form>
            <div className="c-checkout__order-total">
              <h4 className="c-checkout__order">Order totals</h4>
              <div className="c-checkout__order-divider"></div>
              <div className="c-checkout__subtotal">
                <p className="c-checkout__subtotal-text">Subtotal: </p>
                <p className="c-checkout__subtotal-text">
                  ${checkoutItems.length === 0 ? 0 : itemsPrice.toFixed(2)}
                </p>
              </div>
              <div className="c-checkout__shipping-price">
                <p className="c-checkout__shpping-price-text">
                  Shipping price:
                </p>
                <p className="c-checkout__shpping-price-text">
                  ${checkoutItems.length === 0 ? 0 : shipingPrice.toFixed(2)}
                </p>
              </div>
              <div className="c-checkout__discount">
                <p className="c-checkout__discount-text">Discount: </p>
                <p className="c-checkout__discount-text">—</p>
              </div>
              <div className="c-checkout__tax">
                <p className="c-checkout__estimated-tax">
                  Estimated sales tax:{" "}
                </p>
                <p className="c-checkout__estimated-tax">
                  ${checkoutItems.length === 0 ? 0 : taxPrice.toFixed(2)}
                </p>
              </div>
              <div className="c-checkout__order-divider"></div>
              <div className="c-checkout__total-price">
                <p className="c-checkout__total-text">Total: </p>
                <p className="c-checkout__total-text">
                  ${checkoutItems.length === 0 ? 0 : totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <button className="c-checkout__complte-order">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
