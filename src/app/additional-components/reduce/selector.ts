import { createEffect } from "@ngrx/effects";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "../types/initialState";



export const FeatureSelector=createFeatureSelector<InitialState>('adittion')

export const itemSelector=createSelector(
    FeatureSelector,
    (state)=>state.items
)
export const errSelector=createSelector(
    FeatureSelector,
    (state)=>state.err
)
export const loadingSelector=createSelector(
    FeatureSelector,
    (state)=>state.loading
)