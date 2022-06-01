import "./Sentiment.scss";
import "../../../src/App.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { getUsersFetch, postData } from "./actions";
import { useEffect } from "react";
import { selectLoading, selectQuestion } from "./sentimentSlice";

function Sentiment() {
  const dispatch = useDispatch();

  const question = useSelector(selectQuestion);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getUsersFetch());
    }
  }, [isLoading]);

  console.log("isLoading", isLoading);
  console.log("input array", question);

  const getSendData = (sentiment) => {
    return {
      questionId: question.id,
      sentiment: sentiment,
    };
  };

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
              <p className="answer">{question.title}</p>
            </div>
            <div className="rating">
              <button
                id="sad"
                onClick={() => {
                  dispatch(postData(getSendData(1)));
                }}
              ></button>
              <button
                id="poker"
                onClick={() => {
                  dispatch(postData(getSendData(2)));
                }}
              ></button>
              <button
                id="happy"
                onClick={() => {
                  dispatch(postData(getSendData(3)));
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
