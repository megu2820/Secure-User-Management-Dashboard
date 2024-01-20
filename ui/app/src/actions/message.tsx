import {actionTypes} from "./types";

export const setMessage = (message: string) => ({
  type: actionTypes.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: actionTypes.CLEAR_MESSAGE,
});