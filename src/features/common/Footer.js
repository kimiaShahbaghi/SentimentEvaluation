import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postData } from "../sentimentEvalution/actions";
import { sentimentHandler } from "../sentimentEvalution/sentimentSlice";
import "./Footer.scss";

import RightFlag from "../../assest/right.png";
import LeftFlag from "../../assest/left.png";

function Footer() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.sentimentReducer.step);

  return (
    <div className="footer">
      <button
        onClick={() => {
          dispatch(sentimentHandler(-1));
          dispatch(postData());
        }}
        disabled={!step}
      >
        <span>Previous</span>
        <img src={LeftFlag} alt="leftFlag" />
      </button>
      <button
        onClick={() => {
          dispatch(sentimentHandler(0));
          dispatch(postData());
        }}
      >
        <span>Skip</span>
        <img src={RightFlag} alt="rightFlag" />
      </button>
    </div>
  );
}

export default Footer;
