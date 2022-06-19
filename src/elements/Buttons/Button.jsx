import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={props.clas_name}>
        <span className={props.clas_name_span}>{props.btnTxt}</span>
      </button>
    </>
  );
};
export default Button;
