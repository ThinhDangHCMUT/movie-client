import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import { baseUrl } from "../const";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${baseUrl}/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
