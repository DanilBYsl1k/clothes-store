import { createEffect } from "@ngrx/effects";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialState } from "../types/initialState";



export const FeatureSelector=createFeatureSelector<InitialState>('Adittions')

export const itemSelector=createSelector(
    FeatureSelector,
    (state:InitialState)=>state.items
)
export const errSelector=createSelector(
    FeatureSelector,
    (state:InitialState)=>state.err
)
export const loadingSelector=createSelector(
    FeatureSelector,
    (state:InitialState)=>state.loading
)