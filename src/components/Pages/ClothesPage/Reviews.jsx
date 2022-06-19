import React from "react";
import { useState } from "react";
import CommentBox from "./ReviewsList";
import "./_reviews.scss";
const RatingStar = (props) => {
  const stars = Array.from({ length: 5 }).map((el, index) => (
    <svg
      className={"c-reviews__rating-star c-reviews__rating-star-" + index}
      key={"c-general-info-ratinghihi" + index}
      width="11"
      height="10"
      viewBox="0 0 14 13"
      fill="#B3B7BC"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.93269 1.28395C6.33796 0.349362 7.66334 0.349361 8.06861 1.28395L9.29455 4.11107L12.3621 4.40338C13.3762 4.50001 13.7858 5.76052 13.0222 6.43476L10.7123 8.47433L11.3822 11.4821C11.6037 12.4764 10.5314 13.2555 9.6542 12.7376L7.00065 11.171L4.3471 12.7376C3.4699 13.2555 2.39764 12.4764 2.61911 11.4821L3.28905 8.47433L0.979126 6.43476C0.215517 5.76052 0.62508 4.50001 1.63916 4.40338L4.70675 4.11108L5.93269 1.28395ZM8.22659 4.57418L7.00065 1.74705L5.77471 4.57418C5.60604 4.96315 5.23923 5.22965 4.81717 5.26987L1.74958 5.56218L4.0595 7.60175C4.37731 7.88236 4.51742 8.31357 4.42525 8.7274L3.75531 11.7352L6.40886 10.1686C6.77395 9.95304 7.22735 9.95304 7.59244 10.1686L10.246 11.7352L9.57605 8.7274C9.48388 8.31357 9.62399 7.88236 9.9418 7.60175L12.2517 5.56218L9.18413 5.26987C8.76207 5.22965 8.39526 4.96315 8.22659 4.57418Z"
        fill="#B3B7BC"
      />
    </svg>
  ));

  return <div className="c-reviews__rating-items">{stars}</div>;
};

const ProgressBar = (props) => {
  return (
    <>
      <div className="c-progressbar">
        <div className="c-progressbar__rate">
          <p className="c-progressbar__rate-count">{props.rate}</p>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="#B3B7BC"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.93269 1.28395C6.33796 0.349362 7.66334 0.349361 8.06861 1.28395L9.29455 4.11107L12.3621 4.40338C13.3762 4.50001 13.7858 5.76052 13.0222 6.43476L10.7123 8.47433L11.3822 11.4821C11.6037 12.4764 10.5314 13.2555 9.6542 12.7376L7.00065 11.171L4.3471 12.7376C3.4699 13.2555 2.39764 12.4764 2.61911 11.4821L3.28905 8.47433L0.979126 6.43476C0.215517 5.76052 0.62508 4.50001 1.63916 4.40338L4.70675 4.11108L5.93269 1.28395ZM8.22659 4.57418L7.00065 1.74705L5.77471 4.57418C5.60604 4.96315 5.23923 5.22965 4.81717 5.26987L1.74958 5.56218L4.0595 7.60175C4.37731 7.88236 4.51742 8.31357 4.42525 8.7274L3.75531 11.7352L6.40886 10.1686C6.77395 9.95304 7.22735 9.95304 7.59244 10.1686L10.246 11.7352L9.57605 8.7274C9.48388 8.31357 9.62399 7.88236 9.9418 7.60175L12.2517 5.56218L9.18413 5.26987C8.76207 5.22965 8.39526 4.96315 8.22659 4.57418Z"
              fill="#B3B7BC"
            />
          </svg>
        </div>
        <div className={props.className}>
          <div className={props.classNameValue}></div>
        </div>
      </div>
    </>
  );
};
const Reviews = () => {
  const counters = ["5", "4", "3", "2", "1"];
  const classNamesValue = [
    "c-progressbar__line-value-0",
    "c-progressbar__line-value-1",
    "c-progressbar__line-value-2",
    "c-progressbar__line-value-3",
    "c-progressbar__line-value-4",
  ];
  return (
    <>
      <div className="c-reviews">
        <div className="c-reviews__wrapper">
          <div className="c-reviews__info">
            <div className="c-reviews__info-left">
              <h3 className="c-reviews__info-title">{" reviews"}</h3>
              <RatingStar />
              <p className="c-reviews__info-descr">
                9 out of 12 (75%) Customers recommended this product
              </p>
            </div>
            <div className="c-reviews__info-right">
              {Array.from({ length: 5 }).map((el, index) => (
                <ProgressBar
                  key={"c-reviews__info-right" + Math.random()}
                  rate={counters[`${index}`]}
                  className={"c-progressbar__line"}
                  classNameValue={classNamesValue[`${index}`]}
                />
              ))}
            </div>
          </div>
          <CommentBox />
        </div>
      </div>
    </>
  );
};
export default Reviews;
