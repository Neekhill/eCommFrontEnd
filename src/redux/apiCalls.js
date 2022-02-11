import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`http://localhost:9000/auth/login`, user);
    console.log(response);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
