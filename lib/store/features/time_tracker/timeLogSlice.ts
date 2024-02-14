import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeLog } from "@/types/time_tracker_types";

type Status = "editing" | "creating" | "viewing" | "deleting" | "duplicating";
type TimeLogState = {
  id?: number;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  projectId: number;
};
type InitialState = {
  status: Status;
  timeLog: TimeLogState;
};

const initialState: InitialState = {
  status: "creating",
  timeLog: {
    name: "",
    date: new Date().toISOString(),
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
    projectId: 1,
  },
};

const timeLogSlice = createSlice({
  name: "timeTracker",
  initialState: initialState,
  reducers: {
    updateTimeLogState(state, action: PayloadAction<TimeLogState>) {
      Object.assign(state.timeLog, action.payload);
    },
    updateStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

export const { updateTimeLogState, updateStatus } = timeLogSlice.actions;

export const timeLogReducer = timeLogSlice.reducer;

export default timeLogSlice.reducer;
