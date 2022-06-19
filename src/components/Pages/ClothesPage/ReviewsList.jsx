import React from "react";
import "./_reviewsList.scss";
import "./_reviews.scss";
const RatingStar = (props) => {
  const stars = Array.from({ length: 5 }).map((el, index) => (
    <svg
      className={"c-reviews__rating-star c-reviews__rating-star-" + index}
      key={"c-general-info-ratinghihi" + index}
      width="12"
      height="11"
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

  return <div className="c-reviews__rating-items">{stars}</div>;
};

const ProgressBar = (props) => {
  return (
    <>
      <div className="c-progressbar">
        <div className="c-progressbar__rate">
          <p className="c-progressbar__rate-count">{props.rate}</p>
          <svg
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
        </div>
        <div className={props.className}>
          <div className={props.classNameValue}></div>
        </div>
      </div>
    </>
  );
};
class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: true,
      // modal: false,
      comments: [
        {
          id: 0,
          author: "Devon Lane",
          date: "July 15, 2020",
          body: "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.",
          like: 2,
          dislike: 0,
          rating: 5,
        },
        {
          id: 1,
          author: "Annette Black",
          date: "1 day ago",
          body: " Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.",
          like: 2,
          dislike: 1,
          rating: 4,
        },
        {
          id: 2,
          author: "Albert Flores",
          date: "July 7, 2020",
          body: " Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.",
          like: 0,
          dislike: 3,
          rating: 1,
        },
        {
          id: 3,
          author: "Marvin McKinney",
          date: "June 28, 2020",
          body: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
          like: 3,
          dislike: 0,
          rating: 5,
        },
      ],
    };
  }
  counters = ["5", "4", "3", "2", "1"];
  state = { show: false };
  classNamesValue = [
    "c-progressbar__line-value-0",
    "c-progressbar__line-value-1",
    "c-progressbar__line-value-2",
    "c-progressbar__line-value-3",
    "c-progressbar__line-value-4",
  ];

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const comments = this._getComments();
    let commentNodes = <div className="comment-list">{comments}</div>;

    return (
      <div className="c-reviews">
        <div className="c-reviews__wrapper">
          <div className="c-reviews__info">
            <div className="c-reviews__info-left">
              <h3 className="c-reviews__info-title">
                {this._getCommentsTitle(comments.length) + " reviews"}
              </h3>
              <RatingStar />
              <p className="c-reviews__info-descr">
                9 out of 12 (75%) Customers recommended this product
              </p>
            </div>
            <div className="c-reviews__info-right">
              {Array.from({ length: 5 }).map((el, index) => (
                <ProgressBar
                  key={"c-reviews__info-right" + Math.random()}
                  rate={this.counters[`${index}`]}
                  className={"c-progressbar__line"}
                  classNameValue={this.classNamesValue[`${index}`]}
                />
              ))}
            </div>
          </div>
          <div className="c-comment-box">
            <button
              onClick={this.showModal}
              className="c-comment-box__leave-comm-btn"
            >
              Leave review
            </button>{" "}
            <CommentForm
              addComment={this._addComment.bind(this)}
              show={this.state.show}
              onClick={this.hideModal.bind(this)}
            />
            {/* <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button> */}
            {commentNodes}
          </div>
        </div>
      </div>
      //
    );
  } // end render

  _addComment(author, body, rating) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body,
      rating,
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }
  onLike(index, e) {
    let comments = [...this.state.comments];
    comments[index] = Object.assign({}, comments[index], {
      like: e.target.like + 1,
    });
    this.setState({ comments });
    // if (this.state.comments.id === index)
    // }
    // this.setState({ comments: this.state.like + 1 });
    // console.log({ like: this.state.like + 1 });
  }
  _getComments() {
    return this.state.comments.map((comment, index) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          rating={comment.rating}
          like={comment.like}
          dislike={comment.dislike}
          key={"like" + comment.id}
          id={comment.id}
          onClick1={this.onLike.bind(this, index)}
        />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} `;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <>
        <div
          className={
            this.props.show ? "c-modal-review open" : "c-modal-review close"
          }
        >
          <div className="c-modal-review__wrapper">
            <div onClick={this.props.onClick} className="c-modal-review__close">
              ✕
            </div>
            <h3 className="c-modal-review__title">Leave a review</h3>
            <form
              onSubmit={this._handleSubmit.bind(this)}
              className="c-modal-review__form"
            >
              <label className="c-modal-review__form-field">
                <span className="c-modal-review__form-field-label">Name</span>
                <input
                  placeholder="Your name"
                  required
                  ref={(input) => (this._author = input)}
                  className="c-modal-review__form-input"
                ></input>
              </label>

              <label className="c-modal-review__form-field">
                <span className="c-modal-review__form-field-label">Email</span>
                <input
                  placeholder="Your working email"
                  required
                  ref={(input) => (this._email = input)}
                  className="c-modal-review__form-input"
                ></input>
              </label>

              <label className="c-modal-review__form-field">
                <span className="c-modal-review__form-field-label">Rating</span>
                <input
                  placeholder="Enter rating"
                  required
                  ref={(input) => (this._rating = input)}
                  className="c-modal-review__form-input"
                ></input>
              </label>
              <label className="c-modal-review__form-field-textarea">
                <span className="c-modal-review__form-field-label">Review</span>
                <textarea
                  placeholder="Your review"
                  rows="5"
                  required
                  ref={(textarea) => (this._body = textarea)}
                  className="c-modal-review__form-textarea"
                ></textarea>
              </label>
              <button type="submit" className="c-modal-review__form-btn">
                Submit review
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } // end render

  _handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading on submit
    let author = this._author;
    let rating = this._rating;
    let email = this._email;
    let body = this._body;
    this.props.addComment(author.value, body.value, rating.value);
  }
} // end CommentForm component

class Comment extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     likes: 1,
  //     dislikes: 0,
  //   };
  // }

  onLike() {}
  render() {
    return (
      <>
        <div className="c-comment">
          <div className="c-comment__user-info">
            <h4 className="c-comment__user-name">{this.props.author}</h4>
            <div className="c-comment__user-rating">
              <p className="c-comment__user-rating-count">
                {this.props.rating}
              </p>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="#F89828"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.93074 1.28395C6.33601 0.349362 7.66139 0.349361 8.06665 1.28395L9.29259 4.11107L12.3602 4.40338C13.3743 4.50001 13.7838 5.76052 13.0202 6.43476L10.7103 8.47433L11.3802 11.4821C11.6017 12.4764 10.5295 13.2555 9.65225 12.7376L6.9987 11.171L4.34515 12.7376C3.46794 13.2555 2.39569 12.4764 2.61716 11.4821L3.2871 8.47433L0.977173 6.43476C0.213564 5.76052 0.623127 4.50001 1.63721 4.40338L4.7048 4.11108L5.93074 1.28395Z"
                  fill="#F89828"
                />
              </svg>
            </div>
          </div>
          <div className="c-comment__user-review">
            <div className="c-comment__user-review--text">
              {this.props.body}
            </div>
            <div className="c-comment__user-review-dislike-like">
              <div className="c-comment__user-review-vote">
                <div className="c-comment__user-review-likes">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="#03CEA4"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.props.onCLick1}
                    id={this.props.id}
                    // onClick={() =>
                    //   this.setState({ comments: this.props.likes + 1 })
                    // }
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.45324 1.66634C9.36022 1.66634 9.274 1.71578 9.22696 1.79638L9.22286 1.80341L6.16536 6.76018V13.333H11.8892C12.0121 13.333 12.1183 13.2477 12.1449 13.128L12.1472 13.1176L13.8472 6.47785C13.8783 6.31692 13.755 6.16634 13.59 6.16634H10.9987C10.5646 6.16634 10.1253 6.0213 9.80549 5.70916C9.46928 5.38101 9.31341 4.91106 9.41344 4.40475L9.89267 1.97903C9.92467 1.81708 9.80073 1.66634 9.63578 1.66634H9.45324ZM4.83203 13.333V7.23777H2.46972C2.32593 7.23777 2.20893 7.35378 2.20782 7.49774C2.20782 7.49775 2.20782 7.49774 2.20782 7.49774L2.16537 13.0692C2.16426 13.2144 2.2818 13.333 2.42721 13.333H4.83203ZM5.12663 5.90444L8.08008 1.11634C8.36696 0.63124 8.88885 0.333008 9.45324 0.333008H9.63578C10.6409 0.333008 11.3955 1.25139 11.2007 2.23746L10.7215 4.66317C10.713 4.70634 10.7185 4.72596 10.7198 4.73026C10.7213 4.73506 10.7246 4.74304 10.7368 4.75498C10.7647 4.7822 10.8477 4.83301 10.9987 4.83301H13.59C14.6107 4.83301 15.3686 5.77825 15.1473 6.77441L15.1449 6.78481L13.4438 13.429C13.2773 14.1528 12.6328 14.6663 11.8892 14.6663H2.42721C1.54152 14.6663 0.825291 13.9447 0.832079 13.059C0.832079 13.059 0.832079 13.059 0.832079 13.059L0.874528 7.48757C0.881245 6.61137 1.59339 5.90444 2.46972 5.90444H5.12663Z"
                      fill="#03CEA4"
                    />
                  </svg>
                  <p className="c-comment__user-review-counter">
                    {this.props.like}
                    {/* {this.state.likes} */}
                  </p>
                </div>
                <div className="c-comment__user-review-dislikes">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="#FF4242"
                    xmlns="http://www.w3.org/2000/svg"
                    // onClick={() =>
                    //   this.setState({ dislikes: this.state.dislikes + 1 })
                    // }
                    onClick={this.props.onCLick2}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.5663 13.3337C6.65931 13.3337 6.74553 13.2842 6.79257 13.2036L6.79667 13.1966L9.85417 8.23982L9.85417 1.66699L4.13029 1.66699C4.00747 1.66699 3.90125 1.75225 3.87464 1.87199L3.87232 1.88239L2.17235 8.52213C2.1412 8.68307 2.26454 8.83366 2.42951 8.83366L5.02083 8.83366C5.45495 8.83366 5.89423 8.9787 6.21404 9.29084C6.55025 9.61899 6.70612 10.0889 6.60609 10.5953L6.12686 13.021C6.09486 13.1829 6.2188 13.3337 6.38375 13.3337L6.5663 13.3337ZM11.1875 1.66699L11.1875 7.76223L13.5498 7.76223C13.6936 7.76223 13.8106 7.64622 13.8117 7.50226C13.8117 7.50225 13.8117 7.50226 13.8117 7.50226L13.8542 1.93085C13.8553 1.78555 13.7377 1.66699 13.5923 1.66699L11.1875 1.66699ZM10.8929 9.09556L7.93945 13.8837C7.65257 14.3688 7.13068 14.667 6.5663 14.667L6.38375 14.667C5.37861 14.667 4.62399 13.7486 4.81881 12.7625L5.29804 10.3368C5.30657 10.2937 5.30104 10.274 5.29971 10.2697C5.29823 10.2649 5.29497 10.257 5.28274 10.245C5.25485 10.2178 5.17182 10.167 5.02083 10.167L2.42951 10.167C1.40886 10.167 0.650896 9.22174 0.872281 8.22559L0.87459 8.21518L2.57573 1.57094C2.74227 0.847205 3.38674 0.333657 4.13029 0.333657L13.5923 0.333658C14.478 0.333658 15.1942 1.05528 15.1875 1.941C15.1875 1.94102 15.1875 1.94099 15.1875 1.941L15.145 7.51243C15.1383 8.38863 14.4261 9.09556 13.5498 9.09556L10.8929 9.09556Z"
                      fill="#FF4242"
                    />
                  </svg>
                  <p className="c-comment__user-review-counter">
                    {/* {this.state.dislikes} */}
                    {this.props.dislike}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-comment__divider"></div>
      </>
    );
  }
}

export default CommentBox;
