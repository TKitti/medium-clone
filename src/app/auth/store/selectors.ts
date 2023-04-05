import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

// AuthStateInterface is the specific part of the state that we want to get with the selector
export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector, 
  (authState: AuthStateInterface) => authState.isSubmitting
);