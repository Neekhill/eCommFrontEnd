import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`http://localhost:9000/auth/login`, user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure);
  }
};
