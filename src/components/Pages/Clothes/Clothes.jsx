import React from "react";
import "../../Subscribe/Subscribe";
import Subscribe from "../../Subscribe/Subscribe";
import wishHeart from "../../../assets/wish.svg";
import "./_clothes.scss";
import "./_clotheSwiper.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import data from "../../../clothesData";
const Filter = (props) => {
  const [toggleState, setToggleState] = React.useState(false);
  // const { products } = props;

  return (
    <div className="c-clothes__category">
      <div className="c-clothes__category-show-filter">
        <h2 className="c-clothes__category--title">{props.headerText}</h2>
        <div
          onClick={() => setToggleState(!toggleState)}
          className={
            toggleState === false
              ? "c-clothes__hide-category"
              : "c-clothes__show-category"
          }
        ></div>
      </div>

      <div
        className={
          toggleState === false
            ? "c-clothes__category-filter"
            : "c-clothes__category-filter-hide"
        }
      >
        {props.filters?.map((n) => (
          <label
            className="c-clothes__category__check"
            key={Math.random() + "filter"}
          >
            <input
              type="checkbox"
              value={n}
              checked={props.value.includes(n)}
              onChange={props.onChange}
            />
            <span className="c-clothes__category__checkmark"></span>
            {n}
          </label>
        ))}
      </div>
      <div className="c-clothes__category__divider"></div>
    </div>
  );
};
const ColorFilter = (props) => {
  const [toggleState, setToggleState] = React.useState(false);
  const indexes = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className="c-clothes__category">
      <div className="c-clothes__category-show-filter">
        <h2 className="c-clothes__category--title">{props.headerText}</h2>
        <div
          onClick={() => setToggleState(!toggleState)}
          className={
            toggleState === false
              ? "c-clothes__hide-category"
              : "c-clothes__show-category"
          }
        ></div>
      </div>

      <div
        className={
          toggleState === false
            ? "c-clothes__category-color-filter"
            : "c-clothes__category-color-filter-hide"
        }
      >
        {props.filters?.map((n, i) => (
          <label
            className="c-clothes__category__color-check"
            key={Math.random() + "filter"}
          >
            {/* <div> */}
            <input
              type="checkbox"
              value={n}
              checked={props.value.includes(n)}
              onChange={props.onChange}
              className="c-clothes__category__color-checkbox"
            ></input>
            {/* <span className={"c-clothes__category__color-custom"}></span> */}
            {/* </div> */}
            <span className="c-clothes__category__color-check-change">
              <span
                className={
                  "c-clothes__category__color-checkmark" +
                  " c-clothes__category__color-checkmark-" +
                  indexes[`${i}`]
                }
              ></span>
            </span>
            {n}
          </label>
        ))}
      </div>
      <div className="c-clothes__category__divider"></div>
    </div>
  );
};
const PriceInput = ({ index, ...props }) => (
  <input className="c-clothes__price-input" data-index={index} {...props} />
);
const PriceFilter = (props) => {
  const [toggleState, setToggleState] = React.useState(false);
  return (
    <div className="c-clothes__category">
      <div className="c-clothes__category-show-filter">
        <h2 className="c-clothes__category--title">{props.headerText}</h2>
        <div
          onClick={() => setToggleState(!toggleState)}
          className={
            toggleState === false
              ? "c-clothes__hide-category"
              : "c-clothes__show-category"
          }
        ></div>
      </div>
      <div className="c-clothes__price">
        <PriceInput
          value={props.value[0]}
          onChange={props.onChange}
          index="0"
        />
        <div className="c-clothes__price-divider"></div>
        <PriceInput
          value={props.value[1]}
          onChange={props.onChange}
          index="1"
        />
      </div>
    </div>
  );
};

const RatingStar = (props) => {
  const stars = Array.from({ length: 5 }).map((el, index) => (
    <svg
      className={"c-clothe__rating-star c-clothe__rating-star-" + index}
      key={"clothe-rating" + index}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="#B3B7BC"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.93269 1.28395C6.33796 0.349362 7.66334 0.349361 8.06861 1.28395L9.29455 4.11107L12.3621 4.40338C13.3762 4.50001 13.7858 5.76052 13.0222 6.43476L10.7123 8.47433L11.3822 11.4821C11.6037 12.4764 10.5314 13.2555 9.6542 12.7376L7.00065 11.171L4.3471 12.7376C3.4699 13.2555 2.39764 12.4764 2.61911 11.4821L3.28905 8.47433L0.979126 6.43476C0.215517 5.76052 0.62508 4.50001 1.63916 4.40338L4.70675 4.11108L5.93269 1.28395ZM8.22659 4.57418L7.00065 1.74705L5.77471 4.57418C5.60604 4.96315 5.23923 5.22965 4.81717 5.26987L1.74958 5.56218L4.0595 7.60175C4.37731 7.88236 4.51742 8.31357 4.42525 8.7274L3.75531 11.7352L6.40886 10.1686C6.77395 9.95304 7.22735 9.95304 7.59244 10.1686L10.246 11.7352L9.57605 8.7274C9.48388 8.31357 9.62399 7.88236 9.9418 7.60175L12.2517 5.56218L9.18413 5.26987C8.76207 5.22965 8.39526 4.96315 8.22659 4.57418Z"
        fill="#B3B7BC"
      />
    </svg>
  ));

  return <div className={props.className}>{stars}</div>;
};
const Clothes = ({ clothes }) => {
  const [menuActive, setMenuActive] = React.useState(false);
  const categories = React.useMemo(
    () => [...new Set(clothes?.map((n) => n.category))],
    [clothes]
  );

  const sizes = React.useMemo(
    () => [...new Set(clothes.map((n) => n.size))],
    [clothes]
  );
  const colors = React.useMemo(
    () => [...new Set(clothes.map((n) => n.color))],
    [clothes]
  );

  const materials = React.useMemo(
    () => [...new Set(clothes?.map((n) => n.material))],
    [clothes]
  );

  const [size, setSize] = React.useState([]);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize(
      !size.includes(value) && checked
        ? [...size, value]
        : size.filter((n) => n !== value)
    );
  };
  const [price, setPrice] = React.useState(["", ""]);
  const onPriceChange = ({
    target: {
      value,
      dataset: { index },
    },
  }) => {
    setPrice(price?.map((n, i) => (i === +index ? value : n)));
  };
  const [category, setCategory] = React.useState([]);
  const onCategoryChange = ({ target: { checked, value } }) => {
    setCategory(
      !category.includes(value) && checked
        ? [...category, value]
        : category.filter((n) => n !== value)
    );
  };
  const [color, setColor] = React.useState([]);
  const onColorChange = ({ target: { checked, value } }) => {
    setColor(
      !color.includes(value) && checked
        ? [...color, value]
        : color.filter((n) => n !== value)
    );
  };
  const [material, setMaterial] = React.useState([]);
  const onMaterialChange = ({ target: { checked, value } }) => {
    setMaterial(
      !material.includes(value) && checked
        ? [...material, value]
        : material.filter((n) => n !== value)
    );
  };

  return (
    <>
      <div className="c-clothes">
        <div className="c-clothes__wrapper">
          {/* <div className="c-clothes__breadcrumbs"></div> */}

          <div className="c-clothes__filter">
            <Filter
              headerText="Clothes"
              value={category}
              onChange={onCategoryChange}
              filters={categories}
            />
            <Filter
              headerText="Size"
              value={size}
              onChange={onSizeChange}
              filters={sizes}
            />
            <ColorFilter
              headerText="Color"
              value={color}
              onChange={onColorChange}
              filters={colors}
            />
            <Filter
              headerText="Material"
              value={material}
              onChange={onMaterialChange}
              filters={materials}
            />
            <PriceFilter
              headerText="Price"
              value={price}
              onChange={onPriceChange}
            />
          </div>

          <div className="c-clothes__clothe">
            <div
              className="c-clothe__show-filters"
              onClick={() => setMenuActive(!menuActive)}
            >
              Show filters
            </div>
            <div className={menuActive ? "c-filters active" : "c-filters"}>
              <div className="c-filters__wrapper">
                <div className="c-filters__header">
                  <h2 className="c-filters__title">Shop filters</h2>
                  <div
                    className="c-filters__close"
                    onClick={() => setMenuActive(false)}
                  >
                    ✕
                  </div>
                </div>
                <div className="c-filters__category-filter">
                  <Filter
                    headerText="Clothes"
                    value={category}
                    onChange={onCategoryChange}
                    filters={categories}
                  />
                  <Filter
                    headerText="Size"
                    value={size}
                    onChange={onSizeChange}
                    filters={sizes}
                  />
                  <ColorFilter
                    headerText="Color"
                    value={color}
                    onChange={onColorChange}
                    filters={colors}
                  />
                  <Filter
                    headerText="Material"
                    value={material}
                    onChange={onMaterialChange}
                    filters={materials}
                  />
                  <PriceFilter
                    headerText="Price"
                    value={price}
                    onChange={onPriceChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="c-clothe__swiper">
                {clothes
                  ?.filter(
                    (n) =>
                      (!category.length || category.includes(n.category)) &&
                      (!size.length || size.includes(n.size)) &&
                      (!color.length || color.includes(n.color)) &&
                      (!material.length || material.includes(n.material)) &&
                      (!price[0] || price[0] <= n.price) &&
                      (!price[1] || price[1] >= n.price)
                  )
                  .map((n, index) => (
                    <div key={n.id} className="c-clothe__slide">
                      {/* <div className="c-clothe"> */}
                      <div className="c-clothe__top">
                        <RatingStar
                          className={
                            "c-clothe__rating c-clothe__rating-" + index
                          }
                        />
                        <div
                          className={"c-clothe__sale c-clothe__sale-" + index}
                        >
                          -50%
                        </div>
                      </div>
                      <div className="c-clothe__item">
                        <img
                          className="c-clothe__img"
                          src={n.image}
                          alt="clothe"
                        ></img>
                        <div className="c-clothe__circle">
                          <img
                            src={wishHeart}
                            alt="wish"
                            className="c-clothe__wish"
                          ></img>
                        </div>

                        <div className="c-clothe__bottom">
                          <Link
                            to={"/clothes/" + n.link}
                            className="c-clothe__name"
                          >
                            {n.title}
                          </Link>
                          {/* <p className="c-clothe__name">{n.title}</p> */}

                          <div className="c-clothe__prices">
                            <div
                              className={
                                "c-clothe__actual c-clothe__actual-" + index
                              }
                            >
                              {"$" + n.price}
                            </div>
                            <div
                              className={"c-clothe__old c-clothe__old-" + index}
                            >
                              {"$" + n.oldPrice}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  ))}
              </div>
              {/* </Swiper> */}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};
export default Clothes;
