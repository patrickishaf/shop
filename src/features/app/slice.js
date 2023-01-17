import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifyUser: true,
  notification: undefined,
  mainAddress: undefined,
  addresses: undefined,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    triggerNotification: (state, action) => {
      const { notification } = action.payload;
      state.notification = notification;
      state.notifyUser = true;
    },
    showToast: () => {
      // TODO: Implement showDialog
    },
    showBanner: () => {
      // TODO: Implement showBanner
    }
  }
});

export const { triggerNotification } = appSlice.actions;
export default appSlice.reducer;