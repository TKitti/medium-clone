import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions";

const initialState: AuthStateInterface = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialState, 
  on(registerAction, 
    (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
})));

// we can't write export const authReducer..stb
// because this kind of export only works in 'just in time' compilation
// in 'ahead of time' compilation, in production it doesn't work
// we need an export function:
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}