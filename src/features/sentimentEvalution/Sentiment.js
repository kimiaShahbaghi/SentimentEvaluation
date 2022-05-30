import "./Sentiment.scss";
import "../../../src/App.scss";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { getUsersFetch, getInputRandom } from "./actions";
import { sentimentHandler } from "./sentimentSlice";
import { useEffect } from "react";

function Sentiment() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sentimentReducer.input);
  const result = useSelector((state) => state.sentimentReducer.result);
  const step = useSelector((state) => state.sentimentReducer.step);

  console.log("from sentiment random input:", data);

  let isLoading = true;

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [step]);

  // useEffect(() => {
  //   dispatch(getUsersFetch());
  // }, [step]);

  console.log("input array", data);
  console.log("result", result);
  return (
    <>
      {data.length === 0 && <p> please wait </p>}
      {data.length !== 0 && (
        <div className="App">
          <Header />
          <div className="sentiment">
            <div className="content">
              <p className="question">
                what kind of emotion is expressed in the text below?
              </p>
              <p className="answer">{data.title}</p>
            </div>
            <div className="rating">
              <button
                id="sad"
                onClick={() => dispatch(sentimentHandler(1))}
              ></button>
              <button
                id="poker"
                onClick={() => dispatch(sentimentHandler(2))}
              ></button>
              <button
                id="happy"
                onClick={() => dispatch(sentimentHandler(3))}
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
