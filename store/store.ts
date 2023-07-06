"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import rootReducer from "./reducer";

// config the store
const store = configureStore({
  reducer: rootReducer,
});

// get the State type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
