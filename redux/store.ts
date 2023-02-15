import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

//@ts-ignore
import storage from "redux-persist/lib/storage";

import productsReducer from "./products";
import usersReducer from "./users";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const usersPersistedReducer = persistReducer(persistConfig, usersReducer);
const productsPersistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: productsPersistedReducer,
    users: usersPersistedReducer,
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

export const persistor = persistStore(store);
