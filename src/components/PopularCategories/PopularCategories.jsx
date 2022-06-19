import React from "react";
import Titles from "../../elements/Titles/Titles";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import popular5 from "../../assets/popular5.png";
import popular6 from "../../assets/popular6.png";
import "./_popularCategories.scss";

const PopularCategories = () => {
  const category_name = [
    "Tops",
    "T-shirts",
    "Caps",
    "Sandals",
    "Jackets",
    "Coats",
  ];
  const category_img = [
    popular1,
    popular2,
    popular3,
    popular4,
    popular5,
    popular6,
  ];
  const popCategories = Array.from({ length: 6 }).map((el, index) => (
    <div key={`pop-category-${index}`} className="c-categories-clothe">
      <img
        className="c-categories-clothe__img"
        src={category_img[`${index}`]}
        alt="category img"
      ></img>
      <p className="c-categories-clothe__descr">{category_name[`${index}`]}</p>
    </div>
  ));
  return (
    <>
      <div className="c-popular-categories">
        <div className="c-popular-categories__wrapper">
          <div className="c-popular-categories__title">
            <Titles title_name="Popular categories" />
          </div>
          <div className="c-popular-categories__clothes">{popCategories}</div>
        </div>
      </div>
    </>
  );
};
export default PopularCategories;
