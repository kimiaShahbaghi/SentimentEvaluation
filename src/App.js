import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import Sentiment from "./features/sentimentEvalution/Sentiment";
import { getUsersFetch } from "../src/features/sentimentEvalution/actions";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myReducer.users);
  console.log("from app , users are :", data);
  return (
    <>
      {data.length == 0 && (
        <button onClick={() => dispatch(getUsersFetch())}> get data</button>
      )}
      {data.length !== 0 && <Sentiment />}
    </>
  );
}

export default App;
