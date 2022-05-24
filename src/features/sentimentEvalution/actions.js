import { createAction } from "@reduxjs/toolkit";

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const NEXT_HANDLER = "NEXT_HANDLER";
export const PREVIOUS_HANDLER = "PREVIOUS_HANDLER";
export const USER_RESULT = "USER_RESULT";
export const userHandler = createAction("USER_HANDLER");
export const getUsersFetch = createAction("GET_USERS_FETCH");
export const nextHandler = createAction(NEXT_HANDLER);
export const userResult = createAction(USER_RESULT);
export const previousHandler = createAction("PREVIOUS_HANDLER");
