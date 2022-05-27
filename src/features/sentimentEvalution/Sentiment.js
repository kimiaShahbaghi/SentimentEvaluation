import "./Sentiment.scss";
import "../../../src/App.scss";

import React, { useSelector, useDispatch } from "react-redux";
import { getUsersFetch, userHandler } from "./actions";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Sentiment() {
  const dispatch = useDispatch();
  const inputArray = useSelector((state) => state.sentimentReducer.users);
  const step = useSelector((state) => state.sentimentReducer.step);
  const data = useSelector((state) => state.sentimentReducer.users);
  const result = useSelector((state) => state.sentimentReducer.result);

  console.log("step", step);
  console.log("myarray", inputArray);
  console.log("final array", result);

  return (
    <>
      {data.length === 0 && (
        <button onClick={() => dispatch(getUsersFetch())}> get data</button>
      )}

      {data.length !== 0 && (
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
              <button
                id="sad"
                onClick={() => dispatch(userHandler(1))}
              ></button>
              <button
                id="poker"
                onClick={() => dispatch(userHandler(2))}
              ></button>
              <button
                id="happy"
                onClick={() => dispatch(userHandler(3))}
              ></button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Sentiment;
