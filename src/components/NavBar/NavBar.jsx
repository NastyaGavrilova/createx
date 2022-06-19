import React from "react";
import "./_navbar.scss";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import MegaMenu from "./MegaMenu";
import { ReactMegaMenu } from "react-mega-menu/lib";
import ShoppingCart from "./ShopingCart";
import Burger from "../Burger/Burger";

// const data = [
//   {
//     label: "Women",
//     key: "data-1",
//     items: <MegaMenu />,
//   },
//   {
//     label: "Men",
//     key: "data-2",
//     items: <MegaMenu />,
//   },
//   {
//     label: "Girls",
//     key: "data-3",
//     items: <MegaMenu />,
//   },
//   {
//     label: "Boys",
//     key: "data-4",
//     items: <MegaMenu />,
//   },
//   {
//     label: "Sale",
//     key: "data-5",
//     items: <MegaMenu />,
//   },
// ];
// const styleConf = {
//   menuProps: {
//     style: {
//       position: "relative",
//       top: "-9px",
//       left: "530px",
//       maxWidth: "348px",
//       margin: "0px",
//       listStyleType: "none",
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//     },
//   },

//   contentProps: {
//     style: {
//       // width: "1920px",
//       height: "487px",
//       padding: "20px 0 40px 0",
//       position: "relative",
//       zIndex: 2,
//     },
//   },
//   menuItemProps: {
//     style: {
//       color: "#424551",
//       fontWeight: "700",
//       fontSize: "16px",
//       textDecoration: "none",
//       fontFamily: "Lato",
//       // "line-height": " 160%",
//     },
//   },
//   menuItemSelectedProps: {
//     style: {
//       color: "#17696a",
//       fontSize: "16px",
//       fontWeight: "700",
//       // border: "2px solid purple",
//       // padding: "2px",
//       // height: "2em",
//       // width: "13em",
//       // backgroundColor: "grey",
//     },
//   },
//   containerProps: {
//     style: {
//       maxWidth: "1920px",
//       width: "100%",
//       left: 0,
//       display: "flex",
//       flexDirection: "column",
//       zIndex: "8",
//     },
//   },
// };

const Navbar = (props) => {
  const [menuActive, setMenuActive] = React.useState(false);
  const { countCartItems } = props;
  const [top, setTop] = React.useState(true);
  const componentDidAmount = () => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== top) {
        setTop(top);
      }
    });
  };
  return (
    <>
      <div className={top ? "c-navbar" : "c-navbar__fixed"}>
        <div className="c-navbar__wrapper">
          <div className="c-navbar__logo">
            <img className="e-navbar__logo" src={logo1} alt="logo1"></img>
            <img
              className="e-navbar__logo e-navbar__logo-small"
              src={logo2}
              alt="logo2"
            ></img>
          </div>

          <div className="c-navbar__menu">
            <MegaMenu />
            {/* <ReactMegaMenu
              className="c-megamenu"
              tolerance={100} // optional, defaults to 100
              data={data}
              styleConfig={styleConf}
            /> */}
          </div>
          <div className="c-navbar__search">
            <form>
              <label className="c-navbar__label">
                <input
                  type="text"
                  name="serach"
                  className="c-navbar__search-input"
                  placeholder="Search for products..."
                />
                <img
                  className="c-navbar__search-img"
                  src={search}
                  alt="search-icon"
                ></img>
              </label>
            </form>
          </div>
          <div className="c-navbar__toolbar">
            <div className="c-navbar__wishlist">
              <img
                className="c-navbar__wishlist-img"
                src={heart}
                alt="heart-icon"
              ></img>
              <p className="c-navbar__wishlist-counter">0</p>
            </div>
            <div className="c-navbar__divider">|</div>
            <div className="c-navbar__cart">
              <img
                className="c-navbar__cart-img"
                src={cart}
                alt="cart-icon"
                onClick={() => setMenuActive(!menuActive)}
              ></img>
              <p className="c-navbar__cart-counter">
                {" "}
                {countCartItems ? countCartItems : 0}
              </p>
            </div>
            <div className="c-navbar__divider-2">|</div>
            <Burger onClickActive={props.onClickActive} />
          </div>
        </div>
      </div>
      <ShoppingCart
        active={menuActive}
        setActive={setMenuActive}
        cartItems={props.cartItems}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        onDelete={props.onDelete}
        count={props.count}
      />
    </>
  );
};

export default Navbar;
