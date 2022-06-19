import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TrackOrder from "../../components/Pages/TrackOrder/TrackOrder";
import appStore from "../../assets/appStore.svg";
import google from "../../assets/google.svg";
import googlePlay from "../../assets/googlePlay.svg";
import googlePlayIcon from "../../assets/googlePlayIcon.svg";
import greenHeart from "../../assets/green-heart.svg";
import "./_topbar.scss";
import Blog from "../../components/Pages/Blog/Blog";
import Contacts from "../../components/Pages/Contacts/Contacts";
import DeliveryAndReturn from "../../components/Pages/DelveryAndReturn/DeliveryAndReturn";
import Navbar from "../NavBar/NavBar";
import SpecialOffers from "../../elements/SpecialOffers/SpecialOffers";
import Main from "../../components/Pages/Main/Main";
import Faq from "../../components/Pages/FAQ/Faq";
import "./_footer.scss";
import Clothes from "../../components/Pages/Clothes/Clothes";
import ClothesPage from "../../components/Pages/ClothesPage/ClothesPage";
import data from "../../data";
import clothesData from "../../clothesData";
import Checkout from "../../components/Pages/Checkout/Checkout";
import Registration from "./Registration";
import Authorization from "./Authorization";
// import BreadCrumbs from "../../components/Pages/Clothes/BreadCrumbs";

// import BreadCrumbs from "../../components/Pages/Clothes/BreadCrumbs";

const TopBar = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [modal, setModal] = React.useState({
    modal1: false,
    modal2: false,
  });
  const onAdd = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };
  const facebook = (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="#ffff"
      xmlns="http://www.w3.org/2000/svg"
      className="c-socials__facebook c-socials__icon"
    >
      <path
        d="M7.70791 0.669067L5.8564 0.666016C3.77629 0.666016 2.43204 2.08274 2.43204 4.2755V5.93972H0.570429C0.409564 5.93972 0.279297 6.07368 0.279297 6.23893V8.65019C0.279297 8.81543 0.409712 8.94925 0.570429 8.94925H2.43204V15.0336C2.43204 15.1989 2.5623 15.3327 2.72317 15.3327H5.15204C5.3129 15.3327 5.44317 15.1987 5.44317 15.0336V8.94925H7.61983C7.78069 8.94925 7.91096 8.81543 7.91096 8.65019L7.91185 6.23893C7.91185 6.15959 7.8811 6.0836 7.82659 6.02745C7.77208 5.9713 7.69781 5.93972 7.62057 5.93972H5.44317V4.52894C5.44317 3.85087 5.60047 3.50664 6.46035 3.50664L7.70761 3.50618C7.86833 3.50618 7.99859 3.37221 7.99859 3.20712V0.968129C7.99859 0.803187 7.86848 0.669372 7.70791 0.669067Z"
        fill="#ffff"
      />
    </svg>
  );
  const inst = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="#ffff"
      xmlns="http://www.w3.org/2000/svg"
      className="c-socials__inst c-socials__icon"
    >
      <path
        d="M13.6543 4.25402C13.623 3.54557 13.5085 3.05852 13.3444 2.63648C13.1751 2.18849 12.9146 1.78741 12.5733 1.45399C12.2399 1.11539 11.8362 0.852274 11.3934 0.685616C10.9689 0.521501 10.4844 0.406936 9.77596 0.3757C9.06221 0.341819 8.83563 0.333984 7.02538 0.333984C5.21513 0.333984 4.98855 0.341819 4.27745 0.373055C3.569 0.40429 3.08195 0.518957 2.66001 0.68297C2.21193 0.852274 1.81085 1.11274 1.47743 1.45399C1.13882 1.78741 0.875813 2.19114 0.709053 2.63393C0.544938 3.05852 0.430373 3.54292 0.399137 4.25137C0.365256 4.96512 0.357422 5.1917 0.357422 7.00195C0.357422 8.8122 0.365256 9.03879 0.396492 9.74988C0.427728 10.4583 0.542394 10.9454 0.706509 11.3674C0.875813 11.8154 1.13882 12.2165 1.47743 12.5499C1.81085 12.8885 2.21457 13.1516 2.65737 13.3183C3.08195 13.4824 3.56636 13.597 4.27491 13.6282C4.9859 13.6595 5.21259 13.6673 7.02284 13.6673C8.83308 13.6673 9.05967 13.6595 9.77077 13.6282C10.4792 13.597 10.9663 13.4824 11.3882 13.3183C12.2843 12.9718 12.9927 12.2634 13.3392 11.3674C13.5032 10.9428 13.6178 10.4583 13.6491 9.74988C13.6803 9.03879 13.6882 8.8122 13.6882 7.00195C13.6882 5.1917 13.6855 4.96512 13.6543 4.25402ZM12.4536 9.69779C12.4249 10.349 12.3155 10.7006 12.2243 10.935C12.0003 11.5159 11.5393 11.9769 10.9584 12.2009C10.724 12.2921 10.3698 12.4015 9.72122 12.4301C9.01795 12.4614 8.80704 12.4691 7.02803 12.4691C5.24902 12.4691 5.03545 12.4614 4.33473 12.4301C3.68357 12.4015 3.33194 12.2921 3.09752 12.2009C2.80846 12.0941 2.54535 11.9248 2.33178 11.7034C2.11039 11.4872 1.94108 11.2267 1.83425 10.9377C1.74309 10.7032 1.63371 10.349 1.60512 9.70044C1.57378 8.99717 1.56605 8.78616 1.56605 7.00714C1.56605 5.22813 1.57378 5.01457 1.60512 4.31395C1.63371 3.66278 1.74309 3.31115 1.83425 3.07673C1.94108 2.78757 2.11039 2.52456 2.33443 2.31089C2.55053 2.08949 2.811 1.92019 3.10016 1.81346C3.33458 1.7223 3.68886 1.61292 4.33738 1.58423C5.04064 1.55299 5.25166 1.54516 7.03057 1.54516C8.81223 1.54516 9.02314 1.55299 9.72386 1.58423C10.375 1.61292 10.7267 1.7223 10.9611 1.81346C11.2501 1.92019 11.5133 2.08949 11.7268 2.31089C11.9482 2.5271 12.1175 2.78757 12.2243 3.07673C12.3155 3.31115 12.4249 3.66532 12.4536 4.31395C12.4848 5.01721 12.4926 5.22813 12.4926 7.00714C12.4926 8.78616 12.4848 8.99453 12.4536 9.69779Z"
        fill="#ffff"
      />
      <path
        d="M7.02538 3.5768C5.13445 3.5768 3.60023 5.11092 3.60023 7.00196C3.60023 8.893 5.13445 10.4271 7.02538 10.4271C8.91641 10.4271 10.4505 8.893 10.4505 7.00196C10.4505 5.11092 8.91641 3.5768 7.02538 3.5768ZM7.02538 9.22377C5.79864 9.22377 4.80357 8.2288 4.80357 7.00196C4.80357 5.77511 5.79864 4.78015 7.02538 4.78015C8.25222 4.78015 9.24719 5.77511 9.24719 7.00196C9.24719 8.2288 8.25222 9.22377 7.02538 9.22377Z"
        fill="#ffff"
      />
      <path
        d="M11.3857 3.44138C11.3857 3.88296 11.0276 4.241 10.586 4.241C10.1444 4.241 9.78635 3.88296 9.78635 3.44138C9.78635 2.99971 10.1444 2.64177 10.586 2.64177C11.0276 2.64177 11.3857 2.99971 11.3857 3.44138Z"
        fill="#ffff"
      />
    </svg>
  );
  const twitter = (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="#ffff"
      xmlns="http://www.w3.org/2000/svg"
      className="c-socials__twitter c-socials__icon"
    >
      <path
        d="M14 1.84887C13.4847 2.0675 12.9318 2.21577 12.3509 2.28196C12.9441 1.94186 13.3981 1.4024 13.6133 0.761582C13.0569 1.07654 12.4428 1.30524 11.7884 1.42922C11.2644 0.893947 10.519 0.560547 9.69227 0.560547C8.1062 0.560547 6.82018 1.79192 6.82018 3.30978C6.82018 3.52505 6.84555 3.73531 6.89455 3.93637C4.50801 3.82159 2.39178 2.72676 0.975426 1.06313C0.727841 1.46858 0.586994 1.941 0.586994 2.4453C0.586994 3.39941 1.0944 4.24127 1.86427 4.7338C1.3936 4.71873 0.950926 4.59476 0.563386 4.38869V4.42303C0.563386 5.75492 1.55371 6.86651 2.86682 7.1195C2.62624 7.18149 2.37255 7.21583 2.11009 7.21583C1.92464 7.21583 1.74529 7.19824 1.56944 7.16473C1.93511 8.25789 2.99543 9.05283 4.25171 9.07463C3.26926 9.81178 2.03048 10.2499 0.684995 10.2499C0.453171 10.2499 0.224824 10.2365 0 10.2122C1.27114 10.9937 2.78024 11.4494 4.40218 11.4494C9.68532 11.4494 12.5732 7.2594 12.5732 3.62559L12.5635 3.26959C13.1278 2.88423 13.6159 2.40007 14 1.84887Z"
        fill="#ffff"
      />
    </svg>
  );
  const youtube = (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="#ffff"
      xmlns="http://www.w3.org/2000/svg"
      className="c-socials__youtube c-socials__icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2602 0.74304C14.9455 0.92761 15.4859 1.46789 15.6703 2.15331C16.0131 3.40526 15.9999 6.01486 15.9999 6.01486C15.9999 6.01486 15.9999 8.61117 15.6705 9.86323C15.4859 10.5485 14.9456 11.0889 14.2602 11.2734C13.0081 11.603 7.99997 11.603 7.99997 11.603C7.99997 11.603 3.00487 11.603 1.73974 11.2603C1.05432 11.0758 0.514036 10.5354 0.329466 9.85005C0 8.61117 0 6.00168 0 6.00168C0 6.00168 0 3.40526 0.329466 2.15331C0.513914 1.46801 1.0675 0.914426 1.73962 0.729979C2.99169 0.400391 7.99984 0.400391 7.99984 0.400391C7.99984 0.400391 13.0081 0.400391 14.2602 0.74304ZM10.5699 6.0017L6.40525 8.40039V3.60302L10.5699 6.0017Z"
        fill="#ffff"
      />
    </svg>
  );

  const pinterest = (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="#ffff"
      xmlns="http://www.w3.org/2000/svg"
      className="c-socials__pinterest"
    >
      <path
        d="M6.20093 0.666016C2.15211 0.666627 0 3.2425 0 6.0512C0 7.3535 0.732961 8.97847 1.90656 9.49364C2.24135 9.64336 2.19704 9.46064 2.48505 8.36674C2.50782 8.27568 2.49613 8.19684 2.42228 8.1119C0.744653 6.18504 2.09488 2.22376 5.96154 2.22376C11.5575 2.22376 10.5119 9.91287 6.93512 9.91287C6.01323 9.91287 5.32643 9.19419 5.54367 8.30501C5.80707 7.24594 6.32279 6.10743 6.32279 5.34414C6.32279 3.42033 3.43648 3.70573 3.43648 6.25471C3.43648 7.04244 3.71711 7.57411 3.71711 7.57411C3.71711 7.57411 2.78845 11.2995 2.61613 11.9956C2.32443 13.1738 2.65552 15.0811 2.68445 15.2455C2.70229 15.3359 2.80445 15.3647 2.86169 15.2901C2.95338 15.1709 4.0759 13.5808 4.39038 12.4313C4.50485 12.0127 4.97441 10.3138 4.97441 10.3138C5.28396 10.8687 6.17632 11.3331 7.12713 11.3331C9.95559 11.3331 12 8.86419 12 5.80064C11.9902 2.8636 9.45895 0.666016 6.20093 0.666016V0.666016Z"
        fill="#ffff"
      />
    </svg>
  );

  const social_icons = [facebook, inst, twitter, youtube, pinterest];
  const link_name = [
    "Delivery & returns",
    "FAQ",
    "Track order",
    "Contacts",
    "Blog",
  ];
  const link_path = [
    "/delivery-and-return",
    "/faq",
    "/track-order",
    "/contacts",
    "/blog",
  ];

  const shop_link_name = ["New arrivals", "Trending now", "Sales", "Brands"];
  const shop_link_path = ["#new-arivals", "#trending-now", "#sales"];

  const call_and_email = ["Call:", "Email:"];
  const tel_and_email = ["(405) 555-0128", "hello@createx.com"];
  const href_tel_email = ["tel:(405) 555-0128", "mailto:hello@createx.com"];
  const socials_link = [
    "https://uk-ua.facebook.com/",
    "https://www.instagram.com/",
    "https://twitter.com/?lang=ru",
    "https://www.youtube.com/",
    "https://www.pinterest.ru/",
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
  const socials = Array.from({ length: 5 }).map((el, index) => (
    <div
      className={`c-socials c-socials-${index}`}
      key={"socials-icons-" + Math.random()}
    >
      <a
        href={socials_link[`${index}`]}
        className="c-socials__link"
        target="_blank"
        rel="noreferrer"
      >
        {social_icons[`${index}`]}
      </a>
    </div>
  ));

  const get_in_touch = Array.from({ length: 2 }).map((el, index) => (
    <li
      className="c-footer__get-in-touch__list-links__item"
      key={"get-in-touch-" + Math.random()}
    >
      <p className="c-footer__get-in-touch__list-links__text">
        {call_and_email[`${index}`]}
      </p>
      <a
        href={href_tel_email[`${index}`]}
        className="c-footer__get-in-touch__list-links__link"
      >
        {tel_and_email[`${index}`]}
      </a>
    </li>
  ));
  const shop_links = Array.from({ length: 4 }).map((el, index) => (
    <li
      className="c-footer__shop-list-links__item"
      key={"shop-link-" + Math.random()}
    >
      <a href={shop_link_path[`${index}`]}>{shop_link_name[`${index}`]}</a>
    </li>
  ));
  const links = Array.from({ length: 5 }).map((el, index) => (
    <li
      className="c-footer__help-list-links__item"
      key={"link-" + Math.random()}
    >
      <Link to={link_path[`${index}`]}>{link_name[`${index}`]}</Link>
    </li>
  ));

  return (
    <>
      <Router>
        <header className="c-topbar">
          <div className="c-topbar__wrapper">
            <a className="c-topbar__phone" href="tel:(405)555-0128">
              Available 24/7 at (405) 555-0128
            </a>

            <div className="c-topbar__menu">
              <ul className="c-topbar__menu-list">
                <li className="c-topbar__menu-list__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="c-topbar__menu-list__item">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="c-topbar__menu-list__item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="c-topbar__menu-list__item">
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="c-topbar__account">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="c-topbar__account--img"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.00055 1.66634C5.71188 1.66634 4.66721 2.71101 4.66721 3.99967C4.66721 5.28834 5.71188 6.33301 7.00055 6.33301C8.28921 6.33301 9.33388 5.28834 9.33388 3.99967C9.33388 2.71101 8.28921 1.66634 7.00055 1.66634ZM3.33388 3.99967C3.33388 1.97463 4.9755 0.333008 7.00055 0.333008C9.02559 0.333008 10.6672 1.97463 10.6672 3.99967C10.6672 6.02472 9.02559 7.66634 7.00055 7.66634C4.9755 7.66634 3.33388 6.02472 3.33388 3.99967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.06992 9.66634C2.60771 9.66634 2.24643 9.8914 2.09979 10.2148C1.89681 10.6623 1.71301 11.1951 1.66964 11.7005C1.65025 11.9264 1.74444 12.0928 1.87423 12.1735C2.56033 12.5997 4.15014 13.333 7.00055 13.333C9.85095 13.333 11.4408 12.5997 12.1269 12.1735C12.2567 12.0928 12.3508 11.9264 12.3315 11.7005C12.2881 11.1951 12.1043 10.6623 11.9013 10.2148C11.7547 9.8914 11.3934 9.66634 10.9312 9.66634H3.06992ZM0.885499 9.66404C1.2908 8.77039 2.19582 8.33301 3.06992 8.33301H10.9312C11.8053 8.33301 12.7103 8.77039 13.1156 9.66404C13.3484 10.1773 13.5982 10.8673 13.6599 11.5864C13.7161 12.2413 13.4439 12.9249 12.8304 13.3061C11.9281 13.8666 10.0936 14.6663 7.00055 14.6663C3.90748 14.6663 2.07301 13.8666 1.17066 13.3061C0.557149 12.9249 0.284988 12.2413 0.341191 11.5864C0.40291 10.8673 0.652708 10.1773 0.885499 9.66404Z"
                  fill="white"
                />
              </svg>

              <p
                className="c-topbar__account--text"
                onClick={() =>
                  setModal({
                    ...modal,
                    modal1: true,
                  })
                }
              >
                Log in
              </p>
              <p className="c-topbar__account--divider">/</p>
              <p
                className="c-topbar__account--text"
                onClick={() =>
                  setModal({
                    ...modal,
                    modal2: true,
                  })
                }
              >
                Register
              </p>
            </div>
          </div>
        </header>
        <Registration
          isOpened={modal.modal2}
          onModalClose={() => setModal({ ...modal, modal2: false })}
        />
        <Authorization
          isOpened={modal.modal1}
          onModalClose={() => setModal({ ...modal, modal1: false })}
        />

        <Navbar
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          cartItems={cartItems}
          countCartItems={cartItems.length}
          count={cartItems.length}
        />
        <SpecialOffers />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="delivery-and-return"
            element={<DeliveryAndReturn />}
          ></Route>
          <Route path="track-order" element={<TrackOrder />}></Route>
          <Route path="blog" element={<Blog blogs={data} />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="faq" element={<Contacts />}></Route>
          {clothesData.map((el) => (
            <Route
              key={el.title}
              path={"clothes/" + el.link}
              element={
                <ClothesPage
                  title={el.title}
                  price={el.price}
                  oldPrice={el.oldPrice}
                  Image1={el.imageSwiper1}
                  Image2={el.imageSwiper2}
                  Image3={el.imageSwiper3}
                  Image4={el.imageSwiper4}
                  Image5={el.imageSwiper5}
                  number={el.number}
                  color={el.color}
                  onAdd={() => onAdd(el)}
                />
              }
            ></Route>
          ))}
          {Array.from({ length: 14 }).map((el, index) => (
            <Route
              key={"route" + index}
              path={"/clothes" + clothes[`${index}`]}
              element={<Clothes clothes={clothesData} />}
            ></Route>
          ))}
          {Array.from({ length: 9 }).map((el, index) => (
            <Route
              key={"router" + index}
              path={"/shoes" + shoes[`${index}`]}
              element={<Clothes clothes={clothesData} />}
            ></Route>
          ))}
          {Array.from({ length: 10 }).map((el, index) => (
            <Route
              key={"routeer" + index}
              path={"/accessories" + accessories[`${index}`]}
              element={<Clothes clothes={clothesData} />}
            ></Route>
          ))}
          <Route
            path="/shoes"
            element={<Clothes clothes={clothesData} />}
          ></Route>
          <Route
            path="/accessories"
            element={<Clothes clothes={clothesData} />}
          ></Route>
          <Route
            path="clothes"
            element={<Clothes clothes={clothesData} />}
          ></Route>
          <Route
            path="checkout"
            element={
              <Checkout
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                checkoutItems={cartItems}
                countCartItems={cartItems.length}
                count={cartItems.length}
              />
            }
          ></Route>
        </Routes>

        <footer className="c-footer">
          <div className="c-footer__wrapper">
            <div className="c-footer__help">
              <p className="c-footer__title">Help</p>
              <ul className="c-footer__help-list-links">{links}</ul>
            </div>
            <div className="c-footer__shop">
              <p className="c-footer__title">Shop</p>
              <ul className="c-footer__shop-list-links">{shop_links}</ul>
            </div>
            <div className="c-footer__get-in-touch">
              <p className="c-footer__title">Get in touch</p>
              <ul className="c-footer__get-in-touch__list-links">
                {get_in_touch}
              </ul>
              <div className="c-footer__get-in-touch__socials">{socials}</div>
            </div>
            <div className="c-footer__app">
              <p className="c-footer__title">Download our app</p>
              <div className="c-footer__mob-link">
                <div className="c-mob-app__link-item-1">
                  <a
                    className="c-mob-app__link-1"
                    href="https://appstoreconnect.apple.com/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 26 32"
                      fill="#ffff"
                      xmlns="http://www.w3.org/2000/svg"
                      className="c-mop-app__link-1--app"
                    >
                      <path
                        d="M21.1659 16.7413C21.14 12.8795 24.3287 10.9875 24.4843 10.9098C22.6696 8.26614 19.8697 7.90329 18.8586 7.87737C16.4995 7.61819 14.2181 9.30286 12.9996 9.30286C11.7811 9.30286 9.91456 7.90329 7.91835 7.95512C5.3518 8.00696 2.94079 9.48428 1.61863 11.791C-1.10347 16.508 0.91866 23.4281 3.53706 27.2121C4.8333 29.0782 6.36287 31.1517 8.35907 31.0739C10.3034 30.9962 11.0293 29.8299 13.3885 29.8299C15.7217 29.8299 16.3958 31.0739 18.4438 31.0221C20.5437 30.9962 21.8659 29.156 23.1103 27.264C24.6139 25.1387 25.2102 23.0134 25.2361 22.9098C25.2361 22.9098 21.2178 21.3806 21.1659 16.7413ZM17.3291 5.36333C18.366 4.04152 19.0919 2.2791 18.8845 0.464844C17.355 0.542598 15.4625 1.52748 14.3736 2.79746C13.4144 3.93785 12.533 5.77802 12.7663 7.51452C14.4773 7.64411 16.2402 6.65923 17.3291 5.36333Z"
                        fill="#ffff"
                      />
                    </svg>
                    <img
                      className="c-mob-app__link-1__img"
                      src={appStore}
                      alt="app-store"
                    ></img>
                  </a>
                </div>
                <div className="c-mob-app__link-item-2">
                  <a
                    className="c-mob-app__link-2"
                    href="https://play.google.com/store?hl=ru&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="c-mob-app__link-4"
                      src={googlePlayIcon}
                      alt="google-play-icon"
                    ></img>
                    <div className="c-mob-app__link__google-play">
                      <img
                        className="c-mob-app__link-2"
                        src={google}
                        alt="google"
                      ></img>
                      <img
                        className="c-mob-app__link-3"
                        src={googlePlay}
                        alt="google-play"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="c-footer__copyright">
            <div className="c-footer__copyright__wrapper">
              <div className="c-copyright">
                <p className="c-copyright__text">
                  © All rights reserved. Made with
                </p>
                <img
                  className="c-copyright__img"
                  src={greenHeart}
                  alt="green heart"
                ></img>
                <p className="c-copyright__text">by Createx Studio </p>
              </div>
              <div className="c-go-to-top">
                <p className="c-go-to-top__text">Go to top</p>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
};
export default TopBar;
