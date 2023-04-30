import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";
import { APP_END_POINT } from "../constant";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`${APP_END_POINT}/auth/login`, user);
    console.log(response);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
