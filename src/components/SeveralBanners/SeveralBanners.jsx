import React from "react";
import BannersDescr from "../../elements/BennersTitle/BannerDescr";
import BannersTitle from "../../elements/BennersTitle/BannersTitle";
import Button from "../../elements/Buttons/Button";
import BannerForm from "./BannerForm";
import "./_severalBanners.scss";
import banner4 from "../../assets/benner4.png";

const SeveralBanners = () => {
  return (
    <>
      <div className="c-banners">
        <div className="c-banners__wrapper">
          <div className="c-banners__top">
            <div className="c-banners__banner-wrapper first">
              <div className="c-banners__first-banner banner">
                <BannersDescr descr="Summer Collections" />
                <BannersTitle title="Sale Up to 70%" />
                <Button
                  clas_name="e-banners__button"
                  clas_name_span="e-banner__button--span"
                  btnTxt="Explore new prices"
                />
              </div>
            </div>
            <div className="c-banners__banner-wrapper second">
              <div className="c-banners__sec-banner banner">
                <BannersDescr descr="Deal of the week" />
                <BannersTitle title="Stay Warm With Our New Sweaters" />
                <Button
                  clas_name="e-banners__button"
                  clas_name_span="e-banner__button--span"
                  btnTxt="Shop now"
                />
              </div>
            </div>
          </div>
          <div className="c-banners__bottom">
            <div className="c-banners__banner-wrapper third">
              <div className="c-banners__third-banner banner">
                <BannersDescr descr="New collection" />
                <BannersTitle title="Shoes & Bags autumn / winter 2020 " />
                <Button
                  clas_name="e-banners__button"
                  clas_name_span="e-banner__button--span"
                  btnTxt="See offers"
                />
              </div>
            </div>
            <div className="c-banners__banner-wrapper fourth">
              <div className="c-banners__fourth-banner banner">
                <BannersDescr descr="For All new Email Subscribers" />
                <BannersTitle title="Get 5% Off & Free Delivery " />
                <BannerForm />

                <img
                  src={banner4}
                  alt="banner-img"
                  className="c-banners__fourth-banner__img"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SeveralBanners;
