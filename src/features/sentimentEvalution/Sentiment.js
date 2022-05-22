import React, { useSelector, useDispatch } from "react-redux";
import { emotionHandler } from "../textSlice";
import "./Sentiment.scss";
import "../../../src/App.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Sentiment() {
  const myArray = useSelector((state) => state.textReducer.text);
  const step = useSelector((state) => state.textReducer.step);
  console.log(step);
  console.log(myArray);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <div className="sentiment">
        <div className="content">
          <p className="question">
            what kind of emotion is expressed in the text below?
          </p>
          <p className="answer">{myArray[step].text}</p>
        </div>
        <div className="rating">
          <button
            id="sad"
            value="sad"
            onClick={() => dispatch(emotionHandler("sad"))}
          ></button>
          <button
            id="poker"
            value="poker"
            onClick={() => dispatch(emotionHandler("poker"))}
          ></button>
          <button
            id="happy"
            value="happy"
            onClick={() => dispatch(emotionHandler("happy"))}
          ></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sentiment;

// const myRef = useRef(DUMMY_ARRAY);
// const happyHandler = () => {
//   myRef.current[0].userValue = "happy";
// };
// const sadHandler = (prevState) => setState({ text: "hi", userValue: "sad" });
