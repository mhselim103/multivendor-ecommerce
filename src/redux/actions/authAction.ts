// import { Dispatch } from "react";
import { Dispatch } from "redux";
import { AuthActionType, authActionTypes } from "redux/types";
import AuthService from "services/Auth.Service";

export const login = (payload: ILoginData) => {
  return (dispatch: Dispatch<AuthActionType>) => {
    AuthService.login(payload)
      .then((user) => {
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          payload: user,
        });
      })
      .catch((err) => {
        dispatch({
          type: authActionTypes.LOGIN_FAIL,
          payload: err?.response?.data?.message,
        });
      });
  };
};
export const logout = (): AuthActionType => {
  return {
    type: authActionTypes.LOGOUT,
  };
};
