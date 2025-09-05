import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReduce from "./counterSlice";
import userReduce from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const configPersist = {
  key: "root",
  storage,
  whitelist: ["user", "counter"],
};

const rootReduc = combineReducers({
  counter: counterReduce,
  user: userReduce,
});

const persistedReduc = persistReducer(configPersist, rootReduc);

export const store = configureStore({
  reducer: persistedReduc,
});
export const persistor = persistStore(store);
