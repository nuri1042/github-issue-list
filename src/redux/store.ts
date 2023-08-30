import { configureStore } from "@reduxjs/toolkit";
import issueReducer from "./issueSlice";

export const store = configureStore({
  reducer: {
    issueList: issueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
