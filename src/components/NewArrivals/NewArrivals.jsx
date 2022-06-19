import React from "react";
import NewArrivalsSwiper from "./NewArrivalsSwiper";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./_newArrivals.scss";

const NewArrivals = () => {
  return (
    <>
      <div className="c-new-arrivals" id="#new-arivals">
        <div className="c-new-arrivals__wrapper">
          <div className="c-new-arrivals__title">
            <h3 className="e-new-arrivals__title">New arrivals</h3>
            <p className="e-new-arrivals__description">
              Check out our latest arrivals for the upcoming season
            </p>
            <Link to="/clothes" className="e-new-arrivals__link">
              {" "}
              See the collection here
            </Link>
          </div>
        </div>
        <NewArrivalsSwiper />
      </div>
    </>
  );
};
export default NewArrivals;
