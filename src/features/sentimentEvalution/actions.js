import { createAction } from "@reduxjs/toolkit";

export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsersFetch = createAction("GET_USERS_FETCH");
export const userHandler = createAction("USER_HANDLER");
export const previousHandler = createAction("PREVIOUS_HANDLER");
