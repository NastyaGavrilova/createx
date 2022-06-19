import React from "react";
import appStore from "../../assets/appStore.svg";
import google from "../../assets/google.svg";
import googlePlay from "../../assets/googlePlay.svg";
import googlePlayIcon from "../../assets/googlePlayIcon.svg";
import "./_mobileApp.scss";
import mobapp from "../../assets/mobapp.png";

const MobileApp = () => {
  return (
    <>
      <div className="c-mob-app">
        <div className="c-mob-app__wrapper">
          <div className="c-mob-app__img">
            <img className="e-mob-app__img" src={mobapp} alt="mob-img"></img>
          </div>
          <div className="c-mob-app__right">
            <div className="c-mob-app__title">
              <h3 className="e-mob-app__title">
                Enjoy mobile shopping with our Createx Store App!
              </h3>
            </div>
            <div className="c-mob-app__links">
              <div className="c-mob-app__link-item-1">
                <a
                  className="c-mob-app__link-1"
                  href="https://appstoreconnect.apple.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="26"
                    height="32"
                    viewBox="0 0 26 32"
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="c-mop-app__link-1--app"
                  >
                    <path
                      d="M21.1659 16.7413C21.14 12.8795 24.3287 10.9875 24.4843 10.9098C22.6696 8.26614 19.8697 7.90329 18.8586 7.87737C16.4995 7.61819 14.2181 9.30286 12.9996 9.30286C11.7811 9.30286 9.91456 7.90329 7.91835 7.95512C5.3518 8.00696 2.94079 9.48428 1.61863 11.791C-1.10347 16.508 0.91866 23.4281 3.53706 27.2121C4.8333 29.0782 6.36287 31.1517 8.35907 31.0739C10.3034 30.9962 11.0293 29.8299 13.3885 29.8299C15.7217 29.8299 16.3958 31.0739 18.4438 31.0221C20.5437 30.9962 21.8659 29.156 23.1103 27.264C24.6139 25.1387 25.2102 23.0134 25.2361 22.9098C25.2361 22.9098 21.2178 21.3806 21.1659 16.7413ZM17.3291 5.36333C18.366 4.04152 19.0919 2.2791 18.8845 0.464844C17.355 0.542598 15.4625 1.52748 14.3736 2.79746C13.4144 3.93785 12.533 5.77802 12.7663 7.51452C14.4773 7.64411 16.2402 6.65923 17.3291 5.36333Z"
                      fill="#ffff"
                    />
                  </svg>
                  <img
                    className="c-mob-app__link-1__img"
                    src={appStore}
                    alt="app-store"
                  ></img>
                </a>
              </div>
              <div className="c-mob-app__link-item-2">
                <a
                  className="c-mob-app__link-2"
                  href="https://play.google.com/store?hl=ru&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="c-mob-app__link-4"
                    src={googlePlayIcon}
                    alt="google-play-icon"
                  ></img>
                  <div className="c-mob-app__link__google-play">
                    <img
                      className="c-mob-app__link-2-img"
                      src={google}
                      alt="google"
                    ></img>
                    <img
                      className="c-mob-app__link-3-img"
                      src={googlePlay}
                      alt="google-play"
                    ></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileApp;
