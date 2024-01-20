  import {actionTypes} from "./types";
  import { Dispatch } from "@reduxjs/toolkit";
  
  import AuthService from "../services/auth-service";
  
  export const register = (email: string, password: string) => (dispatch: any) => {
    return AuthService.register(email, password).then(
      (response) => {
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
        });
  
        dispatch({
          type: actionTypes.SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: actionTypes.REGISTER_FAIL,
        });
  
        dispatch({
          type: actionTypes.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username: string, password: string) => (dispatch: any) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: actionTypes.LOGIN_FAIL,
        });
  
        dispatch({
          type: actionTypes.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch: any) => {
    return  AuthService.logout().then(()=> {
      dispatch({
        type: actionTypes.LOGOUT,
      });
      return Promise.resolve();
    }).catch((err: any)=>Promise.reject(err));
  };