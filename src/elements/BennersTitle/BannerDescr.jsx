import React from "react";
import "./_bannerDescr.scss";
const BannersDescr = (props) => {
  return (
    <>
      <p className="e-banners__description">{props.descr}</p>
    </>
  );
};
export default BannersDescr;
