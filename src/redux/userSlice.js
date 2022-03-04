import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state, action) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
    updateUser: (state, action) => {
      state.currentUser.firstname = action.payload.firstname;
      state.currentUser.lastname = action.payload.lastname;
      state.currentUser.username = action.payload.username;
      state.currentUser.email = action.payload.email;
      state.currentUser.phone = action.payload.phone;
      state.currentUser.birthday = action.payload.birthday;
    },
    updateUserAddress: (state, action) => {
      state.currentUser.shippingaddress = action.payload.shippingaddress;
      state.currentUser.billingaddress = action.payload.billingaddress;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUser,
  updateUserAddress,
} = userSlice.actions;
export default userSlice.reducer;
