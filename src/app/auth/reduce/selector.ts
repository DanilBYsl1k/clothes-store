import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IinitialState } from "../types/initialState";

export const FeatureSelector=createFeatureSelector<IinitialState>('auth')

export const registerSelector=createSelector(
    FeatureSelector,
    (state)=>state.register
)
export const userSelector=createSelector(
    FeatureSelector,
    (state)=>state.getuser
)
export const loadingSelector=createSelector(
    FeatureSelector,
    (state)=>state.loading
)
export const errorSelector=createSelector(
    FeatureSelector,
    (state)=>state.errors
)
export const disabledSelector=createSelector(
    FeatureSelector,
    (state)=>state.disabled
)
