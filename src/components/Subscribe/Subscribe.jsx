import React from "react";
import Titles from "../../elements/Titles/Titles";
import subscribe from "../../assets/subscribe.png";
import "./_subscribe.scss";

const Check = (props) => {
  const classes = ["c-subscribe-checkbox"];
  if (props.checkbox.changed) {
    classes.push("c-subscribe-checkbox--ative");
  }
  return (
    <div className={classes.join(" ")} onClick={props.onStyle}>
      {props.checkbox.name}
    </div>
  );
};

const CheckMark = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className="c-subscribe__check">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="c-subscribe__checkmark"></span>I agree to receive
      communications from Createx Store.
    </label>
  );
};
class Subscribe extends React.Component {
  state = {
    checkboxes: [
      { changed: false, name: "Women" },
      { changed: false, name: "Men" },
      { changed: false, name: "Girls" },
      { changed: false, name: "Boys" },
    ],
  };
  handleStyle(name) {
    console.log(name);
    const checkboxes = this.state.checkboxes.concat();
    const checkbox = checkboxes.find((c) => c.name === name);
    // checkbox.changed = !checkboxes.changed;
    if (checkbox.changed === false) {
      checkbox.changed = true;
    } else if (checkbox.changed === true) {
      checkbox.changed = false;
    }

    this.setState({ checkboxes: checkboxes });
  }
  renderCheckboxes() {
    return this.state.checkboxes.map((checkbox) => {
      return (
        <Check
          checkbox={checkbox}
          key={checkbox.name + Math.random()}
          onStyle={this.handleStyle.bind(this, checkbox.name)}
        />
      );
    });
  }
  render() {
    return (
      <>
        <div className="c-subscribe">
          <div className="c-subscribe__wrapper">
            <div className="c-subscribe__left">
              <div className="c-subscribe__title">
                <Titles title_name="Subscribe for updates" />
              </div>
              <p className="c-subscribe__description">
                Subscribe for exclusive early sale access and new arrivals.
              </p>
              <div className="c-subscribe__checkboxes">
                {this.renderCheckboxes()}
              </div>
              <form className="c-subscribe__form">
                <label className="c-subscribe__label">Email</label>
                <div className="c-subscribe__inp-btn">
                  <input
                    className="c-subscribe__input"
                    type="email"
                    placeholder="Your working email"
                  ></input>
                  <button className="c-subscribe__btn">Subscribe</button>
                </div>
              </form>
              <CheckMark />
            </div>
            <div className="c-subscribe__right">
              <img
                className="c-subscribe__img"
                src={subscribe}
                alt="subscribe"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscribe;
