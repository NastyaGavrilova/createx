import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import visa from "../../../assets/visa.png";
import masterCard from "../../../assets/master-card.png";
import payPal from "../../../assets/pay-pal.png";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./_generalInfo.scss";
import DeliveryAndReturn from "./DeliveryAndReturn";
import ModalSize from "./ModalSize";

const RatingStar = (props) => {
  const stars = Array.from({ length: 5 }).map((el, index) => (
    <svg
      className={
        "c-general-info__rating-star c-general-info__rating-star-" + index
      }
      key={"c-general-info-ratinghihi" + index}
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
  ));

  return <div className="c-general-info__rating-items">{stars}</div>;
};

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <>
      <div
        сlassName="c-general-info__counter"
        style={{
          maxWidth: "80px",
          width: "100%",
          border: "1px solid #D7DADD",
          borderRadius: "4px",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "150%",
          color: "#424551",
        }}
      >
        {counter}
        <div>
          <div
            сlassName="c-general-info__top"
            onClick={handleClick1}
            style={{
              cursor: "pointer",
              width: "0",
              height: "0",
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderBottom: "8px solid  #1E212C",
              marginBottom: "2px",
            }}
          ></div>
          <div
            сlassName="c-general-info__bottom"
            onClick={handleClick2}
            style={{
              cursor: "pointer",
              width: "0",
              height: "0",
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "8px solid  #1E212C",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

const ButtonCartWish = (props) => {
  // const [clicked, setCLicked] = useState(true);
  // const handleClicked = () => {
  //   setCLicked(!clicked);
  // };

  return (
    <>
      <button className={props.className1} onClick={props.onAdd}>
        {props.svg}
        <span className={props.classname1}>{props.text}</span>
      </button>
    </>
  );
};

const Share = (props) => {
  const links = [
    "https://uk-ua.facebook.com/",
    "https://twitter.com/?lang=ru",
    "https://www.pinterest.ru/ ",
  ];
  const svgs = [<Svg3 />, <Svg4 />, <Svg5 />];
  return (
    <>
      <div className="c-general-info__share">
        <p className="c-general-info__share-title">Share:</p>
        <div className="c-general-info__share-links">
          {Array.from({ length: 3 }).map((el, index) => (
            <a
              className="c-general-info__share-link"
              href={links[`${index}`]}
              key={"c-general-info__share-link" + index}
              rel="noreferrer"
            >
              {svgs[`${index}`]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
const Svg1 = () => {
  return (
    <>
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="c-general-info__btn-svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5944 2.00567C2.52929 2.00077 2.43894 2.00033 2.2695 2.00033H1.16667C0.798477 2.00033 0.5 1.70185 0.5 1.33366C0.5 0.965472 0.798477 0.666995 1.16667 0.666995H2.2695C2.27578 0.666995 2.28207 0.666995 2.28835 0.666994C2.43146 0.666976 2.57315 0.666959 2.69458 0.676108C2.82971 0.686289 2.9867 0.710203 3.14911 0.782649C3.37767 0.884606 3.57293 1.04883 3.71254 1.25655C3.81174 1.40415 3.8622 1.55472 3.89538 1.6861C3.9252 1.80417 3.94946 1.94377 3.97397 2.08476C3.97504 2.09095 3.97612 2.09714 3.9772 2.10334L4.13605 3.01672L12.812 3.27354C13.152 3.28359 13.4458 3.29228 13.6878 3.31893C13.9436 3.34709 14.1971 3.40006 14.4404 3.52964C14.809 3.726 15.1068 4.03282 15.2922 4.40704C15.4145 4.65401 15.46 4.90903 15.4805 5.16551C15.5 5.40816 15.5 5.7021 15.5 6.04223V6.0914C15.5 6.41104 15.5 6.68832 15.4821 6.91825C15.4631 7.16209 15.4213 7.40428 15.3095 7.64159C15.1395 8.0028 14.8653 8.30485 14.5221 8.50888C14.2967 8.64293 14.0597 8.70794 13.8188 8.75033C13.5917 8.79029 13.3157 8.81699 12.9975 8.84777L6.50826 9.47576C6.18213 9.50733 5.89956 9.53469 5.66381 9.53884C5.41403 9.54323 5.1636 9.52383 4.91219 9.43147C4.53514 9.29296 4.20854 9.04413 3.97491 8.71737C3.81913 8.49949 3.73395 8.2632 3.67188 8.02121C3.6133 7.79282 3.56467 7.51313 3.50854 7.19033L2.66358 2.33179C2.63455 2.16486 2.61864 2.07591 2.60265 2.01261C2.60208 2.01036 2.60153 2.00822 2.601 2.0062C2.59891 2.00602 2.59672 2.00585 2.5944 2.00567ZM4.36923 4.35754L4.81796 6.93772C4.8795 7.29156 4.9195 7.51875 4.96341 7.68995C5.00529 7.85324 5.03842 7.91236 5.05953 7.94188C5.1374 8.0508 5.24627 8.13375 5.37195 8.17992C5.40602 8.19243 5.47181 8.20868 5.64036 8.20571C5.81708 8.2026 6.04674 8.18086 6.40421 8.14627L12.8451 7.52296C13.1941 7.48919 13.4178 7.46706 13.5877 7.43717C13.7495 7.40869 13.8099 7.38114 13.8407 7.36283C13.9551 7.29482 14.0465 7.19413 14.1032 7.07373C14.1184 7.0413 14.1401 6.97853 14.1528 6.81474C14.1662 6.64279 14.1667 6.41791 14.1667 6.06733C14.1667 5.695 14.1662 5.45509 14.1515 5.2722C14.1374 5.0972 14.1136 5.03159 14.0974 4.99887C14.0356 4.87412 13.9363 4.77185 13.8135 4.7064C13.7812 4.68923 13.7164 4.66346 13.5418 4.64424C13.3595 4.62416 13.1197 4.61656 12.7475 4.60554L4.36923 4.35754Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.16667 11.667C5.79848 11.667 5.5 11.9655 5.5 12.3337C5.5 12.7018 5.79848 13.0003 6.16667 13.0003C6.53486 13.0003 6.83333 12.7018 6.83333 12.3337C6.83333 11.9655 6.53486 11.667 6.16667 11.667ZM4.16667 12.3337C4.16667 11.2291 5.0621 10.3337 6.16667 10.3337C7.27124 10.3337 8.16667 11.2291 8.16667 12.3337C8.16667 13.4382 7.27124 14.3337 6.16667 14.3337C5.0621 14.3337 4.16667 13.4382 4.16667 12.3337Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 11.667C12.1318 11.667 11.8333 11.9655 11.8333 12.3337C11.8333 12.7018 12.1318 13.0003 12.5 13.0003C12.8682 13.0003 13.1667 12.7018 13.1667 12.3337C13.1667 11.9655 12.8682 11.667 12.5 11.667ZM10.5 12.3337C10.5 11.2291 11.3954 10.3337 12.5 10.3337C13.6046 10.3337 14.5 11.2291 14.5 12.3337C14.5 13.4382 13.6046 14.3337 12.5 14.3337C11.3954 14.3337 10.5 13.4382 10.5 12.3337Z"
          fill="white"
        />
      </svg>
    </>
  );
};

const Svg2 = () => {
  return (
    <>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="#17696A"
        xmlns="http://www.w3.org/2000/svg"
        className="c-general-info__btn-svg-heart"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99925 12.2715C4.93321 10.5252 3.22318 8.78955 2.39626 7.28361C1.54992 5.74228 1.62377 4.4441 2.0934 3.52273C3.05872 1.62892 5.80378 1.02333 7.4763 3.13865L7.99921 3.80001L8.52217 3.13868C10.195 1.02327 12.9402 1.62896 13.9055 3.52273C14.3751 4.44409 14.4489 5.74226 13.6025 7.28359C12.7756 8.78954 11.0654 10.5252 7.99925 12.2715ZM7.99928 1.73726C5.64647 -0.498482 2.17555 0.425546 0.905488 2.91723C0.20846 4.2847 0.198939 6.05212 1.22753 7.92536C2.247 9.78198 4.2796 11.7417 7.67675 13.6194L7.99924 13.7976L8.32173 13.6194C11.719 11.7417 13.7517 9.78199 14.7712 7.92538C15.7999 6.05214 15.7904 4.28472 15.0934 2.91723C13.8233 0.425498 10.3523 -0.498448 7.99928 1.73726Z"
          fill="#17696A"
        />
      </svg>
    </>
  );
};
const Svg3 = () => {
  return (
    <>
      <svg
        width="10"
        height="20"
        viewBox="0 0 10 20"
        fill="#787A80"
        xmlns="http://www.w3.org/2000/svg"
        className="c-general-info__share-link-svg"
      >
        <path
          d="M9.63733 0.836822L7.32294 0.833008C4.72281 0.833008 3.04249 2.60392 3.04249 5.34487V7.42513H0.715477C0.514396 7.42513 0.351562 7.59259 0.351562 7.79915V10.8132C0.351562 11.0198 0.514582 11.187 0.715477 11.187H3.04249V18.7925C3.04249 18.9991 3.20532 19.1663 3.4064 19.1663H6.44249C6.64357 19.1663 6.80641 18.9989 6.80641 18.7925V11.187H9.52723C9.72831 11.187 9.89114 11.0198 9.89114 10.8132L9.89225 7.79915C9.89225 7.69997 9.85382 7.60499 9.78568 7.5348C9.71754 7.46461 9.6247 7.42513 9.52815 7.42513H6.80641V5.66166C6.80641 4.81407 7.00303 4.38379 8.07788 4.38379L9.63696 4.38322C9.83785 4.38322 10.0007 4.21576 10.0007 4.00939V1.21065C10.0007 1.00447 9.83804 0.837204 9.63733 0.836822Z"
          fill="#787A80"
        />
      </svg>
    </>
  );
};
const Svg4 = () => {
  return (
    <>
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="#787A80"
        xmlns="http://www.w3.org/2000/svg"
        className="c-general-info__share-link-svg"
      >
        <path
          d="M17.75 1.8106C17.1059 2.08388 16.4148 2.26922 15.6887 2.35196C16.4301 1.92683 16.9976 1.25252 17.2666 0.451489C16.5711 0.845186 15.8035 1.13106 14.9855 1.28603C14.3305 0.616946 13.3988 0.200195 12.3653 0.200195C10.3827 0.200195 8.77523 1.73942 8.77523 3.63674C8.77523 3.90583 8.80694 4.16865 8.86819 4.41997C5.88501 4.2765 3.23973 2.90797 1.46928 0.828429C1.1598 1.33523 0.983743 1.92576 0.983743 2.55613C0.983743 3.74878 1.618 4.8011 2.58033 5.41677C1.992 5.39793 1.43866 5.24296 0.954233 4.98537V5.0283C0.954233 6.69317 2.19213 8.08265 3.83353 8.39888C3.5328 8.47637 3.21568 8.5193 2.88761 8.5193C2.6558 8.5193 2.43161 8.49732 2.2118 8.45542C2.66889 9.82188 3.99429 10.8156 5.56463 10.8428C4.33657 11.7642 2.7881 12.3119 1.10624 12.3119C0.816463 12.3119 0.53103 12.2951 0.25 12.2647C1.83893 13.2417 3.7253 13.8113 5.75273 13.8113C12.3566 13.8113 15.9665 8.57376 15.9665 4.0315L15.9544 3.5865C16.6597 3.1048 17.2699 2.49959 17.75 1.8106Z"
          fill="#787A80"
        />
      </svg>
    </>
  );
};
const Svg5 = () => {
  return (
    <>
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="#787A80"
        xmlns="http://www.w3.org/2000/svg"
        className="c-general-info__share-link-svg"
      >
        <path
          d="M8.25117 0.833008C3.19014 0.833772 0.5 4.05361 0.5 7.56449C0.5 9.19236 1.4162 11.2236 2.8832 11.8675C3.30168 12.0547 3.24629 11.8263 3.60631 10.4589C3.63478 10.3451 3.62016 10.2465 3.52785 10.1404C1.43082 7.73179 3.1186 2.78019 7.95192 2.78019C14.9469 2.78019 13.6399 12.3916 9.16891 12.3916C8.01654 12.3916 7.15803 11.4932 7.42959 10.3818C7.75883 9.05792 8.40348 7.63477 8.40348 6.68066C8.40348 4.2759 4.7956 4.63264 4.7956 7.81887C4.7956 8.80354 5.14639 9.46813 5.14639 9.46813C5.14639 9.46813 3.98556 14.1249 3.77017 14.9949C3.40553 16.4677 3.8194 18.8519 3.85556 19.0574C3.87787 19.1704 4.00556 19.2063 4.07711 19.1131C4.19173 18.9642 5.59488 16.9765 5.98797 15.5396C6.13106 15.0163 6.71801 12.8927 6.71801 12.8927C7.10495 13.5863 8.2204 14.1669 9.40892 14.1669C12.9445 14.1669 15.5 11.0807 15.5 7.25129C15.4877 3.57999 12.3237 0.833008 8.25117 0.833008V0.833008Z"
          fill="#787A80"
        />
      </svg>
    </>
  );
};

const Payment = () => {
  const paymentImages = [visa, masterCard, payPal];
  return (
    <>
      <div className="c-payment">
        {Array.from({ length: 3 }).map((el, index) => (
          <div
            className={"c-payment__btn c-payment__btn-" + index}
            key={"c-payment__btn" + index}
          >
            <img
              className={"c-payment__img c-payment__img-" + index}
              src={paymentImages[`${index}`]}
              alt="payment"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};
const GeneralInfo = (props) => {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const options = ["XS", "S", "M", "L", "XL", "Plus Size"];

  const imgs = [
    props.Image1,
    props.Image2,
    props.Image3,
    props.Image4,
    props.Image5,
  ];
  const slides = Array.from({ length: 5 }).map((el, index) => (
    <img
      src={imgs[`${index}`]}
      alt="hoodie"
      className="c-general-info__swiper-img"
      key={"hoodie" + index}
    />
  ));

  const slides2 = Array.from({ length: 5 }).map((el, index) => (
    <img
      src={imgs[`${index}`]}
      alt="hoodie"
      className="c-general-info__swiper2-img"
      key={"hoodie222" + index}
    />
  ));

  return (
    <>
      <div className="c-general-info">
        <div className="c-general-info__wrapper">
          <div className="c-general-info__left-part">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="c-general-info__swiper"
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide key={`thumb-slide-${index}`}>
                  {slideContent}
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={20}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="c-general-info__swiper2"
            >
              {slides2.map((slideContent, index) => (
                <SwiperSlide
                  key={`thumb2-slide-${index}`}
                  className="c-genela-info__swiper2-slide"
                >
                  {slideContent}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="c-general-info__right-part">
            <div className="c-general-info__prices-rating">
              <div className="c-general-info__costs">
                <p className="c-general-info__actual-price">{props.price}</p>
                <p className="c-general-info__old-price">{props.oldPrice}</p>
                <div className="c-general-info__sale">-50%</div>
              </div>
              <div className="c-general-info__rating">
                <RatingStar />

                <p className="c-general-info__rating-count">12 reviews</p>
              </div>
            </div>
            <div className="c-general-info__color">
              <p className="c-general-info__color--bold">Color</p>
              <div className="c-general-info__colors">
                <div className="c-general-info__color-switches">
                  {Array.from({ length: 3 }).map((el, index) => (
                    <div
                      className={
                        toggleState === index
                          ? "c-general-info__active-switch"
                          : "c-general-info__hide-switch "
                      }
                      onClick={() => toggleTab(index)}
                      key={"c-general-info__active-switchnhkbk" + index}
                    >
                      <div
                        className={
                          "c-general-info__color-switch c-general-info__color-switch-" +
                          index
                        }
                      ></div>
                    </div>
                  ))}
                </div>
                <div
                  className={
                    toggleState === 0
                      ? "c-general-info__active-color-text"
                      : "c-general-info__hide-color-text"
                  }
                >
                  <p className="c-general-info__color--normal">{props.color}</p>
                </div>
                <div
                  className={
                    toggleState === 1
                      ? "c-general-info__active-color-text"
                      : "c-general-info__hide-color-text"
                  }
                >
                  <p className="c-general-info__color--normal">Blue</p>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "c-general-info__active-color-text"
                      : "c-general-info__hide-color-text"
                  }
                >
                  <p className="c-general-info__color--normal">Yellow</p>
                </div>
              </div>
            </div>
            <div className="c-general-info__sizes">
              <p className="c-general-info__size--normal">Size</p>
              <div className="c-general-info__size">
                <select
                  defaultValue={value}
                  onChange={handleChange}
                  className="c-general-info__dropdown"
                >
                  <option
                    value="default"
                    disabled
                    hidden
                    className="c-general-info__option"
                  >
                    Please Select
                  </option>
                  {Array.from({ length: 6 }).map((el, index) => (
                    <option
                      value={options[`${index}`]}
                      key={"selected-option" + index}
                      className="c-general-info__option"
                    >
                      {options[`${index}`]}
                    </option>
                  ))}
                </select>
                <div className="c-general-info__size-chart">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="#424551"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-general-info__size-icon"
                  >
                    <path
                      d="M15.2224 8.73925C15.2224 8.73925 15.2224 8.73925 15.2224 8.73925L9.46156 5.13893C9.36112 5.07615 9.24504 5.04285 9.12661 5.04285H8.63205V4.77421C9.61015 4.49806 10.3291 3.59751 10.3291 2.53223C10.3291 1.24796 9.28426 0.203125 8 0.203125C6.7157 0.203125 5.6709 1.24796 5.6709 2.53223C5.6709 2.8813 5.95388 3.16428 6.30295 3.16428C6.65203 3.16428 6.93501 2.8813 6.93501 2.53223C6.93501 1.94499 7.41273 1.46723 8 1.46723C8.58723 1.46723 9.06496 1.94499 9.06496 2.53223C9.06496 3.11946 8.5872 3.59722 8 3.59722C7.65093 3.59722 7.36795 3.8802 7.36795 4.22927V5.04285H6.87339C6.75496 5.04285 6.63888 5.07615 6.53844 5.13893L0.777607 8.73925C0.290709 9.04361 0 9.56807 0 10.1423C0 11.0546 0.742212 11.7968 1.6545 11.7968H14.3455C15.2578 11.7968 16 11.0546 16 10.1423C16 9.56807 15.7093 9.04361 15.2224 8.73925V8.73925ZM14.3455 10.5327H1.6545C1.43924 10.5327 1.26411 10.3576 1.26411 10.1423C1.26411 10.0068 1.3327 9.88302 1.44758 9.81121L7.05463 6.30696H8.94534L14.5524 9.81121C14.6673 9.88302 14.7359 10.0068 14.7359 10.1423C14.7359 10.3576 14.5607 10.5327 14.3455 10.5327V10.5327Z"
                      fill="#424551"
                    />
                  </svg>
                  <div
                    className="c-general-info__size-charts"
                    onClick={() =>
                      setModal({
                        ...modal,
                        modal1: true,
                      })
                    }
                  >
                    Size chart
                  </div>
                </div>
              </div>
            </div>
            <div className="c-general-info__add-to-bascket">
              <Counter />

              <ButtonCartWish
                svg={<Svg1 />}
                text={"Add to cart"}
                className1="c-general-info__btn"
                className2="c-general-info__clicked-btn"
                classname1="c-general-info__btn-text"
                classname2="c-general-info__btn-text-clicked"
                onAdd={props.onAdd}
              />
              <ButtonCartWish
                svg={<Svg2 />}
                text={"Favourite"}
                className1="c-general-info__btn-wish"
                className2="c-general-info__clicked-btn-wish"
                classname1="c-general-info__btn-wish-text"
                classname2="c-general-info__btn-wish-text-clicked"
              />
            </div>
            <DeliveryAndReturn />
            <Share />
            <Payment />
          </div>
        </div>
      </div>
      <ModalSize
        isOpened={modal.modal1}
        onModalClose={() => setModal({ ...modal, modal1: false })}
      />
    </>
  );
};
export default GeneralInfo;
