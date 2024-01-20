import {actionTypes} from "../actions/types";
  
  
  const user = JSON.parse(localStorage.getItem("user") as string);
  console.log(user, 'i m user')
  
  const initialState = user 
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function auth (state = initialState, action: any) {
    const { type, payload } = action;
    console.log(type,payload,"hey");
  
    switch (type) {
      case actionTypes.REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case actionTypes.REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case actionTypes.LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case actionTypes.LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }
  