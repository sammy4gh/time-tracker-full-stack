import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeLog } from "@/types/time_tracker_types";

type InitialState = {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  projectId: number;
};

const initialState: InitialState = {
  name: "",
  date: new Date().toISOString(),
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
  projectId: 1,
};

const timeLogSlice = createSlice({
  name: "timeTracker",
  initialState: initialState,
  reducers: {
    updateTimeLogState(state, action: PayloadAction<InitialState>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateTimeLogState } = timeLogSlice.actions;

export const timeLogReducer = timeLogSlice.reducer;

export default timeLogSlice.reducer;
