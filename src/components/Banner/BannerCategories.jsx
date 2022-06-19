import React from "react";
import women from "../../assets/women.png";
import men from "../../assets/men.png";
import kids from "../../assets/kids.png";
import "./_bannerCategories.scss";

const BannerCategories = () => {
  const categoryImg = [women, men, kids];
  const categoryTitle = ["Women’s", "Men’s", "Kid’s"];
  const clotheCategory = Array.from({ length: 3 }).map((el, index) => (
    <div
      className={"c-category-item c-category-item-" + index}
      key={`category-content-${index}`}
    >
      <div
        className={"c-category-item__wrapper c-category-item__wrapper-" + index}
      >
        <img
          className="c-category-item__img"
          alt="category-img"
          src={categoryImg[`${index}`]}
        ></img>
        <h4 className="c-category-item__title">{categoryTitle[`${index}`]}</h4>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-top-categories">
        <div className="c-top-categories__wrapper">{clotheCategory}</div>
      </div>
    </>
  );
};
export default BannerCategories;
