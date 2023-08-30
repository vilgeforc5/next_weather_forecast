import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { searchHistoryPersistentReducer } from "./features/searchHistory/searchHistorySlice";
import { currentLocationReducer } from "./features/currentLocation/currentLocationSlice";
import { forecastApi } from "./services/weatherForecast/weatherForecastApi";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducersCombined = combineReducers({
  searchHistoryPersistent: searchHistoryPersistentReducer,
  currentLocation: currentLocationReducer,
  [forecastApi.reducerPath]: forecastApi.reducer
});
const persistedReducer = persistReducer(
  {
    key: "root",
    storage: storage,
    whitelist: ["searchHistoryPersistent", "currentLocation"],
  },
  reducersCombined
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(forecastApi.middleware),
});

export default store;
export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
