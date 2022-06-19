import React from "react";
import Titles from "../../elements/Titles/Titles";
import TrendingNowSwiper from "./TrendingNowSwiper";
import "./_trendingNow.scss";
import Button from "../../elements/Buttons/Button";

const TrendingNow = () => {
  return (
    <>
      <div className="c-trending-now" id="#trending-now">
        <div className="c-trending-now__wrapper">
          <div className="c-trending-now__title">
            <Titles title_name="Trending now" />
          </div>
          <div className="c-trending-now__swiper">
            <TrendingNowSwiper />
          </div>
          <div className="c-trending-now__button">
            <Button
              clas_name="e-trending-now__button"
              btnTxt="Explore top sales"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingNow;
