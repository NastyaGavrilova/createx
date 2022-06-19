import React from "react";
import "./_shopingCart.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const ShoppingCart = (props) => {
  const { cartItems, onAdd, onRemove, onDelete, active, setActive, count } =
    props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <div className={active ? "c-basket active" : "c-basket "}>
        <div className="c-blur"></div>
        <div className="c-basket__wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="c-basket__top">
            <h3 className="c-basket__title">Your cart ({count ? count : 0})</h3>
            <div className="c-basket__close" onClick={() => setActive(false)}>
              ✕
            </div>
          </div>
          <hr className="c-basket__divider"></hr>
          <div>
            {cartItems.length === 0 && (
              <div className="c-basket__empty">Cart is empty</div>
            )}
          </div>
          {cartItems.map((item) => (
            <>
              <div
                className="c-basket__product"
                key={"c-basket__product-" + item.id}
              >
                <img
                  className="c-basket__product-image"
                  src={item.image}
                  alt="product"
                ></img>
                <div className="c-basket__product-info">
                  <p className="c-basket__product-name">{item.title}</p>
                  <div className="c-basket__product-color">
                    <p className="c-basket__color">Color: </p>
                    <p className="c-basket__color-item">{item.color}</p>
                  </div>
                  <div className="c-basket__product-size">
                    <p className="c-basket__size">Size: </p>
                    <p className="c-basket__size-item">{item.size}</p>
                  </div>
                  <div className="c-basket__prices">
                    <div
                      сlassName="c-basket__counter"
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
                        marginRight: "12px",
                      }}
                    >
                      {item.qty}
                      <div>
                        <div
                          сlassName="c-basket__add"
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
                          сlassName="c-basket__remove"
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
                    <p className="c-basket__price">
                      {"$" + item.qty * item.price}
                    </p>
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#787A80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-basket__delete"
                  onClick={() => onDelete(item)}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.83203 2.49967C4.83203 1.5792 5.57822 0.833008 6.4987 0.833008H9.4987C10.4192 0.833008 11.1654 1.5792 11.1654 2.49967V2.83301H14.4987C14.8669 2.83301 15.1654 3.13148 15.1654 3.49967C15.1654 3.86786 14.8669 4.16634 14.4987 4.16634H13.6654V12.4997C13.6654 13.9724 12.4715 15.1663 10.9987 15.1663H4.9987C3.52594 15.1663 2.33203 13.9724 2.33203 12.4997V4.16634H1.4987C1.13051 4.16634 0.832031 3.86786 0.832031 3.49967C0.832031 3.13148 1.13051 2.83301 1.4987 2.83301H4.83203V2.49967ZM6.16536 2.83301H9.83203V2.49967C9.83203 2.31558 9.68279 2.16634 9.4987 2.16634H6.4987C6.3146 2.16634 6.16536 2.31558 6.16536 2.49967V2.83301ZM3.66536 4.16634V12.4997C3.66536 13.2361 4.26232 13.833 4.9987 13.833H10.9987C11.7351 13.833 12.332 13.2361 12.332 12.4997V4.16634H3.66536ZM7.9987 5.33301C8.36689 5.33301 8.66536 5.63148 8.66536 5.99967L8.66537 11.9997C8.66537 12.3679 8.36689 12.6663 7.9987 12.6663C7.63051 12.6663 7.33203 12.3679 7.33203 11.9997L7.33203 5.99967C7.33203 5.63148 7.63051 5.33301 7.9987 5.33301Z"
                    fill="#787A80"
                  />
                </svg>
              </div>
              <hr className="c-bascket__divider"></hr>
            </>
          ))}
          <div className="c-basket__bottom">
            {cartItems.length !== 0 && (
              <>
                <div className="c-basket__product-total">
                  <p className="c-basket__total">Subtotal:</p>
                  <p className="c-basket__total-item">
                    ${itemsPrice.toFixed(2)}
                  </p>
                </div>
              </>
            )}
            <div className="c-basket__btn">
              <div className="c-basket__checkout">
                <Link to={"/checkout"} className="c-basket__checkout-link">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
