import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import productsReducer from "./products";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
