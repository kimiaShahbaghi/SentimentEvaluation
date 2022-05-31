import "./Sentiment.scss";
import "../../../src/App.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { getUsersFetch, postData } from "./actions";
import { sentimentHandler } from "./sentimentSlice";
import { useEffect } from "react";
import { result, Loading, stateData } from "./sentimentSlice";

function Sentiment() {
  const dispatch = useDispatch();
  const data = useSelector(stateData);
  const finalResult = useSelector(result);
  const isLoading = useSelector(Loading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  console.log("isLoading", isLoading);
  console.log("input array", data);
  console.log("result", finalResult);

  return (
    <>
      {isLoading && <p> please wait </p>}
      {!isLoading && (
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
                onClick={() => {
                  dispatch(postData());
                  dispatch(sentimentHandler(1));
                }}
              ></button>
              <button
                id="poker"
                onClick={() => {
                  dispatch(postData());
                  dispatch(sentimentHandler(2));
                }}
              ></button>
              <button
                id="happy"
                onClick={() => {
                  dispatch(postData());
                  dispatch(sentimentHandler(3));
                }}
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
