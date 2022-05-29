import { configureStore } from "@reduxjs/toolkit";
// import sentimentReducer from "../features/sentimentEvalution/reducer";
import sentimentReducer from "../features/sentimentEvalution/sentimentSlice";
import createSagaMiddleware from "redux-saga";
import mySaga from "../features/sentimentEvalution/Saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    sentimentReducer,
    // sentimentReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
