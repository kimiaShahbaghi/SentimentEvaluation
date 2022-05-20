import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { skip, previous } from "../features/textSlice";
import "./Footer.scss";
import RightFlag from "../assest/right.png";
import LeftFlag from "../assest/left.png";
function Footer() {
  const step = useSelector((state) => state.textReducer.step);
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button onClick={() => dispatch(previous())} disabled={!step}>
        <span>Previous</span>
        <img src={LeftFlag} />
      </button>
      <button
        onClick={() => dispatch(skip())}
        disabled={step == 5 ? true : false}
      >
        <span>Skip</span>
        <img src={RightFlag} />
      </button>
    </div>
  );
}

export default Footer;
