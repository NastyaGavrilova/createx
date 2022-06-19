import React from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./_specialOffers.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SpecialOffers = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiper_text_bold = [
    " Up to 70% Off.",
    "Up to 40% Off.",
    "Up to 20% Off.",
  ];
  const swiper_text = [
    "Shop our latest sale styles",
    "Shop our latest sale styles",
    "Shop our latest sale styles",
  ];
  const banner_slides = Array.from({ length: 3 }).map((el, index) => (
    <div key={`block ${index}`} className="c-special-offers__swiper-slide">
      <p className="c-special-offers__swiper-slide__text c-special-offers__swiper-slide__text-bold">
        {swiper_text_bold[`${index}`]}&nbsp;
        <span className="c-special-offers__swiper-slide__text-normal">
          {swiper_text[`${index}`]}
        </span>
      </p>
    </div>
  ));
  return (
    <>
      <div className="c-special-offers">
        <div className="c-special-offers__wrapper">
          <div className="c-special-offers__carousel">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                // Both prevEl & nextEl are null at render so this does not work
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  // Re-init navigation
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
                console.log(swiper);
              }}
              onSlideChange={() => console.log("special offers slide change")}
              className="c-special-offers__swiper"
            >
              {banner_slides.map((slideContent, index) => (
                <SwiperSlide key={`slide-${index}`}>{slideContent}</SwiperSlide>
              ))}

              <div
                ref={navigationPrevRef}
                className="c-special-offers__nav-prev arrow"
              />
              <div
                ref={navigationNextRef}
                className="c-special-offers__nav-next arrow"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialOffers;
