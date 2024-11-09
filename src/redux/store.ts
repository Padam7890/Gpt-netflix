import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import user from "./slices/user";

//redux store here
const appstore = configureStore({
  reducer: {
    users:user
  },
});

export default appstore;
