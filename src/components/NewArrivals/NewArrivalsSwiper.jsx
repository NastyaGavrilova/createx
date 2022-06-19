import React from "react";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

import Swiper from "react-id-swiper";
import star from "../../assets/star.svg";
import wishHeart from "../../assets/wish.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./_newArrivalsSwiper.scss";
const NewArrivalsSwiper = () => {
  const params_pagination = {
    pagination: {
      el: ".c-arrivals-swiper__pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  };
  const productName = [
    "Black and white sport cap",
    "Metal bridge sunglasses",
    "Green baby romper",
    "Mid-rise slim cropped fit jeans",
    "Red dangle earrings",
    "Baby shoes with laces",
  ];
  const productPrice = [
    "$18.15",
    "$89.95",
    "$20.40",
    "$40.00",
    "$29.95",
    "$30.60",
  ];
  const oldProductPrice = "$40.80";
  const saleBadge = "-50%";
  const ratingStar = [star, star, star, star, star];
  const ratingStarBlock = [];
  for (let i = 0; i < 5; i += 1) {
    ratingStarBlock.push(
      <img
        className="c-arrivals-slide__rating-item"
        src={ratingStar[`${i}`]}
        alt="star-rating"
        key={i}
      ></img>
    );
  }
  const newArrivalsSlides = Array.from({ length: 6 }).map((el, index) => (
    <div key={`new-arrivals-${index}`} className="c-arrivals-slide">
      <div
        className={`c-arrivals-slide__wrapper-${
          index + 1
        } c-arrivals-slide__wrapper`}
      >
        <div className="c-arrivals-slide__top-block">
          <p className="c-arrivals-slide__sale">{saleBadge}</p>
          <div className="c-arrivals-slide__rating">{ratingStarBlock}</div>
        </div>
        <div className="c-arrivals-slide__bottom-block">
          <div className="c-arrivals-slide__wish">
            <img
              className="c-arrivals-slide__wish-heart"
              alt="wish-heart"
              src={wishHeart}
            ></img>
          </div>
        </div>
      </div>
      <div className="c-arrivals-slide__description">
        <p className="e-arrivals-slide__descr">{productName[`${index}`]}</p>
        <div className="c-arrivals-slide__prices">
          <p className="c-arrivals-slide__price">{productPrice[`${index}`]}</p>
          <p className="c-arrivals-slide__old-price">{oldProductPrice}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-arrivals-swiper">
        <Swiper
          {...params_pagination}
          modules={[Pagination]}
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            320: {
              width: 420,
              slidesPerView: 1,
            },
            420: {
              width: 600,
              slidesPerView: 2,
            },
            600: {
              width: 900,
              slidesPerView: 3,
            },
            900: {
              width: 1200,
              slidesPerView: 4,
            },
            1200: {
              width: 1400,
              slidesPerView: 5,
            },
            1400: {
              width: 1860,
              slidesPerView: 6,
            },
            // 430: {
            //   width: 600,
            //   // width: 640,
            //   slidesPerView: 2,
            // },
            // 600: {
            //   width: 800,
            //   slidesPerView: 3,
            // },
            // 900: {
            //   width: 1000,
            //   slidesPerView: 4,
            // },
            // // when window width is >= 768px
            // 1600: {
            //   width: 1400,
            //   slidesPerView: 5,
            // },
            // 1800: {
            //   width: 1860,
            //   slidesPerView: 6,
            // },
          }}
          onSwiper={(arrivalsSwiper) => {
            console.log(arrivalsSwiper);
          }}
          onSlideChange={() => console.log("new arrivals slide change")}
        >
          {newArrivalsSlides.map((slideContent, index) => (
            <SwiperSlide
              key={`arrivals-slide-${index}`}
              className="c-arrivals-slide"
            >
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default NewArrivalsSwiper;
