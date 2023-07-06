"use client";

import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./features/user-slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
