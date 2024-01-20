import { actionTypes } from "../actions/types";

const initialState = {};

export default function  message(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_MESSAGE:
      return { message: payload };

    case actionTypes.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}