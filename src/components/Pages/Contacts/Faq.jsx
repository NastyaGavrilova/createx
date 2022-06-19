import React from "react";
import { useState } from "react";
import "./_faq.scss";

const Faq = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const question = [
    "Do I need to register to place an order?",
    "What is the estimated delivery time?",
    "How can I pay for my order?",
    "Can I get a refund if the price has changed since I ordered it?",
    "Do you refund delivery charges if I return something?",
    "What documents will be provided with the order?",
    "Can I return the order to the courier if anything does not suit me?",
    "What should I do if my order hasn't been delivered yet?",
    "What is your Returns Policy?",
  ];
  const answer =
    "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.";
  const questions = Array.from({ length: 9 }).map((el, index) => (
    <div className="c-faq__question" key={"c-faq__question" + Math.random()}>
      <div className="c-faq__question__wrapper">
        <p className="c-faq__question-text">{question[`${index}`]}</p>
        <div
          className={
            toggleState === index
              ? "c-faq__questions-show"
              : "c-faq__questions-hide"
          }
          onClick={() => toggleTab(index)}
        ></div>
      </div>
      <div
        className={
          toggleState === index ? "c-faq__answers-show" : "c-faq__answers-hide"
        }
      >
        <p className="c-faq__answer">{answer}</p>
      </div>
      <div className={"c-faq__divider c-faq__divider-" + index}></div>
    </div>
  ));

  return (
    <>
      <div className="c-faq">
        <div className="c-faq__wrapper">{questions}</div>
      </div>
    </>
  );
};
export default Faq;
