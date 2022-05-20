import React, { useSelector, useDispatch } from "react-redux";
import { happyHandler, sadHandler, pokerHandler } from "../features/textSlice";
import "./Main.scss";

function Main() {
  const myArray = useSelector((state) => state.textReducer.text);
  const step = useSelector((state) => state.textReducer.step);
  console.log(step);
  console.log(myArray);
  const dispatch = useDispatch();

  return (
    <div className="main">
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
          onClick={() => dispatch(sadHandler())}
        ></button>
        <button
          id="poker"
          value="poker"
          onClick={() => dispatch(pokerHandler())}
        ></button>
        <button
          id="happy"
          value="happy"
          onClick={() => dispatch(happyHandler())}
        ></button>
      </div>
    </div>
  );
}

export default Main;

// const myRef = useRef(DUMMY_ARRAY);
// const happyHandler = () => {
//   myRef.current[0].userValue = "happy";
// };
// const sadHandler = (prevState) => setState({ text: "hi", userValue: "sad" });
