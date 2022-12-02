

import { Action, createReducer, on } from '@ngrx/store'
import { InitialState } from '../types/initialState'
import { getCardsAction, getCardsActionFailure, getCardsActionSuccess } from './action/getCartAction'

const InitialState:InitialState={
    items: null,
    err: null,
    loading: null
}
const additionReducer=createReducer(
    InitialState,
    on(
        getCardsAction,
        (state)=>({
            ...state,
            items:null,
            loading:false
        })
    ),
    on(
        getCardsActionSuccess,
        (state,action)=>({
            ...state,
            items:action.answer,
            loading:true
        })
    ),
    on(
        getCardsActionFailure,
        (state,action)=>({
            ...state,
            err:action.err,
            loading:false
        })
    )
)
export function reducers(state:InitialState,action:Action){
    return additionReducer(state, action)
}