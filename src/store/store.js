import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../features/sentimentEvalution/reducer";

import createSagaMiddleware from "redux-saga";
import mySaga from "../features/sentimentEvalution/Saga";

const sagaMiddleware = createSagaMiddleware();

//export const store = createStore(textReducer, applyMiddleware(sagaMiddleware));

export const store = configureStore({
  reducer: {
    myReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);
