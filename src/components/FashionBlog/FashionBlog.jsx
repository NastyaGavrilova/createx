import React from "react";
import Titles from "../../elements/Titles/Titles";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import chat from "../../assets/chat.svg";
import "./_fashionBlog.scss";
const FashionBlog = () => {
  const blogsImages = [blog1, blog2];
  const blogTitle = [
    "Bag Trends for Summer 2020",
    "Top 10 of This Season’s Hottest Sneakers",
  ];

  const theme = ["Fashion", "Lifestyle"];
  const data = ["August 24, 2020", "July 16, 2020"];
  const comments = ["No comments", "4 comments"];
  const blogInformation = [
    "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...",
    "Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...",
  ];

  const blogs = Array.from({ length: 2 }).map((el, index) => (
    <div
      key={`blog-item-${index}`}
      className={"c-fashion-blog-item c-fashion-blog-item-" + index}
    >
      <div className="c-fashion-blog-item__wrapper">
        <div className="c-fashion-blog-item__img">
          <img
            className="e-fashion-blog-item__img"
            src={blogsImages[`${index}`]}
            alt="blog"
          ></img>
        </div>
        <div className="c-fashion-blog-item__information">
          <h6 className="c-fashion-blog-item__title">
            {blogTitle[`${index}`]}
          </h6>
          <div className="c-fashion-blog-item__sections">
            <p className="c-fashion-blog-item__theme c-fashion-blog-item__text">
              {theme[`${index}`]}
            </p>
            <div className="c-fashion-blog-item__devider"></div>
            <p className="c-fashion-blog-item__data c-fashion-blog-item__text">
              {data[`${index}`]}
            </p>
            <div className="c-fashion-blog-item__devider"></div>
            <div className="c-fashion-blog-item__comments">
              <img
                className="e-fashion-blog-item__chat"
                src={chat}
                alt="chat"
              ></img>
              <p className="c-fashion-blog-item__comment c-fashion-blog-item__text">
                {comments[`${index}`]}
              </p>
            </div>
          </div>
          <div className="c-fashion-blog-item__paragraphs">
            <p className="c-fashion-blog-item__paragraph">
              {blogInformation[`${index}`]}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c-fashion-blog">
        <div className="c-fashion-blog__wrapper">
          <div className="c-fashion-blog__title">
            <Titles title_name="Fashion blog" />
            <div className="c-fashion-blog__button">View blog</div>
          </div>
          <div className="c-fashion-blog__blogs">{blogs}</div>
        </div>
      </div>
    </>
  );
};
export default FashionBlog;
