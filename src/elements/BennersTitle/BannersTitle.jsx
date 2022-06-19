import React from "react";
import "./_bannerTitle.scss";
const BannersTitle = (props) => {
  return (
    <>
      <h4 className="e-banners__title">{props.title}</h4>
    </>
  );
};
export default BannersTitle;
