import React from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import Swiper from "react-id-swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner from "../../assets/banner.png";
import "./_banner.scss";
const Banner = () => {
  const params_pagination = {
    pagination: {
      el: ".c-banner-swiper__pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return (
          '<div class="' +
          className +
          '">' +
          "<span class = c-pagination__counter>" +
          "0" +
          (index + 1) +
          "</span>" +
          "</div>"
        );
      },
    },
    navigation: {
      nextEl: ".c-banner-swiper-nav-next",
      prevEl: ".c-banner-swiper-nav-prev",
    },
  };
  const bannerWear = [
    "Menswear 2020",
    "Womenswear 2020",
    "Girlswear 2020",
    "Boyswear 2020",
  ];
  const bannerButtonSpan = [
    "Shop the menswear",
    "Shop the womenswear",
    "Shop the girlswear",
    "Shop the boyswear",
  ];
  const bannerList = [banner, banner, banner, banner];
  const bannerSlides = Array.from({ length: 4 }).map((el, index) => (
    <div key={`slide-block-${index}`} className="c-banner-swiper__slide">
      <img
        className="c-banner-swiper__slide--img"
        src={bannerList[`${index}`]}
        alt="banner-img"
      ></img>
      <div className="c-banner-swiper__slide__wrapper">
        <h4 className="c-banner-swiper__slide__sub-title">New collection</h4>
        <h2 className="c-banner-swiper__slide__title">
          {bannerWear[`${index}`]}
        </h2>
        <div className="c-banner-swiper__slide__buttons">
          <button className="c-banner-swiper__slide__sale-button">
            <span className="e-sale-button">Shop sale</span>
          </button>
          <button className="c-banner-swiper__slide__collection-button">
            <span className="e-collection-button">
              {bannerButtonSpan[`${index}`]}
            </span>
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-banner">
        <div className="c-banner__wrapper">
          <Swiper
            {...params_pagination}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            // spaceBetween={30}
            onSwiper={(bannerSwiper) => {
              console.log(bannerSwiper);
            }}
            onSlideChange={() => console.log("slide change")}
            className="c-banner-swiper"
          >
            {bannerSlides.map((slideContent, index) => (
              <SwiperSlide key={`slide-${index}`}>{slideContent}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Banner;
