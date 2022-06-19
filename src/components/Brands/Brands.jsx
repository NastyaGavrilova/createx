import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";

import "./_brands.scss";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  const brandsCollection = Array.from({ length: 6 }).map((el, index) => (
    <img
      key={`brand-${index}`}
      className="c-brands__img"
      src={brands[`${index}`]}
      alt="brands"
    ></img>
  ));
  return (
    <>
      <div className="c-brands" id="#brands">
        <div className="c-brands__wrapper">{brandsCollection}</div>
      </div>
    </>
  );
};
export default Brands;
