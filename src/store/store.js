import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/textSlice";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { helloSaga } from "../features/sentimentEvalution/Saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(textReducer, applyMiddleware(sagaMiddleware));

// export const store = configureStore({
//   reducer: {
//     textReducer,
//   },
// });

sagaMiddleware.run(helloSaga);
