import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import { Swiper } from "swiper/react";
// import { Swiper } from "swiper/react";
import com from "../../../assets/comments.svg";
import "./_blog.scss";
import "swiper/css";
import "swiper/css/pagination";
// import { useState } from "react/cjs/react.production.min";
// import BlogCategories from "./BlogCategories";

const Block = ({
  HeaderTag = "h2",
  classNam,
  headerText,
  className = "",
  children,
}) => (
  <div className={className}>
    <HeaderTag className={classNam}>{headerText}</HeaderTag>
    {children}
  </div>
);

const CategoryFilter = (props) => {
  return (
    <Block
      headerText="Blog Categories"
      className="c-blog__categories"
      HeaderTag="h4"
      classNam="c-blog__categories-title"
    >
      {props.categories?.map((n, index) => (
        <>
          <label
            className="c-blog__categories-item"
            key={"key-category-" + index}
          >
            <input
              type="checkbox"
              value={n}
              checked={props.value.includes(n)}
              onChange={props.onChange}
              className="c-blog__categories-checkbox"
            />

            <span className="c-blog__categories-text">{n}</span>
          </label>
        </>
      ))}
    </Block>
  );
};

const Blog = ({ blogs }) => {
  const categories = React.useMemo(
    () => [...new Set(blogs.map((n) => n.category))],
    [blogs]
  );
  const [category, setCategory] = React.useState([]);

  const onCategoryChange = ({ target: { checked, value } }) => {
    setCategory(
      !category.includes(value) && checked
        ? [...category, value]
        : category.filter((n) => n !== value)
    );
  };

  return (
    <>
      <div className="c-blog">
        <div className="c-blog__wrapper">
          <div className="c-blog__title">
            <h2 className="e-blog__title">Fashion blog</h2>
          </div>
          <div className="c-blog__blogs">
            <div>
              <Swiper
                className="c-blog__swiper"
                pagination={{
                  clickable: true,
                }}
                direction={"vertical"}
                modules={[Pagination]}
                slidesPerView={4}
                spaceBetween={60}
                onSwiper={(blogSwiper) => {
                  console.log(blogSwiper);
                }}
                onSlideChange={() => console.log("blog slide change")}
              >
                {blogs
                  .filter(
                    (n) => !category.length || category.includes(n.category)
                  )
                  .map((n) => (
                    <SwiperSlide key={n.id} className="c-blogs-slide">
                      <div className="c-blogs">
                        <div className="c-blogs__item">
                          <img
                            className="c-blogs__img"
                            src={n.image}
                            alt="blog"
                          ></img>
                          <div className="c-blogs__meta">
                            <p className="c-blogs__category">{n.category}</p>
                            <div className="c-blogs__divider"></div>
                            <p className="c-blogs__datetime">{n.datetime}</p>
                            <div className="c-blogs__divider"></div>
                            <div className="c-blogs__comments">
                              <img
                                className="c-blogs__comments-icon"
                                src={com}
                                alt="comment"
                              ></img>
                              <p className="c-blogs__comments-count">
                                {n.comments}
                              </p>
                            </div>
                          </div>
                          <Block
                            className="c-blogs__block"
                            classNam="c-blogs__title"
                            HeaderTag="h3"
                            headerText={n.title}
                          >
                            <p className="c-blogs__description">{n.descr}</p>
                          </Block>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div>
              <CategoryFilter
                value={category}
                onChange={onCategoryChange}
                categories={categories}
              />
            </div>

            {/* <BlogCategories /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
