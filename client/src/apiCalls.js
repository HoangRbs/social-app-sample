import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from './context/AuthActions';
import { apiRoutes } from "./utils-contants";

export const loginCall = async (userCredential, dispatch) => {
  // dispatch({ type: "LOGIN_START" });  // to start fetching ... or loading... state (see in AuthReducer.js)
  dispatch(LoginStart());
  try {
    const res = await axios.post(apiRoutes.login, userCredential);
    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    // dispatch({ type: "LOGIN_FAILURE", payload: err });
    dispatch(LoginFailure());
  }
};

