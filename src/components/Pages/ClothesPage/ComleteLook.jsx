import React from "react";

import look from "../../../assets/look.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./_completeLook.scss";

const CompleteLook = () => {
  const lookNavigationPrevRef = React.useRef(null);
  const lookNavigationNextRef = React.useRef(null);

  const stars = Array.from({ length: 5 }).map((el, index) => (
    <>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="#B3B7BC"
        xmlns="http://www.w3.org/2000/svg"
        className={"c-complete-look__star c-complete-look__star-" + index}
        key={"c-complete-look__star c-complete-look__star-" + index}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.93074 1.28395C6.33601 0.349362 7.66139 0.349361 8.06665 1.28395L9.29259 4.11107L12.3602 4.40338C13.3743 4.50001 13.7838 5.76052 13.0202 6.43476L10.7103 8.47433L11.3802 11.4821C11.6017 12.4764 10.5295 13.2555 9.65225 12.7376L6.9987 11.171L4.34515 12.7376C3.46794 13.2555 2.39569 12.4764 2.61716 11.4821L3.2871 8.47433L0.977173 6.43476C0.213564 5.76052 0.623127 4.50001 1.63721 4.40338L4.7048 4.11108L5.93074 1.28395ZM8.22464 4.57418L6.9987 1.74705L5.77276 4.57418C5.60409 4.96315 5.23727 5.22965 4.81522 5.26987L1.74763 5.56218L4.05755 7.60175C4.37536 7.88236 4.51547 8.31357 4.4233 8.7274L3.75336 11.7352L6.40691 10.1686C6.772 9.95304 7.2254 9.95304 7.59049 10.1686L10.244 11.7352L9.5741 8.7274C9.48193 8.31357 9.62204 7.88236 9.93985 7.60175L12.2498 5.56218L9.18217 5.26987C8.76012 5.22965 8.39331 4.96315 8.22464 4.57418Z"
          fill="#B3B7BC"
        />
      </svg>
    </>
  ));

  const productName = [
    "Denim shorts",
    "Modal-brand tranchcoat",
    "Leather-sandals",
    "Chrono watch with blue...",
  ];
  const actualPrice = ["$20.00", "$45.20", "$48.00", "$120.60"];

  const slides = Array.from({ length: 4 }).map((el, index) => (
    <div
      className="c-complete-look-slide"
      key={"c-complete-look-slide" + index}
    >
      <div
        className={
          "c-complete-look-slide__wrapper c-complete-look-slide__wrapper-" +
          index
        }
      >
        <div
          className={
            "c-complete-look-slide__sale-rate c-complete-look-slide__sale-rate-" +
            index
          }
        >
          <div
            className={
              "c-complete-look-slide__sale c-complete-look-slide__sale-" + index
            }
          >
            -20%
          </div>
          <div
            className={
              "c-complete-look-slide__rate c-complete-look-slide__rate-" + index
            }
          >
            {stars}
          </div>
        </div>
        <div className="c-complete-look-slide__wish">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="#787A80"
            xmlns="http://www.w3.org/2000/svg"
            className="c-complete-look-slide__wish-heart"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.99925 12.2715C4.93321 10.5252 3.22318 8.78955 2.39626 7.28361C1.54992 5.74228 1.62377 4.4441 2.0934 3.52273C3.05872 1.62892 5.80378 1.02333 7.4763 3.13865L7.99921 3.80001L8.52217 3.13868C10.195 1.02327 12.9402 1.62896 13.9055 3.52273C14.3751 4.44408 14.4489 5.74226 13.6025 7.28359C12.7756 8.78954 11.0654 10.5252 7.99925 12.2715ZM7.99928 1.73726C5.64647 -0.498482 2.17555 0.425546 0.905488 2.91723C0.20846 4.2847 0.198939 6.05212 1.22753 7.92536C2.247 9.78198 4.2796 11.7417 7.67675 13.6194L7.99924 13.7976L8.32173 13.6194C11.719 11.7417 13.7517 9.78199 14.7712 7.92537C15.7999 6.05214 15.7904 4.28472 15.0934 2.91723C13.8233 0.425498 10.3523 -0.498448 7.99928 1.73726Z"
              fill="#787A80"
            />
          </svg>
        </div>
      </div>
      <div className="c-complete-look-slide__descr">
        <p className="c-complete-look-slide__name">{productName[`${index}`]}</p>
        <div
          className={
            "c-complete-look-slide__prices c-complete-look-slide__prices-" +
            index
          }
        >
          <p
            className={
              "c-complete-look-slide__price c-complete-look-slide__price-" +
              index
            }
          >
            {actualPrice[`${index}`]}
          </p>
          <p
            className={
              "c-complete-look-slide__old-price c-complete-look-slide__old-price-" +
              index
            }
          >
            $24.00
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="c-complete-look">
        <h4 className="c-complete-look__title">Complete your look</h4>
        <div className="c-complete-look__wrapper">
          <div className="c-complete-look__right">
            <img className="c-complete-look__img" src={look} alt="tranch"></img>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={30}
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: lookNavigationPrevRef.current,
              nextEl: lookNavigationNextRef.current,
            }}
            loop={true}
            className="c-complete-look__swiper"
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = lookNavigationPrevRef.current;
                swiper.params.navigation.nextEl = lookNavigationNextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
              console.log(swiper);
            }}
            onSlideChange={() => console.log("trending now slide change")}
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={`look-slide-content-${index}`}>
                {slideContent}
              </SwiperSlide>
            ))}
            <div className="c-complete-look__navigation">
              <div
                ref={lookNavigationPrevRef}
                className="c-complete-look__nav-prev "
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="#424551"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-complete-look__left-arrow"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                    fill="#424551"
                  />
                </svg>
              </div>
              <div
                ref={lookNavigationNextRef}
                className="c-complete-look__nav-next "
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="#424551"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-complete-look__right-arrow"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
                    fill="#424551"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CompleteLook;
