import { configureStore } from "@reduxjs/toolkit";
import { timeLogReducer } from "@/lib/store/features/time_tracker/timeLogSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add reducers here
      timeLog: timeLogReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
