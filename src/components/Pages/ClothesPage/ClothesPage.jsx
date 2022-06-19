import React from "react";
import { useState } from "react";
import GeneralInfo from "./Generalnfo";
import ProductDetails from "./ProductDetails";
// import Reviews from "./Reviews";
import "../../../styles/_index.scss";
import "./_clothesPage.scss";
import CommentBox from "./ReviewsList";
import CompleteLook from "./ComleteLook";
import Subscribe from "../../Subscribe/Subscribe";

const CLothesPage = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="c-product">
        <div className="c-product__wrapper">
          <div className="c-product__name">
            <h2 className="c-product__title">{props.title}</h2>
            <div className="c-product__number">
              <p className="c-product__number--bold">Art No.</p>
              <p className="c-product__number--normal">{props.number}</p>
            </div>
          </div>
          <div className="c-product__tabs">
            <button
              className={
                toggleState === 1
                  ? "c-product__active-tabs"
                  : "c-product__hide-tabs "
              }
              onClick={() => toggleTab(1)}
            >
              <span className="c-product__text-btn">General Info</span>
            </button>
            <button
              className={
                toggleState === 2
                  ? "c-product__active-tabs"
                  : "c-product__hide-tabs "
              }
              onClick={() => toggleTab(2)}
            >
              <span className="c-product__text-btn">Product details</span>
            </button>
            <button
              className={
                toggleState === 3
                  ? "c-product__active-tabs"
                  : "c-product__hide-tabs "
              }
              onClick={() => toggleTab(3)}
            >
              <span className="c-product__text-btn">Reviews</span>
            </button>
          </div>
          <div className="c-product__divider"></div>
          <div className="c-product__content-tabs">
            <div
              className={
                toggleState === 1
                  ? "c-product__active-content"
                  : "c-product__hide-content"
              }
            >
              <GeneralInfo
                price={props.price}
                oldPrice={props.oldPrice}
                Image1={props.Image1}
                Image2={props.Image2}
                Image3={props.Image3}
                Image4={props.Image4}
                Image5={props.Image5}
                color={props.color}
                onAdd={props.onAdd}
              />
            </div>
            <div
              className={
                toggleState === 2
                  ? "c-product__active-content"
                  : "c-product__hide-content"
              }
            >
              <ProductDetails />
            </div>
            <div
              className={
                toggleState === 3
                  ? "c-product__active-content"
                  : "c-product__hide-content"
              }
            >
              <CommentBox />
            </div>
          </div>
          <CompleteLook />
        </div>
        <Subscribe />
      </div>
    </>
  );
};
export default CLothesPage;
