import React, { useRef } from "react";
import "./_megaMenu.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clothes from "../../components/Pages/Clothes/Clothes";
import { useDetectOutsideClick } from "../Burger/useDetectOutsideClick";
const categories = [
  "New collection",
  "Best Sellers",
  "Plus Size",
  "Sale up to 70%",
];

const shoes = [
  "Boots",
  "Flat shoes",
  "Heels",
  "Sandals",
  "Mules",
  "Sliders",
  "Slippers",
  "Sneakers",
  "Leather",
];
const clothes = [
  "Coats",
  "Jackets",
  "Suits",
  "Dresses",
  "Cardigans & sweaters",
  "Sweatshirts & hoodies",
  "T-shirts & tops",
  "Pants",
  "Jeans",
  "Shorts",
  "Skirts",
  "Lingerie & nightwear",
  "Sportswear",
  "Swimwear",
];
const accessories = [
  "Bags & bagpacks",
  "Hats & scarves",
  "Hair accessories",
  "Belts",
  "Jewellery",
  "Watches",
  "Sunglasses",
  "Purses",
  "Gloves",
  "Socks & tights",
];
const MenuCategories = () => {
  return (
    <>
      <ul className="c-megamenu__categories">
        {Array.from({ length: 4 }).map((el, index) => (
          <li
            className="c-megamenu__categories-item"
            key={"category-id-" + index}
          >
            {categories[`${index}`]}
          </li>
        ))}
      </ul>
    </>
  );
};
const MenuClothes = () => {
  return (
    <>
      <ul className="c-megamenu__clothes">
        <li className="c-megamenu__clothes-item first-item">
          <Link
            to="/clothes"
            className="c-megamenu__clothes-item__link first-item"
          >
            CLOTHES
          </Link>
        </li>

        {Array.from({ length: 14 }).map((el, index) => (
          <li className="c-megamenu__clothes-item" key={"clothes-id" + index}>
            <Link
              to={"/clothes" + clothes[`${index}`]}
              className="c-megamenu__clothes-item__link"
            >
              {clothes[`${index}`]}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const MenuShoes = () => {
  return (
    <>
      <ul className="c-megamenu__shoes">
        <li className="c-megamenu__shoes-item first-item">SHOES</li>
        {Array.from({ length: 9 }).map((el, index) => (
          <li className="c-megamenu__shoes-item" key={"shoes-id-" + index}>
            {shoes[`${index}`]}
          </li>
        ))}
      </ul>
    </>
  );
};

const MenuAccessories = () => {
  return (
    <>
      <ul className="c-megamenu__accessories">
        <li className="c-megamenu__accessories-item first-item">ACCESSORIES</li>
        {Array.from({ length: 10 }).map((el, index) => (
          <li
            className="c-megamenu__accessories-item"
            key={"accessories-is-" + index}
          >
            {accessories[`${index}`]}
          </li>
        ))}
      </ul>
    </>
  );
};

const MegaMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [state, setState] = React.useState(0);
  const onClick = (index) => {
    setState(index);
    setIsActive(!isActive);
  };
  const categories = ["Women", "Men", "Girls", "Boys", "Sale"];
  return (
    <>
      <div className="c-menu-category">
        <div className="c-menu-category__wrapper">
          <ul className="c-menu-category__list">
            {Array.from({ length: 5 }).map((el, index) => (
              <li
                className={
                  state === index
                    ? "c-menu-category__list-item-click"
                    : "c-menu-category__list-item"
                }
                key={"c-menu-category__list-item" + index}
                onClick={() => onClick(index)}
              >
                {categories[`${index}`]}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`c-megamenu ${isActive ? "active" : "inactive"}`}
      >
        <div className="c-megamenu__wrapper">
          <MenuCategories />
          <MenuClothes />
          <MenuShoes />
          <MenuAccessories />
        </div>
      </div>
    </>
  );
};
export default MegaMenu;
