//TODO userResult reducer
import "./Sentiment.scss";
import "../../../src/App.scss";

import React, { useSelector, useDispatch } from "react-redux";
import { nextHandler } from "./actions";
import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Sentiment() {
  const inputArray = useSelector((state) => state.myReducer.users);
  const step = useSelector((state) => state.myReducer.step);
  console.log("step", step);
  console.log("myarray", inputArray);
  const dispatch = useDispatch();

  const [finalState, setFinalState] = useState({});

  const userHandler = (value) => {
    dispatch(nextHandler());
    const userInput = { ...inputArray[step], userValue: value };
    setFinalState({ userInput });
  };
  console.log("final array", finalState);

  return (
    <div className="App">
      <Header />
      <div className="sentiment">
        <div className="content">
          <p className="question">
            what kind of emotion is expressed in the text below?
          </p>
          <p className="answer">{inputArray[step].title}</p>
        </div>
        <div className="rating">
          <button id="sad" value="sad" onClick={() => userHandler(1)}></button>
          <button
            id="poker"
            value="poker"
            onClick={() => userHandler(2)}
          ></button>
          <button
            id="happy"
            value="happy"
            onClick={() => userHandler(3)}
          ></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sentiment;
