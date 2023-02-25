import siteReducer from "./site";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  site: siteReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
