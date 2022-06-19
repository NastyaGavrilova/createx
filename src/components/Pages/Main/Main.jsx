import React from "react";
// import TopBar from "../../../elements/TopBar/TopBar";

import PopularCategories from "../../PopularCategories/PopularCategories";
import SeveralBanners from "../../SeveralBanners/SeveralBanners";
import Banner from "../../Banner/Banner";
import BannerCategories from "../../Banner/BannerCategories";
import TrendingNow from "../../TrendingNow/TrendingNow";
import Sale from "../../Sale/Sale";
import MobileApp from "../../MobileApp/MobileApp";
import Services from "../../Services/Services";
import Instagram from "../../Instagram/Instagram";
import FashionBlog from "../../FashionBlog/FashionBlog";
import Brands from "../../Brands/Brands";
import Subscribe from "../../Subscribe/Subscribe";

import NewArrivals from "../../NewArrivals/NewArrivals";

const Main = () => {
  return (
    <>
      <div className="c-main">
        <Banner />
        <BannerCategories />
        <NewArrivals />
        <SeveralBanners />
        <PopularCategories />
        <TrendingNow />
        <Sale />
        <MobileApp />
        <Services />
        <Instagram />
        <FashionBlog />
        <Brands />
        <Subscribe />
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Main;
