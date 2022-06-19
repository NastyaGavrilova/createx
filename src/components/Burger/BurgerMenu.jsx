import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./_burgerMenu.scss";
import "../NavBar/_megaMenu.scss";

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
const BurgerMenu = ({ active, setActive }) => {
  const dropdownRef = useRef(null);
  const dropdownMegaMenuRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [activeMega, setActiveMega] = useDetectOutsideClick(
    dropdownMegaMenuRef,
    false
  );
  const onClick = () => setIsActive(!isActive);
  const onClickMega = () => setActiveMega(!activeMega);
  const href = ["/blog", "/contacts", "/track-order"];
  const linkName = ["Blog list", "Contacts", "FAQ"];
  return (
    <>
      <div className={active ? "c-burger-menu active" : "c-burger-menu"}>
        <div className="c-burger-menu__wrapper">
          <div className="c-burger-menu__nav">
            <div className="c-burger-menu__nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="c-burger-menu__nav-dropdown" onClick={onClick}>
              <p className="c-burger-menu__nav-dropdown--text">Pages</p>
              <i className="c-burger-menu__nav-dropdown--down"></i>
            </div>
            <div className="c-burger-menu__nav-dropdown" onClick={onClickMega}>
              <p className="c-burger-menu__nav-dropdown--text">Mega menu</p>
              <i className="c-burger-menu__nav-dropdown--down"></i>
            </div>
            <nav
              ref={dropdownRef}
              className={`c-burger-menu__dropdown ${
                isActive ? "active" : "inactive"
              }`}
            >
              <ul className="c-burger-menu__dropdown-list">
                {Array.from({ length: 3 }).map((el, index) => (
                  <li
                    className="c-burger-menu__dropdown-list-item"
                    key={"c-burger-menu__dropdown-list-item" + index}
                  >
                    <Link to={href[`${index}`]}>{linkName[`${index}`]}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav
              ref={dropdownMegaMenuRef}
              className={`c-burger-menu__dropdown ${
                activeMega ? "active" : "inactive"
              }`}
            >
              <div className="c-megamenu__wrapper">
                <MenuCategories />
                <MenuClothes />
                <MenuShoes />
                <MenuAccessories />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
