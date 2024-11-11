import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import user from "./slices/user";
import movie from "./slices/movie";

// Configure the Redux store
const appStore = configureStore({
  reducer: {
    users: user,
    movies: movie,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default appStore;
