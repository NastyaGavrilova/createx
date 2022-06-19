import React from "react";
import { useState } from "react/cjs/react.production.min";

const CheckCategories = (props) => {
  const classes = ["c-blog__categories-btn"];
  if (props.button.changed) {
    classes.push("c-blog__categories-btn--active");
  }
  return (
    <label className="c-blog__categories-item">
      <input
        type="button"
        value={props.button.category}
        // onClick={onClick}
        className={classes.join(" ")}
        onClick={props.onStyle}
      />
      <span className="c-blog__categories-count">{2}</span>
    </label>
  );
};
class BlogCategories extends React.Component {
  constructor(props) {
    super(props);
    this.category = {
      arr: [],
    };
  }

  state = {
    buttons: [
      { changed: false, category: "Fashion" },
      { changed: false, category: "Celebrity Life" },
      { changed: false, category: "LifeStyle" },
      { changed: false, category: "Designers" },
    ],
  };

  onCategoryCnahge = (name) => {
    this.setCategory(
      !this.category.includes(this.button)
        ? [...this.category, this.button]
        : this.category.filter((n) => n !== this.button)
    );
  };
  handleStyle(name) {
    console.log(name);
    const buttons = this.state.buttons.concat();
    const button = buttons.find((c) => c.category === name);

    // checkbox.changed = !checkboxes.changed;
    if (button.changed === false) {
      button.changed = true;
    } else if (button.changed === true) {
      button.changed = false;
    }

    this.setState({ checkboxes: buttons });
  }
  renderCheckboxes() {
    return this.state.buttons.map((button) => {
      return (
        <CheckCategories
          button={button}
          key={button.category + Math.random()}
          onStyle={this.handleStyle.bind(this, button.category)}
        />
      );
    });
  }
  render() {
    return (
      <>
        <div className="c-blog__categories">{this.renderCheckboxes()}</div>
      </>
    );
  }
}

export default BlogCategories;
