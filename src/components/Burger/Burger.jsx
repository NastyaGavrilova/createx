import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import "./_burger.scss";

const Burger = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="c-burger">
        <div className="c-burger__nav">
          <div
            className={
              menuActive ? "c-burger__btn-active" : "c-burger__btn-inactive"
            }
            onClick={() => setMenuActive(!menuActive)}
          >
            <span
              className={
                menuActive ? "c-burger__span-active" : "c-burger__span-inactive"
              }
            />
          </div>
        </div>
        <BurgerMenu active={menuActive} setActive={setMenuActive} />
      </div>
    </>
  );
};
export default Burger;
