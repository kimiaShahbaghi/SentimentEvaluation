import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextHandler,
  previousHandler,
} from "../features/sentimentEvalution/actions";
import "./Footer.scss";
import RightFlag from "../assest/right.png";
import LeftFlag from "../assest/left.png";
function Footer() {
  const step = useSelector((state) => state.myReducer.step);
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button onClick={() => dispatch(previousHandler())} disabled={!step}>
        <span>Previous</span>
        <img src={LeftFlag} />
      </button>
      <button
        onClick={() => dispatch(nextHandler())}
        disabled={step == 100 ? true : false}
      >
        <span>Skip</span>
        <img src={RightFlag} />
      </button>
    </div>
  );
}

export default Footer;
