import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import star from "../../assets/star.svg";
import wish from "../../assets/wish.svg";
import "./_saleSwiper.scss";

const SaleSwiper = () => {
  const saleNavigationPrevRef = React.useRef(null);
  const saleNavigationNextRef = React.useRef(null);
  const sale = ["-50%", "-50%", "-20%"];
  const productName = [
    "Leather crossbody bag with gold hardware",
    "Skinny push-up jeans",
    "Wide heel suede ankle boots",
  ];
  const price = ["$89.50", "$40.00", "$119.16"];
  const oldPrice = ["$179.00", "$80.00", "$148.95"];
  const stars = [star, star, star, star, star];
  const ratingStarBlock = [];
  for (let i = 0; i < 5; i += 1) {
    ratingStarBlock.push(
      <img
        className="c-sale-swiper-slide__rating-item"
        src={stars[`${i}`]}
        alt="star-rating"
        key={"img-key-" + i}
      ></img>
    );
  }
  const saleSlides = Array.from({ length: 3 }).map((el, index) => (
    <div key={`sale-slide-${index}`} className="c-sale-swiper-slide">
      <div
        className={`c-sale-swiper-slide__wrapper${
          index + 1
        } c-sale-swiper-slide__wrapper`}
      >
        <div className="c-sale-swiper-slide__top">
          <p className="c-sale-swiper-slide__sale-percent">
            {sale[`${index}`]}
          </p>
          <div className="c-sale-swiper-slide__rating">{ratingStarBlock}</div>
        </div>
        <div className="c-sale-swiper-slide__wish-block">
          <div className="c-sale-swiper-slide__wish">
            <img
              className="c-sale-swiper-slide__wish-heart"
              alt="wish-heart"
              src={wish}
            ></img>
          </div>
        </div>
      </div>
      <div className="c-sale-swiper-slide__information">
        <p className="c-sale-swiper-slide__name-product">
          {productName[`${index}`]}
        </p>
        <div className="c-sale-swiper-slide__prices">
          <p className="c-sale-swiper-slide__main-price">{price[`${index}`]}</p>
          <p className="c-sale-swiper-slide__old-price">
            {oldPrice[`${index}`]}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-sale-swiper">
        <div className="c-sale-swiper__wrapper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: saleNavigationPrevRef.current,
              nextEl: saleNavigationNextRef.current,
            }}
            loop={true}
            breakpoints={{
              300: {
                width: 200,
                slidesPerView: 1,
              },
              400: {
                width: 300,
                slidesPerView: 1,
              },
              600: {
                width: 500,
                slidesPerView: 2,
              },
              800: {
                width: 700,
                slidesPerView: 2,
              },
              1050: {
                width: 1030,
                slidesPerView: 3,
              },
              1200: {
                width: 1130,
                slidesPerView: 3,
              },
              1400: {
                width: 1230,
                slidesPerView: 3,
              },
              1600: {
                width: 1230,
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = saleNavigationPrevRef.current;
                swiper.params.navigation.nextEl = saleNavigationNextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
              console.log(swiper);
            }}
            onSlideChange={() => console.log("trending now slide change")}
          >
            {saleSlides.map((slideContent, index) => (
              <SwiperSlide key={`sale-slide-content-${index}`}>
                {slideContent}
              </SwiperSlide>
            ))}

            <div className="c-sale-swiper__navigation">
              <div
                ref={saleNavigationPrevRef}
                className="c-sale-swiper__nav-prev "
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="#424551"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-sale-swiper__left-arrow"
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
                ref={saleNavigationNextRef}
                className="c-sale-swiper__nav-next "
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="#424551"
                  xmlns="http://www.w3.org/2000/svg"
                  className="c-sale-swiper__right-arrow"
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
export default SaleSwiper;
