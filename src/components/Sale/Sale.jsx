import React from "react";
import Titles from "../../elements/Titles/Titles";
import SaleSwiper from "./SaleSwiper";
import Button from "../../elements/Buttons/Button";
import "./_sale.scss";

const Sale = () => {
  return (
    <>
      <div className="c-sale" id="#sales">
        <div className="c-sale__wrapper">
          <div className="c-sale__title">
            <Titles title_name="Sale up to 70%" />
          </div>
          <SaleSwiper />
          <div className="c-sale__button">
            <Button clas_name="e-sale__button" btnTxt="See all sale products" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sale;
